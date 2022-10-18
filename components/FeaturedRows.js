// @ts-nocheck
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";
import RestaurantCard from './RestaurantCard';

const FeaturedRows = ({ title, description, id }) => {
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

                <RestaurantCard
                    id={123}
                    imgUrl="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    title="Sushi, Yum!"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description={"This is a test description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    title="Sushi, Yum!"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description={"This is a test description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    title="Sushi, Yum!"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description={"This is a test description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    title="Sushi, Yum!"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description={"This is a test description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>
        </View>
    )
}

export default FeaturedRows