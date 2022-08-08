

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from '~/view/page/LoginPage';
import HomePage from '~/view/page/HomePage';
import ProfilePage from '~/view/page/ProfilePage';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();


const IconComponent = ({name, imagePath, focused} : any) => {

  return (
    <View style={styles.iconContainer}>
      <Image
        source={imagePath}
        resizeMode="contain"
        style={{
          tintColor: focused ? '#e32f45' : '#748c94',
          ...styles.iconImage
        }}
      >
      </Image>
      <Text
        style={{
          color: focused ? '#e32f45' : '#748c94'
        }}
      >
        {name}
      </Text>
    </View>
  )
}

const MyBottomTabNavigator = () => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { ...styles.tabBarContainer, ...styles.shadow },
          tabBarIcon: ({ focused }) => (
            <IconComponent
              name= "Home"
              imagePath= {require("~/assets/icons/icon_home.png")}
              focused= {focused}
            />
          )
        }}
      />
      <Tab.Screen name="Login"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { ...styles.tabBarContainer, ...styles.shadow },
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.iconContainer, ...styles.middleIconContainer }}>
              <Image
                source={require('~/assets/icons/icon_plus.png')}
                resizeMode="contain"
                style={{
                  ...styles.middleIconImage,
                  tintColor: focused ? '#e32f45' : '#e32f45',
                }}
              >
              </Image>
            </View>
          )
        }}
        component={LoginPage} />

      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { ...styles.tabBarContainer, ...styles.shadow },
          tabBarIcon: ({ focused }) => (
            <IconComponent
              name= "Profile"
              imagePath= {require("~/assets/icons/icon_profile.png")}
              focused= {focused}
            />
          )
        }}
      />
    </Tab.Navigator>

  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10
  },
  middleIconContainer: {
    top: -22,
  },
  middleIconImage: {
    width: 80,
    height: 80
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  text: {
    fontSize: 12
  }
})
export default MyBottomTabNavigator