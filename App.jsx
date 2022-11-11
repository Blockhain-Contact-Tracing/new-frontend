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

const Tab = createMaterialBottomTabNavigator()

export default function App() {
    const [hidden, setHidden] = useState(true);
    return (
        <>
            <StatusBar hidden={hidden} />
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    showLabel: true
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
                        name="Booking"
                        component={VaccinationBooking}
                        options={{
                            tabBarIcon: makeIconRender('account-clock-outline'),
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
        <MaterialCommunityIcons name={name} color={'#00d94a'} size={20} />
    )
}
