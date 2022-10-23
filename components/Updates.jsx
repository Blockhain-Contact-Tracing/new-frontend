import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default function Updates() {
  return (
    <>
      <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <View
          style={{
            marginHorizontal: 25,
            paddingVertical: 10,
          }}>
          <View style={{ paddingBottom: 20 }}>
            <Text
              style={{ fontWeight: '600', fontSize: 18, paddingBottom: 10 }}>
              COVID-19 Cases Overview
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
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  justifyContent: 'center',
                  gridGap: 10,
                  marginHorizontal: 2.5,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                  }}>
                  <Text>Confirmed</Text>
                  <Text style={{ fontWeight: 600, color: 'red' }}>19.4L</Text>
                  <Text style={{ fontWeight: 600, color: 'red' }}>491 ↑</Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                  }}>
                  <Text>Recovered</Text>
                  <Text style={{ fontWeight: 600, color: '#4cd137' }}>
                    18.9L
                  </Text>
                  <Text style={{ fontWeight: 600, color: '#4cd137' }}>
                    212 ↑
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                  }}>
                  <Text>Deaths</Text>
                  <Text style={{ fontWeight: 600 }}>26291</Text>
                  <Text style={{ fontWeight: 600 }}>2 ↑</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{ fontWeight: '600', fontSize: 18, paddingBottom: 10 }}>
              All States/UT Statistics
            </Text>
            <View style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
            
            <View style={{display:"flex",flex:1,textAlign:"center"}}>
            <Text style={{paddingBottom: 10}}><b>Location</b></Text>
            <Text style={{paddingBottom: 10,fontSize:15}}>Maharashtra</Text>
            <Text style={{paddingBottom: 10,fontSize:15}}>Kerala</Text>
            <Text style={{paddingBottom: 10,fontSize:15}}>Karnataka</Text>
            <Text style={{paddingBottom: 10,fontSize:15}}>Delhi</Text>
            <Text style={{paddingBottom: 10,fontSize:15}}>Haryana</Text>
            <Text style={{paddingBottom: 10,fontSize:15}}>Uttar Pradesh</Text>
            <Text style={{paddingBottom: 10,fontSize:15}}>Uttarakhand</Text>
            </View>

            <View style={{display:"flex",flex:1,color:"red",textAlign:"center"}}>
            <Text style={{color:"red",paddingBottom: 10}}><b>Confirmed</b></Text>
            <Text style={{color:"red",paddingBottom: 10,fontSize:15}}>80.2L</Text>
            <Text style={{color:"red",paddingBottom: 10,fontSize:15}}>66.9L</Text>
            <Text style={{color:"red",paddingBottom: 10,fontSize:15}}>39.9L</Text>
            <Text style={{color:"red",paddingBottom: 10,fontSize:15}}>35.2L</Text>
            <Text style={{color:"red",paddingBottom: 10,fontSize:15}}>23.3L</Text>
            <Text style={{color:"red",paddingBottom: 10,fontSize:15}}>23.3L</Text>
            <Text style={{color:"red",paddingBottom: 10,fontSize:15}}>23.3L</Text>
            </View>

            <View style={{display:"flex",flex:1,color:"#4cd137",textAlign:"center"}}>
            <Text style={{color:"#4cd137",paddingBottom: 10}}><b>Recovered</b></Text>
            <Text style={{color:"#4cd137",paddingBottom: 10,fontSize:15}}>78.8L</Text>
            <Text style={{color:"#4cd137",paddingBottom: 10,fontSize:15}}>65.9L</Text>
            <Text style={{color:"#4cd137",paddingBottom: 10,fontSize:15}}>39.3L</Text>
            <Text style={{color:"#4cd137",paddingBottom: 10,fontSize:15}}>34.6L</Text>
            <Text style={{color:"#4cd137",paddingBottom: 10,fontSize:15}}>22.9L</Text>
            <Text style={{color:"#4cd137",paddingBottom: 10,fontSize:15}}>22.9L</Text>
            <Text style={{color:"#4cd137",paddingBottom: 10,fontSize:15}}>22.9L</Text>
            </View>
            
            </View>
            
          </View>
        </View>
      </ScrollView>
    </>
  );
}
