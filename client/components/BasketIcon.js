// @ts-nocheck
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)

    const total = useSelector(selectBasketTotal)

    const navigation = useNavigation()
    if (items.length === 0) return null

    return (

        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className='mx-5 p-4 rounded-lg flex-row items-center space-x-1 bg-[#00CCBB]'>
                <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
                <Text className='flex-1 font-extrabold text-lg text-white text-center'>View Basket</Text>
                <Text className='text-lg text-white font-extrabold '>$ {total.toFixed(2)}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon