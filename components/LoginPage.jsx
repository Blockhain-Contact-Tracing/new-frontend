import React, { useState } from 'react'
// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values'

// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims'

// Import the ethers library
import { ethers } from 'ethers'

import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Pressable
} from 'react-native'
import Web3Modal from 'web3modal'

// import { loginState } from '../atoms/loginstate'
// import { useRecoilState } from 'recoil'
export default function LoginPage() {
    // const [loggedin, setLoggedin] = useRecoilState(loginState)
    // const provider = new ethers.providers.Web3Provider(
    //     new ethers.providers.Web3Provider.givenProvider()
    // )
    // const loginIn = async () => {
    //     try {
    //         await provider.enable()
    //         console.log('Signed in!')
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // const fromAddress = '0xYOUR_ADDRESS'
    // const toAddress = '0xANOTHER_ADDRESS'
    // const amount = '0.1' // in ETH

    // const signer = provider.getSigner()
    // const tx = {
    //     to: toAddress,
    //     value: ethers.utils.parseEther(amount)
    // }

    // signer
    //     .sendTransaction(tx)
    //     .then((tx) => {
    //         console.log(`Transaction sent with hash: ${tx.hash}`)
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     })
    const providerOptions = {
        walletconnect: {
            metaMask: true,
            coinbaseWallet: true
        }
    }
    async function connectWallet() {
        try {
            let web3modal = new Web3Modal({
                cacheProvider: true, // optional
                providerOptions // required
            })
            const web3ModalInstance = await Web3Modal.connect()
            const web3Modalprovider = new ethers.providers.Web3Provider(
                web3ModalInstance
            )
            console.log(web3Modalprovider)
        } catch (error) {
            console.log(error)
            console.log('ERROR!')
        }
    }
    return (
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 25,
                    paddingVertical: 10
                }}
            >
                <View
                    style={{
                        textAlign: 'center',
                        paddingBottom: 30,
                        paddingTop: 100
                    }}
                >
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'contain'
                            // paddingTop: 50
                        }}
                        source={require('../assets/logo.png')}
                    />
                    <Text
                        style={{
                            fontWeight: '600',
                            fontSize: 25,
                            justifySelf: 'center'
                        }}
                    >
                        BloCoWin
                    </Text>
                </View>

                <Pressable
                    style={{
                        backgroundColor: '#233447',
                        borderRadius: 50,
                        flex: 1,
                        flexDirection: 'row',
                        display: 'flex',
                        padding: 10
                    }}
                    onPress={connectWallet}
                >
                    {/* <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/metamask-1.svg')}
                    /> */}
                    <Text
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            justifySelf: 'center',
                            alignSelf: 'center',
                            color: 'white'
                        }}
                    >
                        Login
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}
