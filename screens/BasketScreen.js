import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { selectBasketItems } from '../features/basketSlice'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    useMemo(() => {

    }, [items])
    return (
        <View>
            <Text>BasketScreen</Text>
        </View>
    )
}

export default BasketScreen