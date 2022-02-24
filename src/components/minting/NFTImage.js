import { useState, useEffect } from "react";
import { ethers } from "ethers";

const NFTImage = ({ tokenId, getCount, contract, signer }) => {
  const contentId = process.env.REACT_APP_IPFS_CID;
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);

  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    // console.log(result);
    setIsMinted(result);
  };

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther("0.05"),
    });

    await result.wait();
    getMintedStatus();
    getCount();
  };

  const getURI = async () => {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  };

  return (
    <div className="nft">
      <img src={isMinted ? imageURI : "img/placeholder.png"} alt="NFT"></img>
      <h5>ID #{tokenId}</h5>
      {!isMinted ? (
        <button onClick={mintToken}>Mint</button>
      ) : (
        <button onClick={getURI}>Taken! Show URI</button>
      )}
    </div>
  );
};

export default NFTImage;
