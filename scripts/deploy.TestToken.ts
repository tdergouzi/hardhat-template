import { ethers } from "hardhat";

async function main() {
  const TestToken = await ethers.getContractFactory("TestToken");
  const token = await TestToken.deploy("TestToken", "TTT", ethers.utils.parseEther("10000"));

  await token.deployed();

  // deploy record
  // sepolia: 0x708f67C5AFbCE01c5640760B4086A7772676779A
  // arb_goerli: 0x4067a98b6c87dC43a0393dff159a6e2dA1339e0a
  console.log(
    `TestToken deployed to ${token.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
