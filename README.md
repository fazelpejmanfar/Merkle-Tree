# Merkle-Tree
<h1 align="center">Welcome to Merkle Tree Generator 👋</h1>
<p>
</p>

> This is a tool that generates a Merkle Tree with root and proof to use in smart contracts with merkle Whitelists.

## Install

```sh
npm install
```

## Usage

```sh
npm run merkle
```
**Step 1** Install the dependiecies,

**Step 2** Add accounts in accounts.json and save it,

**Step 3** Run npm run merkle,

**Step 4** in console you can see the roothash of the tree, pass that root to your smart contract,

**Step 5** to get a proof of an account , paste your account in merkle.js in const claimingAddress = keccak256('YOUR ACCOUNT');
