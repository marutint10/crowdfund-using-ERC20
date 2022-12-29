const hre = require("hardhat");

const main = async () => {
  const ManualToken = await hre.ethers.getContractFactory("ManualToken");
  const manualtoken = await ManualToken.deploy();

  await manualtoken.deployed();

  console.log("ManualToken address: ", manualtoken.address);
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
