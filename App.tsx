import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

const App = () => {
    const Stack=createNativeStackNavigator();
    const linking={
      prefixes:['https://blog-nine-ivory-54.vercel.app/app'],
      config:{
        screens:{
          Search:'Search/:search'
        }
      }
    }
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Search' component={Search}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})