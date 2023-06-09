import hre from "hardhat";
import { expect } from "chai";

describe("Hardhat Runtime Enviroment", async () => {

  describe("hre config", async () => {
    it("should have a config file", function () {
      expect(hre.config).to.not.eq(undefined)
    })
  })

  describe("hre artifacts", async () => {
    it("reading artifacts from name", async function () {
      let lock = await hre.artifacts.readArtifact("Lock")
      expect(lock.contractName).to.eq("Lock")
    })

    it("reading artifacts from sol", async function () {
      let lock = await hre.artifacts.readArtifact("contracts/Lock.sol:Lock")
      expect(lock.contractName).to.eq("Lock")
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
      expect(blockNumber).to.eq(0)
    })
  })
})