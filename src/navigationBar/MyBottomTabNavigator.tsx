import React, {useRef} from 'react';
import {ImageSourcePropType} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from '~/view/page/LoginPage';
import HomePage from '~/view/page/HomePage';
import SearchPage from '~/view/page/SearchPage';
import ProfilePage from '~/view/page/ProfilePage';
import {StyleSheet, Text, View, Platform, Animated, Image} from 'react-native';
import {Colors} from '~/themes/colors';
import MyStackNavigator from './MyStackNavigator';
import FastImage from 'react-native-fast-image';

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
  type iconProps = {
    name: string;
    focused: boolean;
    icon: ImageSourcePropType;
  };
  const IconComponent = ({name, focused, icon}: iconProps) => {
    return (
      <View style={styles.iconContainer}>
        <Animated.View
          style={focused ? {transform: [{translateX: shakeAnimation}]} : {}}>
          <Image
            source={icon}
            style={{
              width: 21,
              height: 21,
              tintColor: focused ? '#00c090' : '#748c94',
            }}
          />
        </Animated.View>
        {focused ? (
          <Text
            style={[
              {
                color: '#748c94',
                fontSize: 12,
              },
            ]}>
            {name}
          </Text>
        ) : (
          <></>
        )}
      </View>
    );
  };
  return (
    <Tab.Navigator
      // initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          styles.tarBarStyles,
          {height: Platform.OS === 'ios' ? 80 : 60},
        ],
      }}
      id="myBottomTab">
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {backgroundColor: 'white'},
          tabBarIcon: ({focused}) => {
            startShake();
            return (
              <IconComponent
                name="Home"
                icon={require('~/assets/images/vectorIcon/home.png')}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused}) => (
            <IconComponent
              name="Search"
              icon={require('~/assets/images/vectorIcon/search.png')}
              focused={focused}
            />
          ),
        }}
        component={MyStackNavigator}
      />
      <Tab.Screen
        name="Login"
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused}) => (
            <IconComponent
              name="User"
              icon={require('~/assets/images/vectorIcon/user.png')}
              focused={focused}
            />
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
            <IconComponent
              name="Repair"
              icon={require('~/assets/images/vectorIcon/repair.png')}
              focused={focused}
            />
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
    paddingTop: 5,
  },
  tarBarStyles: {
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
  },
});
export default MyBottomTabNavigator;
