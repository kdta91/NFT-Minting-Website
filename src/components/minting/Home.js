import WalletBalance from "./WalletBalance";
import NFTImage from "./NFTImage";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import KettleDumbBarbell from "../../artifacts/contracts/MyNFT.sol/KettleDumbBarbell.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

const provider = new ethers.providers.Web3Provider(window.ethereum);

const accounts = window.ethereum.request({
  method: "eth_requestAccounts",
});

// get the end user
const signer = provider.getSigner(accounts[0]);

// get the smart contract
const contract = new ethers.Contract(
  contractAddress,
  KettleDumbBarbell.abi,
  signer
);

const Home = () => {
  const [totalMinted, setTotalMinted] = useState(0);

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    // console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div style={{ padding: "2vw" }}>
      <WalletBalance />

      <div className="nft-container">
        {Array(totalMinted + 1)
          .fill(0)
          .map((_, i) => (
            <NFTImage
              key={i}
              tokenId={i}
              getCount={getCount}
              contract={contract}
              signer={signer}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
