
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import OnBoardScreen from './src/Screens/OnBoardScreen'
import HomeScreen from './src/Screens/HomeScreen'
import DetailScreen from './src/Screens/DetailScreen'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions = {{headerShown : false}} >
    <Stack.Screen  name ='OnBoardScreen' component = {OnBoardScreen}/>
    <Stack.Screen  name ='HomeScreen' component = {HomeScreen}/>
    <Stack.Screen  name ='DetailScreen' component = {DetailScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;




