import React, {useRef, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from '~/view/page/LoginPage';
import SearchPage from '~/view/page/SearchPage';
import HomePage from '~/view/page/HomePage';
import ProfilePage from '~/view/page/ProfilePage';
import {StyleSheet, Text, View, Platform, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const MyBottomTabNavigator = () => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 2,
        duration: 65,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -2,
        duration: 65,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 2,
        duration: 65,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 65,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const IconComponent = ({name, icon, focused}: any) => {
    return (
      <View style={styles.iconContainer}>
        <Animated.View
          style={focused ? {transform: [{translateX: shakeAnimation}]} : {}}>
          <Icon
            name={icon}
            size={focused ? 23 : 20}
            color={focused ? '#e32f45' : '#748c94'}
          />
        </Animated.View>
        <Text
          style={{
            color: focused ? '#e32f45' : '#748c94',
            paddingTop: 8,
          }}>
          {name}
        </Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: Platform.OS === 'ios' ? '11%' : '9%'},
      }}
      id="myBottomTab">
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused}) => {
            startShake();
            return <IconComponent name="Home" icon="home" focused={focused} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused}) => (
            <IconComponent name="Search" icon="search1" focused={focused} />
          ),
        }}
        component={SearchPage}
      />
      <Tab.Screen
        name="Login"
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused}) => (
            <IconComponent name="User" icon="message1" focused={focused} />
          ),
        }}
        component={LoginPage}
      />

      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused}) => (
            <IconComponent name="Profile" icon="smileo" focused={focused} />
          ),
        }}
        initialParams={{openDrawer: true}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});
export default MyBottomTabNavigator;
