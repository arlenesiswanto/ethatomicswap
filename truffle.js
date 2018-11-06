var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'quality erosion slight lake fold once basic attract ice harsh solar athlete';

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/bc98e8272357481cb037bf2117080e32bc98e8272357481cb037bf2117080e32")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};
