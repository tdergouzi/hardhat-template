import { HardhatUserConfig, extendEnvironment } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import "./tasks"

dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [String(process.env.PRIVATE_KEY)]
    },
    arb_goerli: {
      url: `https://arbitrum-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [String(process.env.PRIVATE_KEY)]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    parallel: false,
    timeout: 40000
  },
  gasReporter: {
    enabled: process.env.REPORTGAS !== undefined
  },
  etherscan: {
    apiKey: String(process.env.ETHERSCAN_API_KEY)
  }
};

extendEnvironment((hre) => {

})

export default config;
