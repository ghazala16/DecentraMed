// migrations/2_deploy_contract.js
var Ownable = artifacts.require("Ownable");

module.exports = function (deployer) {
  deployer.deploy(Ownable);
};
