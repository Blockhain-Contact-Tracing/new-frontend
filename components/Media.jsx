import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'

const imgStyle = {
    width: '100%',
    height: '300%',
    border: '0.5px solid',
    borderRadius: '5px'
}

function NavBar() {
    return (
        <View style={{ flexDirection: 'row', position: "sticky", justifyContent: "space-between", padding: 15, backgroundColor: "#99ffbb" }}>
            <Pressable>
                <Image style={{ width: 24, height: 24 }} source={require('../assets/menu_icon.png')} />
            </Pressable>
            <Text style={{
                fontWeight: '400',
                fontSize: 20,
            }}>BlocoWin</Text>
        </View>
    )
}

export default function Media() {
    return (
        <>
            <ScrollView style={{ paddingTop: 15, backgroundColor: '#ffffff' }}>
                <View
                    style={{
                        marginHorizontal: 25,
                        paddingVertical: 10,
                    }}
                >
                    <Image
                        style={imgStyle}
                        source={require('../assets/c1.png')}
                    />
                    <Text style={{ fontWeight: '600', marginBottom: 10 }}>
                        Coronavirus disease (COVID-19)
                    </Text>
                    <Image
                        style={imgStyle}
                        source={require('../assets/c2.png')}
                    />
                    <Text style={{ fontWeight: '600' }}>
                        Pfizer’s New Covid-19 Booster Targeting Omicron Could Be
                        Authorized This Week
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}
