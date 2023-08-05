import React, { useState } from 'react';
import { ImageBackground, Text, View, Image, ScrollView, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';

const containerV = {
  shadowColor: '#000000',
  shadowRadius: 3,
  shadowOpacity: 0.2,
  borderRadius: 10,
  textAlign: 'left',
  justifyContent: 'center',
  backgroundColor: '#0169a1',
  // display: 'grid',
  // gridTemplateColumns: '1fr 1fr',
  // gridGap: 10,
};

const containerV2 = {
  shadowColor: '#000000',
  shadowRadius: 3,
  shadowOpacity: 0.2,
  borderRadius: 10,
  textAlign: 'left',
  justifyContent: 'center',
  backgroundColor: '#44bd32',
  // display: 'grid',
  // gridTemplateColumns: '1fr 1fr',
  // gridGap: 10,
};

const container = {
  shadowColor: '#000000',
  shadowRadius: 3,
  shadowOpacity: 0.2,
  padding: 4,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  width: 150,
  paddingBottom: 10,
  alignItems: 'center'
};

const containerOuter = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  // display: 'grid',
  // gridTemplateColumns: '1fr 1fr',
  // gridTemplateRows: '1fr 1fr 1fr',
  // gridGap: 10,
  borderRadius: 10,
  justifyContent: 'center'
};

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

export default function Resources() {
  return (
    <>
      <NavBar />
      <ScrollView style={{ paddingTop: 15, backgroundColor: '#ffffff' }}>
        <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontWeight: '600', paddingBottom: 10, fontSize: 18 }}>
              Vaccination Slot Booking
            </Text>
            <Pressable style={{ 
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: '#0169a1',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems:'center',
              }}>
              <Text
                style={{
                  paddingHorizontal: 10,
                  color: 'white',
                  fontWeight: '600',
                  width: 200
                }}>
                Book your vaccination slot by clicking here.
              </Text>
              <ImageBackground
                style={{
                  width: 120,
                  height: 90,
                }}
                source={require('../assets/slotBooking.png')}>
                <LinearGradient
                  colors={['#0169a1', 'transparent']}
                  style={{ flex: 1, justifyContent: 'center' }}
                  start={[0, 0]}
                  end={[1, 0]}
                  location={[0, 0.25, 1]}></LinearGradient>
              </ImageBackground>
            </Pressable>
          </View>

          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontWeight: '600', paddingBottom: 10, fontSize: 18 }}>
              Vaccination Certificate
            </Text>
            <Pressable style={{display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: '#44bd32',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems:'center',}}>
                <Text
                  style={{
                  color: 'white',
                  fontWeight: '600',
                  width: 200,
                  paddingHorizontal: 10,
                  }}>
                  Download your vaccination certificate securely.
                </Text>
              <ImageBackground
                style={{
                  width: 120,
                  height: 90,
                }}
                source={require('../assets/card.png')}>
                <LinearGradient
                  colors={['#44bd32', 'transparent']}
                  style={{ flex: 1, justifyContent: 'flex-end' }}
                  start={[0, 0]}
                  end={[1, 0]}
                  location={[0, 0.25, 1]}></LinearGradient>
              </ImageBackground>
            </Pressable>
          </View>

          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontWeight: '600', paddingBottom: 10, fontSize: 18 }}>
              Helplines
            </Text>
            <View style={containerOuter}>
              <View style={container}>
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={require('../assets/helpline.jpg')}
                />
                <Text style={{ fontWeight: '700', fontSize: 20 }}>1075</Text>
                <Text style={{ fontWeight: '600' }}>Health Ministry Helpline</Text>
              </View>
              <View style={container}>
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={require('../assets/childHelpline.png')}
                />
                <Text style={{ fontWeight: '700', fontSize: 20 }}>1098</Text>
                <Text style={{ fontWeight: '600' }}>Child Helpline</Text>
              </View>
              <View style={container}>
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={require('../assets/mental.png')}
                />
                <Text style={{ fontWeight: '700', fontSize: 15 }}>08046110007</Text>
                <Text style={{ fontWeight: '600' }}>Mental Health Helpline</Text>
              </View>
              <View style={container}>
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={require('../assets/senior.png')}
                />
                <Text style={{ fontWeight: '700', fontSize: 18 }}>14567</Text>
                <Text style={{ fontWeight: '600' }}>Senior Citizens Helpline</Text>
              </View>
              <View style={container}>
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={require('../assets/ayush.jpg')}
                />
                <Text style={{ fontWeight: '700', fontSize: 18 }}>14443</Text>
                <Text style={{ fontWeight: '600' }}>
                  Ayush COVID-19 Counselling Helpline
                </Text>
              </View>
              <View style={container}>
                <Image
                  style={{
                    alignSelf: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={require('../assets/was.jpg')}
                />
                <Text style={{ fontWeight: '700', fontSize: 15 }}>9013151515</Text>
                <Text style={{ fontWeight: '600' }}>MyGov WhatsApp Helpdesk</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}