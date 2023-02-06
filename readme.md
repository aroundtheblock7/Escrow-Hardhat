<img width="921" alt="Screen Shot 2023-02-06 at 7 53 02 AM" src="https://user-images.githubusercontent.com/81759076/216982085-78a89dab-d104-469e-a81b-55419e623013.png">
<img width="1113" alt="Screen Shot 2023-02-06 at 7 59 12 AM" src="https://user-images.githubusercontent.com/81759076/216982108-e3ef75f2-9170-4d12-b1a9-5bd86e84f1b1.png">

# Decentralized Escrow Application

This is an Escrow Dapp 

## Project Layout

There are three top-level folders:

1. `/app` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/tests` - contains tests for the solidity contract

## Setup

Install dependencies in the top-level directory with `npm install`.

After you have installed hardhat locally, you can use commands to test and compile the contracts.

Compile the contracts using `npx hardhat compile`. The artifacts will be placed in the `/app` folder, which will make it available to the front-end. 

## Front-End

`cd` into the `/app` directory and run `npm install`

To run the front-end application run `npm start` from the `/app` directory. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deploy locally 

You can open up a local node with.... `npx hardhat node` , then go into the scrips folder, then into deploy.js and deploy the contract with... `npx hardhat run scripts/deploy.js`.  As you can see from the photos i posted the deploy scripts are set to fund the contract upon deployement with all the addresses added to to the constructor, then set for the arbiter to approve the escrow which will send funds to the beneficiary.

## Deploy to Goeril 

As you can see I have set the hardhat.config.js file to have Goeril as a network. You must modify the deploy scripts by harcoding in the deployer address, arbtier address, then beneficiary.  Add your .env file, populate the private key and API Key and deploy with... `npx hardhat run scripts/deploy.js --network goerli`
