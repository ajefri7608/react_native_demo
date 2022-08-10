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
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import LoginBox from '~/view/component/LoginBox';

const HomePage = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (

    <View style={styles.pageContainer}>

      <LoginBox />

    </View>

  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }

});

export default HomePage;
