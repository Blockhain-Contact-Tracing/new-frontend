import React, { useState } from 'react'
import { Text, View, ScrollView, Button, Platform, TextInput } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function VaccinationBooking() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
        setText(fDate + ' ' + fTime)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <>
            <ScrollView style={{ paddingTop: 15, backgroundColor: '#ffffff' }}>
                <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
                    <Text style={{ fontWeight: '600', paddingBottom: 10, fontSize: 18 }}>
                        Vaccination Slot Booking
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold',fontSize:15 }}>Date of Vaccination</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <TextInput placeholder={text} />
                        </View>
                    
                    </View>
                    <Button style={{ width: 50 }} title='Date' onPress={() => showMode('date')}></Button>
                    <Button style={{ width: 50 }} title='Time' onPress={() => showMode('time')}></Button>
                    {show && (
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display='default'
                            onChange={onChange}
                        />
                    )}
                </View>
            </ScrollView>
        </>
    )
}
