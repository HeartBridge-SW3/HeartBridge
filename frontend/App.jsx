import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './components/navigators/MainStackNavigator';
import ProfileStackNavigator from './components/navigators/ProfileStackNavigator';
import SettingsScreen from './components/SettingsScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Main') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            } else if (route.name === 'Settings') {
              iconName = 'cogs';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#226BFF',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Main"
          component={MainStackNavigator}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackNavigator}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
