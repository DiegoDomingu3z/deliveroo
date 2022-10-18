
import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from "@rneui/themed";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">
            <View >
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image source={{ uri: 'https://avatars.githubusercontent.com/u/103779942?v=4' }}
                        className="h-7 w-7 bg-grey-300 p-5 rounded-full" />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                        <Text className="font-bold text-xl space-x-3">Current Location
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
            </View>
        </SafeAreaView>
    )
}