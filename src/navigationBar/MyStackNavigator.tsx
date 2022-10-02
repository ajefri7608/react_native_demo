import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import MyDrawerNavigator from './MyDrawerNavigator';
import MyBottomTabNavigator from './MyBottomTabNavigator';
import {ProductDetail} from '~/view/component/product/ProductDetail';
import SearchPage from '~/view/page/SearchPage';
const Stack = createStackNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};
const MyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false, animationEnabled: true}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};
export default MyStackNavigator;
