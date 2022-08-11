/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';


const ProfilePage = ({ navigation, route }: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const drawerNavigation = navigation.getParent('MyDrawer');
  useEffect (() => {
    navigation.addListener('focus', () => {

      navigation.dispatch(DrawerActions.openDrawer)

    });
    navigation.addListener('tabPress', () => {

      navigation.dispatch(DrawerActions.openDrawer)

    });

  })


  return (

    <View style={styles.pageContainer}>

      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />

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

export default ProfilePage;
