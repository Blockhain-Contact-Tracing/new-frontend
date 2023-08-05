require('dotenv').config()
require('@nomicfoundation/hardhat-chai-matchers')
require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-toolbox')
module.exports = {
    solidity: '0.8.10',
    networks: {
        goerli: {
            url: process.env.QUICKNODE_API_KEY_URL,
            accounts: [process.env.PRIVATE_KEY]
        }
    }
}

/*
networks: {
        hardhat: {},
        defaultNetwork: Network.MATIC_MUMBAI,
        mumbai: {
            url: TESTNET_RPC,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
    etherscan: {
        apiKey: POLYGONSCAN_API_KEY
    }
*/
