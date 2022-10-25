import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Pressable,
} from 'react-native'

export default function LoginPage() {
    return (
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 25,
                    paddingVertical: 10,
                }}
            >
                <View style={{ textAlign: 'center', paddingBottom: 30 }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'contain',
                            paddingTop: 15,
                        }}
                        source={require('../assets/logo.png')}
                    />
                    <Text
                        style={{
                            fontWeight: '600',
                            fontSize: 25,
                            justifySelf: 'center',
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
                        padding: 10,
                    }}
                >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/metamask-1.svg')}
                    />
                    <Text
                        style={{
                            justifySelf: 'center',
                            alignSelf: 'center',
                            color: 'white',
                        }}
                    >
                        Login With Metamask
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}
