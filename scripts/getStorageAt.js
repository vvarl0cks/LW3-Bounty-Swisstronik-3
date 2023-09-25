const dotenv = require("dotenv");
const { Wallet, ethers, getDefaultProvider } = require("ethers");
const hre = require("hardhat");

dotenv.config();

const swisstronikRPC = "https://json-rpc.testnet.swisstronik.com/";
const mumbaiRPC = "https://polygon-mumbai-bor.publicnode.com";
const sepoliaRPC = "https://eth-sepolia.g.alchemy.com/v2/demo";
const contractAddr = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a"; 


const getMessageWithProvider = async (provider, providerName) => {
  try {
    const message = await provider.getStorageAt(contractAddr, 0);

    console.log(`Getting Message from ${providerName}:`);
    console.log("BYTES: ", message);
    console.log(typeof (message));

    const decodedValue = ethers.utils.isBytes(message);

    console.log(decodedValue);
  } catch (error) {
    console.error(`Error getting message from ${providerName}:`, error);
  }
}

async function main() {

  const providerSwisstronik = ethers.getDefaultProvider(swisstronikRPC);
  const providerMumbai = ethers.getDefaultProvider(mumbaiRPC);
  const providerSepolia = ethers.getDefaultProvider(sepoliaRPC);


  await getMessageWithProvider(providerSwisstronik, "Swisstronik");
  await getMessageWithProvider(providerMumbai, "Mumbai");
  await getMessageWithProvider(providerSepolia, "Sepolia");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});