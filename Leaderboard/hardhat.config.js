require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    zerog: {
      url: "https://evmrpc-testnet.0g.ai",
      chainId: 16601,
      accounts: [
        `0x${"Your Private Key"}`,
      ],
    },
  },
  solidity: {
    version: "0.8.19",
  },
  etherscan: {
    apiKey: "empty",
    customChains: [
      {
        network: "zerog",
        chainId: 16601,
        urls: {
          apiURL: "https://evmrpc-testnet.0g.ai",
          browserURL: "https://chainscan-galileo.0g.ai",
        },
      },
    ],
  },
};
