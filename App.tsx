/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescriptco
 *
 * @format
 */

import React from 'react';

import MyBottomTabNavigator from './src/navigationBar/MyBottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <NavigationContainer>
      <MyBottomTabNavigator />
    </NavigationContainer>
  );
  
};
export default App;

