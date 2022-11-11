import React from 'react';
import { Text, View, ScrollView, Pressable, Image } from 'react-native';

function NavBar() {
  return (
    <View
      style={{ flexDirection: 'row', position: "sticky", justifyContent: "space-between", padding: 15, backgroundColor: "#99ffbb", zIndex: 1 }}
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


export default function Updates() {
  return (
    <>
      <ScrollView style={{ paddingTop: 15, backgroundColor: '#ffffff' }}>
        <View
          style={{
            marginHorizontal: 25,
            paddingVertical: 10,
          }}>
          <View style={{ paddingBottom: 20 }}>
            <Text
              style={{ fontWeight: '600', fontSize: 18, paddingBottom: 2 }}>
              COVID-19 Cases Overview
            </Text>
            <Text
              style={{ fontWeight: '300', fontSize: 14, paddingBottom: 10 }}>
              11 November 2022, Updated 3 hours, 24 minutes ago
            </Text>
            <View style={{ backgroundColor: '#cff7e1', padding: 15 }}>
              <Text
                style={{
                  fontWeight: '700',
                  color: '#4cd137',
                  paddingBottom: 20,
                }}>
                Delhi
              </Text>
              <View
                style={{
                  // display: 'grid',
                  // gridTemplateColumns: '1fr 1fr 1fr',
                  justifyContent: 'center',
                  // gridGap: 10,
                  marginHorizontal: 2.5,
                }}>

                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent:'space-between'
                }}>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 2,
                      borderRadius: 5,
                      width:100
                    }}>
                    <Text>Confirmed</Text>
                    <Text style={{ fontWeight: '600', color: 'red' }}>19.4L</Text>
                    <Text style={{ fontWeight: '600', color: 'red' }}>491 ↑</Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 2,
                      borderRadius: 5,
                      width:100
                    }}>
                    <Text>Recovered</Text>
                    <Text style={{ fontWeight: '600', color: '#4cd137' }}>
                      18.9L
                    </Text>
                    <Text style={{ fontWeight: '600', color: '#4cd137' }}>
                      212 ↑
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 2,
                      borderRadius: 5,
                      width:100
                    }}>
                    <Text>Deaths</Text>
                    <Text style={{ fontWeight: '600' }}>26291</Text>
                    <Text style={{ fontWeight: '600' }}>2 ↑</Text>
                  </View>
                </View>

              </View>
            </View>
          </View>

          <Text style={{ fontWeight: '600', fontSize: 18, paddingBottom: 10 }}>All States/UT Statistics</Text>
          <View style={{ display: "flex", flexDirection: 'row', alignContent: 'center', justifyContent:'space-between' }}>
            <View style={{ display: "flex", flex: 1, flexDirection: 'column', textAlign: "center", alignContent: 'center' }}>

              <Text style={{ paddingBottom: 10, fontWeight: 'bold' }}>Location</Text>
              <Text style={{ paddingBottom: 10, fontSize: 15 }}>Maharashtra</Text>
              <Text style={{ paddingBottom: 10, fontSize: 15 }}>Kerala</Text>
              <Text style={{ paddingBottom: 10, fontSize: 15 }}>Karnataka</Text>
              <Text style={{ paddingBottom: 10, fontSize: 15 }}>Delhi</Text>
              <Text style={{ paddingBottom: 10, fontSize: 15 }}>Haryana</Text>
              <Text style={{ paddingBottom: 10, fontSize: 15 }}>Uttar Pradesh</Text>
              <Text style={{ paddingBottom: 10, fontSize: 15 }}>Uttarakhand</Text>
            </View>

            <View style={{ display: "flex", flex: 1, flexDirection: 'column', color: "red", textAlign: "center", alignContent: 'center' }}>
              <Text style={{ color: "red", paddingBottom: 10, fontWeight: 'bold' }}>Confirmed</Text>
              <Text style={{ color: "red", paddingBottom: 10, fontSize: 15 }}>80.2L</Text>
              <Text style={{ color: "red", paddingBottom: 10, fontSize: 15 }}>66.9L</Text>
              <Text style={{ color: "red", paddingBottom: 10, fontSize: 15 }}>39.9L</Text>
              <Text style={{ color: "red", paddingBottom: 10, fontSize: 15 }}>35.2L</Text>
              <Text style={{ color: "red", paddingBottom: 10, fontSize: 15 }}>23.3L</Text>
              <Text style={{ color: "red", paddingBottom: 10, fontSize: 15 }}>23.3L</Text>
              <Text style={{ color: "red", paddingBottom: 10, fontSize: 15 }}>23.3L</Text>
            </View>

            <View style={{ display: "flex", flex: 1, flexDirection: 'column', color: "#4cd137", textAlign: "center", alignContent: 'center' }}>
              <Text style={{ color: "#4cd137", paddingBottom: 10, fontWeight: 'bold' }}>Recovered</Text>
              <Text style={{ color: "#4cd137", paddingBottom: 10, fontSize: 15 }}>78.8L</Text>
              <Text style={{ color: "#4cd137", paddingBottom: 10, fontSize: 15 }}>65.9L</Text>
              <Text style={{ color: "#4cd137", paddingBottom: 10, fontSize: 15 }}>39.3L</Text>
              <Text style={{ color: "#4cd137", paddingBottom: 10, fontSize: 15 }}>34.6L</Text>
              <Text style={{ color: "#4cd137", paddingBottom: 10, fontSize: 15 }}>22.9L</Text>
              <Text style={{ color: "#4cd137", paddingBottom: 10, fontSize: 15 }}>22.9L</Text>
              <Text style={{ color: "#4cd137", paddingBottom: 10, fontSize: 15 }}>22.9L</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </>
  );
}
