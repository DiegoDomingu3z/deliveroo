// @ts-nocheck
import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const OrderingScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])
    return (
        <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
            <Animatable.Image
                source={require("../assets/deliveroo.gif")}
                animation='slideInUp'
                iterationCount={1}
                className='h-80 w-80 rounded-lg'>

            </Animatable.Image>

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className='text-lg my-10 text-white font-bold text-center mx-1'>
                Waiting for Restaurant to accept your order!
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    )
}

export default OrderingScreen