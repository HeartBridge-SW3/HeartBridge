import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../ProfileScreen';
import EditProfileScreen from '../EditProfileScreen';

const Stack = createStackNavigator();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;
