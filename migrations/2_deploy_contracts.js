// migrating the appropriate contracts
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer, network, accounts) {
 deployer.deploy(SupplyChain,{from: accounts[0]});
};
