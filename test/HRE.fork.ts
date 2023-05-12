import hre from "hardhat";
import { reset } from "@nomicfoundation/hardhat-network-helpers"
import { expect } from "chai";
import { BigNumber } from "ethers";

describe("Hardhat Runtime Enviroment", async () => {

  before("set hardhat network", async () => {
    await reset(`https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`, 3469412)
  })
  
  describe("hre config", async () => {
    it("should have a config file", function () {
      expect(hre.config).to.not.eq(undefined)
    })
  })

  describe("hre signer", async () => {
    it("signers length should be 20", async () => {
      let signers = await hre.ethers.getSigners()
      expect(signers.length).to.eq(20)
    })

    it("the first signer should be account#0", async () => {
      let signers = await hre.ethers.getSigners()
      let expectSigner0 = ("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266").toLocaleLowerCase()
      expect((await signers[0].getAddress()).toLocaleLowerCase()).to.eq(expectSigner0)
    })
  })

  describe("hre block infomation", async () => {
    it("block number", async () => {
      let blockNumber = await hre.ethers.provider.getBlockNumber()
      expect(blockNumber).to.eq(BigNumber.from(3469412))
    })
  })
})