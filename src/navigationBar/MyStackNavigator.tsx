
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawerNavigator from './MyDrawerNavigator';
import MyBottomTabNavigator from './MyBottomTabNavigator';
const Stack = createStackNavigator();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyBottomTabNavigator" component={MyBottomTabNavigator} />
      <Stack.Screen name="MyDrawerNavigator" component={MyDrawerNavigator} />   

    </Stack.Navigator>
  );
}
export default MyStackNavigator