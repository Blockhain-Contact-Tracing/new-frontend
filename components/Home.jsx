import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Pressable,
} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const styles = StyleSheet.create({
    map: { ...StyleSheet.absoluteFillObject },
    boldText: {
        fontWeight: 'bold',
    },
})

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

export default function Home() {
    return (
        <>
            <NavBar />
            <ScrollView style={{ backgroundColor: '#ffffff' }}>
                <View>
                    <View
                        style={{ display: 'flex', padding: 5, backgroundColor: '#bff4d8' }}>
                        <View
                            style={{
                                display: 'flex',
                                margin: 25,
                                textAlign: 'left',
                                backgroundColor: '#3bf87b',
                                borderRadius: 10,
                            }}>
                            <View
                                style={{
                                    // display: 'grid',
                                    fontSize: 20,
                                    paddingLeft: 10,
                                    paddingTop: 20,
                                    paddingBottom: 40,
                                    // gridTemplateColumns: '1fr 1fr',
                                    // gridGap: 1,
                                }}>
                                <View style={{ display: 'flex', alignSelf: 'center' }}>
                                    <Text
                                        style={{ fontWeight: '600', fontSize: 20, paddingBottom: 15 }}>
                                        Virat Kohli
                                    </Text>
                                    <Text>Fully Vaccinated</Text>
                                    <Text>
                                        with <Text style={{ fontWeight: 'bold' }}>Covaxin</Text>
                                    </Text>
                                    <Text>
                                        on <Text style={{ fontWeight: 'bold' }}>19th October 2022</Text>
                                    </Text>
                                </View>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 50,
                                        justifySelf: 'center',
                                        alignSelf: 'center',
                                    }}
                                    source={require('../assets/kohli.jpg')}
                                />
                            </View>

                            <Text
                                style={{ display: 'flex', paddingLeft: 10, paddingBottom: 5 }}>
                                *Eligible for booster dose in <Text style={{ fontWeight: 'bold' }}>36 days</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
                        <Text
                            style={{
                                fontWeight: '600',
                                paddingBottom: 10,
                                fontSize: 18,
                            }}
                        >
                            Your Neighbourhood
                        </Text>
                        <View style={{ height: 300 }}>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
                        <Text
                            style={{
                                fontWeight: '600',
                                paddingBottom: 10,
                                fontSize: 18,
                            }}
                        >
                            Quick Links
                        </Text>
                        <View
                            style={{
                                // display: 'grid',
                                // gridTemplateColumns: '1fr 1fr',
                                justifyItems: 'center',
                            }}
                        >
                            <Pressable
                                style={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#dfe4ea',
                                    width: "90%",
                                    height: 100,
                                    borderRadius: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flex: 2,
                                    shadowColor: '#000000',
                                    shadowRadius: 3,
                                    shadowOpacity: 0.2,
                                    margin: 10,
                                    padding: 10
                                }}
                            >
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                    }}
                                    source={require('../assets/privacy.jpg')}
                                />
                                <Text>Privacy FAQs</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#dfe4ea',
                                    width: "90%",
                                    height: 100,
                                    borderRadius: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flex: 2,
                                    shadowColor: '#000000',
                                    shadowRadius: 3,
                                    shadowOpacity: 0.2,
                                    margin: 10,
                                    padding: 10
                                }}
                            >
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                    }}
                                    source={require('../assets/emergency.png')}
                                />
                                <Text>Emergency Helpline</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#dfe4ea',
                                    width: "90%",
                                    height: 100,
                                    borderRadius: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flex: 2,
                                    shadowColor: '#000000',
                                    shadowRadius: 3,
                                    shadowOpacity: 0.2,
                                    margin: 10,
                                    padding: 10
                                }}
                            >
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                    }}
                                    source={require('../assets/fund.jpg')}
                                />
                                <Text>PM Cares Fund</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
