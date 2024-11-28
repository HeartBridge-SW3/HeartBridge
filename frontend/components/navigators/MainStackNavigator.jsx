import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../MainScreen';
import DetailScreen from '../DetailScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
