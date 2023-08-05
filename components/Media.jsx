import React from 'react'
import { Text, View, ScrollView, Image, Pressable } from 'react-native'

const imgStyle = {
    resizeMode: 'contain',
    borderRadius: 5
}

function NavBar() {
    return (
        <View
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}
            style={{ flexDirection: 'row', zIndex: 1, position: "relative", justifyContent: "space-between", padding: 15, backgroundColor: "#99ffbb" }}
        >
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
            <NavBar />
            <ScrollView style={{ paddingTop: 15, backgroundColor: '#ffffff' }}>
                <View
                    style={{
                        marginHorizontal: 25,
                        paddingVertical: 10,
                        width: 350
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
