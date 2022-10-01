/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '~/redux/hook';
import {CommonActions} from '@react-navigation/native';
import Loading from '../component/common/Loading';
import LoginIconList from '../component/login/LoginIconList';
import {Body03} from '~/themes/typography';
import {Colors} from '~/themes/colors';

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
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <LottieView
          style={styles.logo}
          source={require('~/assets/gif/lottie/hello.json')}
          autoPlay
          loop
        />
        <View style={styles.loginBoxContainer}>
          <Text style={[Body03, styles.inputTitle]}>User name:</Text>
          <TextInput style={styles.textInput} />
          <Text style={[Body03, styles.inputTitle]}>Password:</Text>
          <TextInput style={styles.textInput} />
          <View style={styles.loginBadgeShadow}>
            <Pressable
              style={styles.loginBadgeContainer}
              onPress={() => submitBtnClick()}>
              <LottieView
                style={styles.loginBadge}
                source={require('~/assets/gif/lottie/loginBtn2.json')}
                autoPlay
                loop
              />
              <Text style={Body03}>login</Text>
            </Pressable>
          </View>
          <LoginIconList></LoginIconList>
        </View>
      </View>
      {onLoading ? <Loading /> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  logo: {
    height: 250,
    alignSelf: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
  },
  inputTitle: {
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 0,
    color: Colors.Grey_05,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#321abc',
    paddingVertical: 0,
  },
  loginBoxContainer: {
    flexDirection: 'column',
    width: '100%',
    height: 300,
    backgroundColor: 'white',
  },
  loginBadgeShadow: {
    width: 70,
    borderRadius: 16,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'column',
  },
  loginBadgeContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconList: {
    flexDirection: 'row',
  },
  loginBadge: {
    width: 40,
    height: 40,
  },
});

export default LoginPage;
