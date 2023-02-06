import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import MyBottomTabNavigator from './MyBottomTabNavigator';
import {MyCustomDrawerContent} from './customDrawerContent/MyCutsomDrawerContent';
const Drawer = createDrawerNavigator();

const MyDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <MyCustomDrawerContent {...props} />}
      id="MyDrawer"
      screenOptions={{
        drawerStyle: {
          width: 220,
        },
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="MyBottomTabNavigator"
        component={MyBottomTabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default MyDrawerNavigator;
