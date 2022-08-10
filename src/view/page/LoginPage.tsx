/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text
} from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LoginBox from '~/view/component/LoginBox';
import MyStackNavigator from '~/navigationBar/MyStackNavigator';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const LoginPage = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  //const tabBarHeight = useBottomTabBarHeight();
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (

    <View style={{...styles.pageContainer}}>

      <LoginBox />
      
      <Text style={{bottom: insets.bottom , ...styles.test}}>123</Text>
      
    </View>

  
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  test: {
    position: 'absolute',
  
    right:0

  }

});

export default LoginPage;
