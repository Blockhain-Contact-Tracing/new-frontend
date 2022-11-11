import React,{ useState } from 'react'
import { Text, View, ScrollView } from 'react-native'

export default function VaccinationBooking() {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <ScrollView style={{ backgroundColor: '#ffffff' }}>
                <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
                    
                </View>
            </ScrollView>
        </>
    )
}
