import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import Home from '../screens/Home'
import New from '../screens/New'
import Habit from '../screens/Habit'

import React from 'react'

const AppRoutes = () => {
 return <Navigator screenOptions={{ headerShown: false}}>
    <Screen name='home' component={Home} />
    <Screen name='new' component={New} />
    <Screen name='habit' component={Habit} />

   
  </Navigator>
}

export default AppRoutes