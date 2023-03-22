import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './src/pages/Contacts/';
import Informations from './src/pages/Informations/';
import HomePage from './src/pages/Home';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function displayTabNavigator(){
  <Tab.Navigator>
    <Tab.Screen name='HomePage' component={HomePage} />
    <Tab.Screen name='Contacts' component={Contacts} />
  </Tab.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={displayTabNavigator}/>
        <Stack.Screen name="Informations" component={Informations}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}