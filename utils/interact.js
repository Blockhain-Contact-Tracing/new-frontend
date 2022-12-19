
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require("../contract-abi.json");
const contractAddress = "0xD3020C3728E7070ad60CbDD9f82BdC05Da996530";

export const vaccinecertiContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const loadCurrentDate = async () => {
    const message = await vaccinecertiContract.methods.message().call();
    return message;
};

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const obj = {
            status: "👆🏽 Write a message in the text-field above.",
            address: addressArray[0],
          };
          return obj;
        } catch (err) {
          return {
            address: "",
            status: "😥 " + err.message,
          };
        }
    } 
    else {
        return {
          address: "",
          status:  " 🦊 You must install Metamask, a virtual Ethereum wallet, in your browser.", 
        }; 
    } 
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (addressArray.length > 0) {
            return {
              address: addressArray[0],
              status: "👆🏽 Write a message in the text-field above.",
            };
          } else {
            return {
              address: "",
              status: "🦊 Connect to Metamask using the top right button.",
            };
          }
        } catch (err) {
          return {
            address: "",
            status: "😥 " + err.message,
          };
        }
      } else {
        return {
          address: "",
          status:  " 🦊 You must install Metamask, a virtual Ethereum wallet, in your browser.", 
        }; 
    } 
};


export const updateMessage = async (message) => {

};