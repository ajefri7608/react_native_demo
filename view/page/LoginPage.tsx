/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import LoginBox from '../component/LoginBox';

const LoginPage = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (

    <ImageBackground
      source={require("../../assets/background/login_backgorund.jpg")}
      style={styles.pageContainer}
      blurRadius={5}>

      <LoginBox />

    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },



});

export default LoginPage;
