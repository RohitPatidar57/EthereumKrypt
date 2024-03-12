//https://eth-goerli.g.alchemy.com/v2/85OThl7sqSWx3WyHQMZ4Sl9U9bAnUFOI

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-goerli.g.alchemy.com/v2/85OThl7sqSWx3WyHQMZ4Sl9U9bAnUFOI',
      accounts: ['094a6fe3a7d973cbabc4b9fd1ea806776fcdbdb3c356c9d2b7ca0b0b2204f430']
    },
  },
};