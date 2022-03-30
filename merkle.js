const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
let Whitelist = require('./Accounts.json')

const leafNodes = Whitelist.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
const rootHash = merkleTree.getRoot();

console.log('Whitelist Merkle Tree\n', merkleTree.toString());
console.log("Root Hash: ", '0x' + rootHash.toString('hex'));

// put address here to check if its on your wl or not
const claimingAddress = keccak256('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');

const hexProof = merkleTree.getHexProof(claimingAddress);
console.log('hexproof\n', hexProof);
console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));

