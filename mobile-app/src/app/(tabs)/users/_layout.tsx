import { useApp } from '@/contexts/AppProvider'
import { BlurView } from 'expo-blur'
import { Stack } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

const UserLayout = () => {
    const { colorScheme } = useApp()
    const isIos = Platform.OS == 'ios'
    const blurStyles = isIos ? {} : { headerStyle: { backgroundColor: '#fff' } };

    return (
        <Stack>
            <Stack.Screen name='index'
                options={{
                    headerShown: true, headerTitle: 'Users',
                    headerBlurEffect: 'regular',
                    headerTintColor: '#000',
                    // headerStyle: { backgroundColor: '#fff' },
                    // headerBackground: () => <BlurView className='' />,
                    headerTransparent: isIos,
                    headerSearchBarOptions: {
                        placeholder: 'Search Users',
                        hideWhenScrolling: false
                    },
                    // headeSe
                }} />
        </Stack>
    )
}

export default UserLayout