import React from 'react'
import { Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Home from './components/Home'
import Resources from './components/Resources'
import Media from './components/Media'
import Updates from './components/Updates'
import LoginPage from './components/LoginPage'

function NavBar() {
    return (
        <Header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1,height:10
            }}>
            <Text>Settings!</Text>
        </Header>
    )
}



const Tab = createMaterialBottomTabNavigator()

export default function App() {
    return (
        <>
            {/* <NavBar /> */}

            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: "blue",
                        marginBottom: 15,
                        borderRadius: 15,
                        marginHorizontal: 10,
                        height: 60,
                        position: 'absolute',
                    }
                }}>
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{ tabBarIcon: makeIconRender('home') }}
                    />
                    <Tab.Screen
                        name="Resources"
                        component={Resources}
                        options={{
                            tabBarIcon: makeIconRender('bag-personal-outline'),
                        }}
                    />
                    <Tab.Screen
                        name="Media"
                        component={Media}
                        options={{
                            tabBarIcon: makeIconRender(
                                'newspaper-variant-outline'
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Updates"
                        component={Updates}
                        options={{ tabBarIcon: makeIconRender('chart-bar') }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

function makeIconRender(name) {
    return ({ color, size }) => (
        <MaterialCommunityIcons name={name} color={'#00d94a'} size={size} />
    )
}
