require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    mainnet:{
      url: 'https://eth-mainnet.g.alchemy.com/v2/zClWHBsjYBdbECMop6DHlcN-dzYG-TdT',
      accounts: ['49af7e5f60c6254011e607d99644ce5d7eae1d54c6ed2c59ccea1b9e7ad1cc29']
    }
  }
};
