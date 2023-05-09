import hre from "hardhat";
import { expect } from "chai";

describe("Hardhat Runtime Enviroment", function () {

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
})