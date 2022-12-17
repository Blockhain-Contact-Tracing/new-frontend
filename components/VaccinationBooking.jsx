import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    ScrollView,
    Button,
    Platform,
    TextInput,
    Pressable,
    Image
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
// import {
//     vaccinecertiContract,
//     connectWallet,
//     // updateMessage,
//     loadCurrentDate,
//     getCurrentWalletConnected,
// } from './utils/interact.js'

function NavBar() {
    return (
        <View
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}
            style={{
                flexDirection: 'row',
                zIndex: 1,
                position: 'relative',
                justifyContent: 'space-between',
                padding: 15,
                backgroundColor: '#99ffbb'
            }}
        >
            <Pressable>
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require('../assets/menu_icon.png')}
                />
            </Pressable>
            <Text
                style={{
                    fontWeight: '400',
                    fontSize: 20
                }}
            >
                BlocoWin
            </Text>
        </View>
    )
}

export default function VaccinationBooking() {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    const [walletAddress, setWallet] = useState('')
    const [status, setStatus] = useState('')

    //called only once
    useEffect(async () => {
        const date = await loadCurrentDate()
        setDate(date)
        addSmartContractListener()
        const { address, status } = await getCurrentWalletConnected()
        setWallet(address)
        setStatus(status)
        addWalletListener()
    }, [])

    function addSmartContractListener() {
        vaccinecertiContract.events.UpdatedDate({}, (error, data) => {
            if (error) {
                setStatus('😥 ' + error.message)
            } else {
                setMessage(data.returnValues[1])
                // setNewMessage('')
                setStatus('🎉 Your message has been updated!')
            }
        })
    }

    function addWalletListener() {
        //TODO: implement
    }

    const connectWalletPressed = async () => {
        //TODO: implement
        const walletResponse = await connectWallet()
        setStatus(walletResponse.status)
        setWallet(walletResponse.address)
    }

    const onUpdatePressed = async () => {
        //TODO: implement
        const { status } = await updateMessage(walletAddress, newMessage)
        setStatus(status)
    }

    const onChange = async (event, selectedDate) => {
        if (!window.ethereum || address === null) {
            return {
                status: '💡 Connect your Metamask wallet to update the message on the blockchain.'
            }
        }
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)

        let tempDate = new Date(currentDate)
        let fDate =
            tempDate.getDate() +
            '/' +
            (tempDate.getMonth() + 1) +
            '/' +
            tempDate.getFullYear()
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes()
        setText(fDate + ' ' + fTime)
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    const showDatepicker = () => {
        showMode('date')
    }

    const showTimepicker = () => {
        showMode('time')
    }

    return (
        <>
            <NavBar />
            <ScrollView style={{ paddingTop: 15, backgroundColor: '#ffffff' }}>
                <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
                    <Text
                        style={{
                            fontWeight: '600',
                            paddingBottom: 15,
                            fontSize: 18
                        }}
                    >
                        Vaccination Slot Booking
                    </Text>

                    <View style={{ paddingBottom: 20 }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Name
                            </Text>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <TextInput
                                    style={{
                                        borderColor: '#000000',
                                        width: 150,
                                        borderStyle: 'solid',
                                        borderWidth: 0.5,
                                        textAlign: 'center',
                                        borderRadius: 5
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 20 }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Date of Birth (dd/mm/yyyy)
                            </Text>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <TextInput
                                    style={{
                                        borderColor: '#000000',
                                        width: 150,
                                        borderStyle: 'solid',
                                        borderWidth: 0.5,
                                        textAlign: 'center',
                                        borderRadius: 5
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 20 }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Gender
                            </Text>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <TextInput
                                    style={{
                                        borderColor: '#000000',
                                        width: 150,
                                        borderStyle: 'solid',
                                        borderWidth: 0.5,
                                        textAlign: 'center',
                                        borderRadius: 5
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 20 }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingBottom: 5
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Date of Vaccination
                            </Text>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <TextInput
                                    style={{
                                        borderColor: '#000000',
                                        width: 150,
                                        borderStyle: 'solid',
                                        borderWidth: 0.5,
                                        textAlign: 'center',
                                        borderRadius: 5
                                    }}
                                    placeholder={text}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Button
                                style={{ width: 50, marginRight: 50 }}
                                title="Date"
                                onPress={() => showMode('date')}
                            ></Button>
                            <Button
                                style={{ width: 50, marginRight: 50 }}
                                title="Time"
                                onPress={() => showMode('time')}
                            ></Button>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>

                    <View style={{ paddingBottom: 20 }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Venue
                            </Text>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <TextInput
                                    style={{
                                        borderColor: '#000000',
                                        width: 150,
                                        borderStyle: 'solid',
                                        borderWidth: 0.5,
                                        textAlign: 'center',
                                        borderRadius: 5
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <Button
                        title="Submit"
                        style={{ justifyContent: 'center' }}
                    ></Button>
                </View>
            </ScrollView>
        </>
    )
}
