require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  path: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/FcB4nVyce-NAFB9aD8FGxnd3xNKHaiow",
      accounts: [
        "ee09b4885539192d35564d669399f9d525b7d85e36369ad53957bf555776c13a",
      ],
    },
  },
};
