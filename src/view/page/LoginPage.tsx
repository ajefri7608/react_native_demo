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
import {StyleSheet, useColorScheme, View, Text, Image} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginBox from '~/view/component/LoginBox';
import MyStackNavigator from '~/navigationBar/MyStackNavigator';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const LoginPage = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={{...styles.pageContainer}}>
      <Image
        source={require('~/assets/images/background/loginBackground.jpg')}
        style={{flex: 5}}
        resizeMode={'contain'}
      />
      <View style={{flex: 5, width: '100%'}}>
        <LoginBox />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default LoginPage;
