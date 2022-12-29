const hre = require("hardhat");

const main = async () => {
  const Crowdfund = await hre.ethers.getContractFactory("Crowdfund");
  const crowdfund = await Crowdfund.deploy();

  await crowdfund.deployed();

  console.log("Crowdfund address: ", crowdfund.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
