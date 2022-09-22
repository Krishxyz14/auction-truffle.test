const HelloBlockchain = artifacts.require("Ebay");

module.exports = function (deployer) {
  deployer.deploy(HelloBlockchain, "Hello Blockchain");
};