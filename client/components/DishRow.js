// @ts-nocheck
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { Icon } from '@rneui/base'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice'
import { addToBasket } from '../features/basketSlice'

const DishRow = ({ id, name, description, price, image }) => {

    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(state => selectBasketItemsWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }

    const removeItem = () => {
        if (!items.length > 0) return;

        dispatch(removeFromBasket({ id }))
    }



    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
                className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0"}`}>
                <View className='flex-row'>
                    <View className='flex-1 pr-2'>

                        <Text className='text-lg mb-1'>{name}</Text>
                        <Text className='text-gray-400'>{description}</Text>
                        <Text className='text-gray-400 mt-2'>${price}</Text>
                    </View>
                    <View>
                        <Image
                            style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
                            source={{ uri: urlFor(image).url() }}
                            className='h-20 w-20 bg-gray-300 p-4 rounded ' />
                    </View>
                </View>
            </TouchableOpacity>


            {isPressed && [
                <View className='bg-white px-4'>
                    <View className='flex-row items-center space-x-2 pb-3'>
                        <TouchableOpacity onPress={removeItem} disabled={items.length == 0}>
                            <Icon name='minus-circle' type='font-awesome' size={40} color={items.length > 0 ? "#00CCBB" : "gray"} />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity
                            onPress={addItemToBasket}>
                            <Icon name='plus-circle' type='font-awesome' size={40} color='#00CCBB' />
                        </TouchableOpacity>
                    </View>
                </View>
            ]}
        </>
    )
}

export default DishRow