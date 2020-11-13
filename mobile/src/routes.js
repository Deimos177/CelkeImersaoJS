import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

const Stack = createStackNavigator()

function routes(){
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#161616',
    },
    headerTintColor: '#ebb105',
    headerBackTitle: 'Voltar'
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default routes