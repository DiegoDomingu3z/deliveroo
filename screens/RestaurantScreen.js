// @ts-nocheck

import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import DishRow from '../components/DishRow'
import { Icon } from '@rneui/base'


const RestaurantScreen = () => {
    const navigation = useNavigation()
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat, } } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <ScrollView>

            <View className='relative'>
                <Image source={{ uri: urlFor(imgUrl).url() }}
                    className='w-full h-56 bg-gray-300 p-4 ' />
                <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 bg-gray-100 p-2 rounded-full'>
                    <Icon name='arrow-left' type='font-awesome-5' size={25} color='#00CCBB' />
                </TouchableOpacity>
            </View>
            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className=' text-3xl font-bold'>{title}</Text>
                    <View className=' flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <Icon name='star' type='font-awesome-5' color='green' activeOpacity={0.5} size={22} />
                            <Text className="text-gray-500 text-xs">
                                <Text className="text-green-700">{rating}</Text>  • {genre}
                            </Text>
                        </View>
                        <View className='flex-row items-center space-x-3'>
                            <Icon name='location-arrow' type='font-awesome-5' color='gray' activeOpacity={0.4} size={22} />
                            <Text className="text-gray-500 text-xs">
                                Nearby • {address}
                            </Text>
                        </View>
                    </View>
                    <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
                </View>
                <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                    <Icon name='question' type='font-awesome-5' color='gray' activeOpacity={0.6} size={15} />
                    <Text className='pl-2 flex-1 text-md font-bold'>Have a food allergy?</Text>
                    <Icon className='text-end' name='chevron-right' type='font-awesome-5' color='#00CCBB' size={18} />
                </TouchableOpacity>
            </View>
            <View>
                <Text className=' px-4 pt-6 mb-3 font-bold text-lg'>
                    Menu
                </Text>
                {dishes.map(dish => (
                    <DishRow
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        description={dish.Short_description}
                        price={dish.price}
                        image={dish.image}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen