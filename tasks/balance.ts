import { task } from "hardhat/config"

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .addOptionalParam("name", "The account's alias", "Ted")
  .setAction(async (taskArgs, hre) => {
    await hre.run("accounts");
    const balance = await hre.ethers.provider.getBalance(taskArgs.account);
    console.log(taskArgs.name, "balance is", hre.ethers.utils.formatEther(balance), "ETH")
  })