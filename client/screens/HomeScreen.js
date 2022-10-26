// @ts-nocheck

import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from "@rneui/themed";
import api from "../services/AxiosService"
import axios from 'axios'

import Categories from '../components/Categories';
import CategoryCard from '../components/CategoryCard';
import FeaturedRows from '../components/FeaturedRows';
import sanityClient from '../sanity';
import category from '../sanity/schemas/category';


export default function HomeScreen() {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([])
    const [post, setPost] = useState(null)
    const baseURL = "http://localhost:3000/api/login";

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"] {
        ...,
          restaurants[]->{
        ...,
          dishes[]->
        }
        }`).then((data) => {
            setFeaturedCategories(data);
        }),
            axios.get(baseURL).then((res) => {
                setPost(res.data)
            })
    }, [],
    )



    console.log(post, 'This is working')

    return (
        <SafeAreaView className="bg-white pt-5">

            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{ uri: 'https://avatars.githubusercontent.com/u/103779942?v=4' }}
                    className="h-7 w-7 bg-grey-300 p-5 rounded-full" />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-xl space-x-1">Current Location
                        <Icon
                            name='chevron-down'
                            type='font-awesome-5'
                            color={'#00CCBB'}
                            size={20} />

                    </Text>
                </View>
                <Icon name='user'
                    type='font-awesome-5'
                    color={'#00CCBB'}
                    size={30}

                />
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
                <View className="flex-row flex-1 rounded space-x-4 bg-gray-200  p-3">
                    <Icon
                        name='search'
                        type='font-awesome'
                        color={'gray'}
                        size={20} />
                    <TextInput placeholder='search'
                        keyboardType='default' />
                </View>
                <Icon
                    name='sliders'
                    type='font-awesome'
                    color={'#00CCBB'} />
            </View>
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{ paddingBottom: 100, }}>


                <Categories />
                {featuredCategories?.map((category) => (

                    <FeaturedRows
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}

            </ScrollView>

        </SafeAreaView>
    )
}