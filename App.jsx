import './global'
// import '@walletconnect/react-native-compat'
// import SignClient from '@walletconnect/sign-client'
import React, { useState } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Home from './components/Home'
import VaccinationBooking from './components/VaccinationBooking'
import Resources from './components/Resources'
import Media from './components/Media'
import Updates from './components/Updates'
import LoginPage from './components/LoginPage'
// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values'

// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims'

// Import the ethers library
import { ethers } from 'ethers'
import { Alchemy, Network } from 'alchemy-sdk'

// const signClient = await SignClient.init({
//     projectId: process.env.WALLETCONNECT_PROJECT_ID,
//     metadata: {
//         name: 'Test Wallet',
//         description: 'Test Wallet',
//         url: '#',
//         icons: ['https://walletconnect.com/walletconnect-logo.png']
//     }
// })
const Tab = createMaterialBottomTabNavigator()

export default function App() {
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // const provider = ethers.getDefaultProvider()
    // const provider = new ethers.providers.Web3Provider(web3.currentProvider)
    // console.log(provider)

    // const settings = {
    //     apiKey: process.env.ALCHEMY_API_KEY,
    //     network: Network.MATIC_MUMBAI
    // }

    // const alchemy = new Alchemy(settings)
    // const accounts = await alchemy.eth.getAccounts()
    // console.log(accounts)

    const [hidden, setHidden] = useState(true)
    const [loggedin, setLoggedin] = useState(true)
    return (
        <>
            <StatusBar hidden={hidden} />
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        showLabel: true
                    }}
                >
                    {loggedin ? (
                        <>
                            <Tab.Screen
                                name="Home"
                                component={Home}
                                options={{ tabBarIcon: makeIconRender('home') }}
                            />
                            <Tab.Screen
                                name="Resources"
                                component={Resources}
                                options={{
                                    tabBarIcon: makeIconRender(
                                        'bag-personal-outline'
                                    )
                                }}
                            />
                            <Tab.Screen
                                name="Booking"
                                component={VaccinationBooking}
                                options={{
                                    tabBarIcon: makeIconRender(
                                        'account-clock-outline'
                                    )
                                }}
                            />
                            <Tab.Screen
                                name="Media"
                                component={Media}
                                options={{
                                    tabBarIcon: makeIconRender(
                                        'newspaper-variant-outline'
                                    )
                                }}
                            />
                            <Tab.Screen
                                name="Updates"
                                component={Updates}
                                options={{
                                    tabBarIcon: makeIconRender('chart-bar')
                                }}
                            />
                        </>
                    ) : (
                        <Tab.Screen name="Login" component={LoginPage} />
                    )}
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

function makeIconRender(name) {
    return ({ color, size }) => (
        <MaterialCommunityIcons name={name} color={'#00d94a'} size={20} />
    )
}
