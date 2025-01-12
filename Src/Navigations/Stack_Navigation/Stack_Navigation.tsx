import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash_Screen from '../../Screens/Authentication/Splash_Screen/Splash_Screen'
import Splash_Screen_Blank from '../../Screens/Authentication/Splash_Screen/Splash_Screen_Blank'
import OnBoarding from '../../Screens/OnBoarding/OnBoarding'
import Bottom_Tab from '../Bottom_Tab/Index'
import Details from '../../Screens/Details/Index'
import Subscription from '../../Screens/Subscriptions_Plan/Subscription_Plan'
import SignIn_Screen from '../../Screens/Authentication/SignIn_Screen/SignIn_Screen'
import SignUp_Screen from '../../Screens/Authentication/SignUp_Screen/SignUp_Screen'


const Stack=createNativeStackNavigator()
const Stack_Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator  initialRouteName='Splash' screenOptions={{headerShown:false}} >
           <Stack.Screen name='Splash' component={Splash_Screen_Blank} />
            <Stack.Screen name='SplashScreen' component={Splash_Screen} />
            <Stack.Screen name='Subscription' component={Subscription} />
            <Stack.Screen name='OnBoarding' component={OnBoarding} />
            <Stack.Screen name='Bottom_Tab' component={Bottom_Tab} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='SignIn_Screen' component={SignIn_Screen} />
            <Stack.Screen name='SignUp_Screen' component={SignUp_Screen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stack_Navigation