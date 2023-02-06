const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  const [deployer, arbiter, beneficiary] = await ethers.getSigners();

  const _value = ethers.utils.parseEther("200");

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Escrow = await hre.ethers.getContractFactory("Escrow", deployer);
  const escrow = await Escrow.deploy(arbiter.address, beneficiary.address, {value: _value});
  console.log("Escrow deployed to: ", escrow.address);
  const escrowBalance = await ethers.provider.getBalance(escrow.address);
  console.log('Balance is: ' + escrowBalance);
  console.log("Deployer Account balance: ",(await deployer.getBalance()).toString());
  console.log("Beneficiary Account balance before approval: ",(await beneficiary.getBalance()).toString());

  const approve = await escrow.connect(arbiter).approve();
  console.log("Beneficary balance after approval: ",(await beneficiary.getBalance()).toString());

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });