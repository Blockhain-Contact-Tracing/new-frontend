import React, { useState } from 'react'
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

export default function LoginPage() {
    const provider = new ethers.providers.Web3Provider(
        new ethers.providers.Web3Provider.givenProvider()
    )
    const loginIn = async () => {
        try {
            await provider.enable()
            console.log('Signed in!')
        } catch (error) {
            console.error(error)
        }
    }
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
    return (
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 25,
                    paddingVertical: 10
                }}
            >
                <View style={{ textAlign: 'center', paddingBottom: 30 }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'contain',
                            paddingTop: 15
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
                    onPress={loginIn}
                >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/metamask-1.svg')}
                    />
                    <Text
                        style={{
                            justifySelf: 'center',
                            alignSelf: 'center',
                            color: 'white'
                        }}
                    >
                        Login With Metamask
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}
