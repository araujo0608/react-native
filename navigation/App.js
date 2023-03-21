import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { StyleSheet, Text, View } from 'react-native';
import Contacts from './src/pages/Contacts/';
import Informations from './src/pages/Informations/';
//import styles from './style'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="Informations" component={Informations}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
