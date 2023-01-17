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
import MyDrawerNavigator from '~/navigationBar/MyDrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <MyDrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
//npx react-native run-android
//npx react-native start
export default App;
