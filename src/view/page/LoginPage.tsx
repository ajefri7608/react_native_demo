/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useCallback, useState} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginBox from '~/view/component/login/LoginBox';
import MyStackNavigator from '~/navigationBar/MyStackNavigator';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '~/redux/hook';
import {CommonActions} from '@react-navigation/native';
import Loading from '../component/common/Loading';
type PublicationT = {
  author: string;
  publisher: string;
};

const LoginPage = () => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const isLogin = useAppSelector(state => state.user.isLogin);
  const [onLoading, setOnLoading] = useState(false);
  const submitBtnClick = () => {
    console.log('asdasd');
    setOnLoading(true);
  };

  useEffect(() => {
    if (isLogin) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Search',
          params: {},
        }),
      );
    }
  }, [isLogin]);
  return (
    <View style={{...styles.pageContainer}}>
      <View style={{flex: 4}}>
        <Image
          source={require('~/assets/images/background/loginBackground.jpg')}
          style={{height: '100%', width: '100%'}}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.loginBoxContainer}>
        <LoginBox submitBtnClick={submitBtnClick} />
      </View>
      {onLoading ? <Loading /> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  blurViewContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    // top: SCREEN_HEIGHT,
    // borderRadius: 20,
  },
  pageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    backgroundColor: 'white',
  },
  loginBoxContainer: {
    flex: 6,
    width: '100%',
    paddingHorizontal: 20,
  },

  iconList: {
    flexDirection: 'row',
  },
});

export default LoginPage;
