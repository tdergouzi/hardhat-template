# Hardhat Template

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

## Install Dependencies
```shell
yarn
```

```shell
npm install -g solhint
```

## Setup env
```shall
vim .env

PRIVATE_KEY="YOUR KEY"
INFURA_API_KEY="YOUR KEY"
ETHERSCAN_API_KEY="YOUR KEY"
```

## Commands
Compile the contracts.
```shell
yarn compile
```

Test the contracts with test cases.
```shell
yarn test
yarn test test/contract
```

Test the gas usage.
```shell
yarn profile
yarn profile test/contract
```

Test coverate
```shell
yarn coverage
```

Solhint contracts
```shell
solhint contracts/XXX.sol
```

Flatten contract. 

This can help you when you want to verify contract in etherscan.

The flattened contract contains duplicate license-specifiers and params, which is unfriendly and requires manual deduplication. 
```shell
yarn flatten contracts/XXX.sol > Flattened.sol
```

Create an interactive JavaScript console which the HRE has been initialized with hardhat.config.ts, especially the default network.

You can just write the node.js in the terminal.
```shell
yarn console
```

Clean the caches.
```shell
yarn clean
```

Deploy contract.
```shell
yarn hardrun --network network scripts/deploy.ts
```

Verify contract.
```shell
yarn verify --network network <contract_address> <constructor_params> 
```
