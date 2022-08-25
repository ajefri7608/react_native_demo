import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from '~/view/page/LoginPage';
import HomePage from '~/view/page/HomePage';
import ProfilePage from '~/view/page/ProfilePage';
import {StyleSheet, Text, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

const IconComponent = ({name, icon, focused}: any) => {
  return (
    <View style={styles.iconContainer}>
      <Icon name={icon} size={20} color={focused ? '#e32f45' : '#748c94'} />

      <Text
        style={{
          color: focused ? '#e32f45' : '#748c94',
          paddingTop: 5,
        }}>
        {name}
      </Text>
    </View>
  );
};

const MyBottomTabNavigator = () => {
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

          tabBarIcon: ({focused}) => (
            <IconComponent name="Home" icon="home" focused={focused} />
          ),
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
        component={LoginPage}
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
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  middleIconContainer: {
    top: -22,
  },
  middleIconImage: {
    width: 80,
    height: 80,
  },

  text: {
    fontSize: 12,
  },
});
export default MyBottomTabNavigator;
