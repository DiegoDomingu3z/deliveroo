// @ts-nocheck
import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from "@rneui/themed";
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRows = ({ title, description, id }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(
            `
    *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
            ...,s
            dishes[]->,
            type->{
                name
            }
        },
    }[0]
    `, { id }
        ).then((data) => {
            setRestaurants(data?.restaurants)
        })
        console.log(restaurants)
    }, [])


    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <Text>
                    <Icon
                        color={'#00CCBB'}
                        name='arrow-right'
                        type='font-awesome-5' />
                </Text>
            </View>
            <Text className="text-xs text-gray-500 px-4" >{description}</Text>
            <ScrollView horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4">

                {restaurants?.map(restaurant => {

                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        address={restaurant.address}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                })}



            </ScrollView>
        </View>
    )
}

export default FeaturedRows