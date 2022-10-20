// @ts-nocheck
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";
import { urlFor } from '../sanity';

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image source={{ uri: urlFor(imgUrl).url() }}
                className="h-36 w-64 rounded-sm" />
            <View>
                <Text className="font-bold text-lg pt-2 ml-3">
                    {title}
                </Text>
                <View className="flex-row items-center space-x-1 ml-3">
                    <Icon name='star' type='font-awesome-5' color='green' activeOpacity={0.5} size={17} />
                    <Text className="text-gray-500 text-xs">
                        <Text className="text-green-700">
                            {rating}
                        </Text>  • {genre}</Text>
                </View>
                <View className="flex-row items-center space-x-1 ml-3 pt-2">
                    <Text>
                        <Icon
                            name='location-arrow' type='font-awesome' color='gray' activeOpacity={0.4} size={22} />
                    </Text>
                    <Text className="text-xs text-gray-500">Nearby • {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard