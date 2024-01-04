/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
const ALCHEMY_API_KEY = "S8J2HNnchjHV5XdF94GvwqGGdeBwEtNZ";
const GOERLI_API_KEY = "0172892e3cafbaaffcd66c20cafef613bc39e8bc05f61c36bf9c1471d17c5b9f";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_API_KEY}`]  
    }
  }
};
