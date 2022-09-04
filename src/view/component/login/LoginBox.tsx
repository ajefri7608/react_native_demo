import React, {useState} from 'react';

import {useAppSelector, useAppDispatch} from '~/redux/hook';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {login} from '~/redux/slice/userSlice';
import LoginIconList from './LoginIconList';
import Divider from '../common/Divider';
type Prop = {
  submitBtnClick: () => void;
};

export function LoginBox({submitBtnClick}: Prop) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const memberProfile = useAppSelector(state => state.user.memberProfile);
  const isLogin = useAppSelector(state => state.user.isLogin);
  const dispatch = useAppDispatch();

  return (
    <View style={{...styles.container}}>
      <View style={{...styles.wellComeTextContainer}}>
        <Text style={{fontSize: 31}}>WellCome</Text>
      </View>
      <View style={styles.loginGrp}>
        <View style={styles.textFieldContainer}>
          <Text style={{fontSize: 22, marginLeft: 4, color: '#444444'}}>@</Text>
          <TextInput
            style={{...styles.textField}}
            onChangeText={text => setUserName(text)}
            value={userName}
          />
        </View>
        <View style={{marginTop: 12, ...styles.textFieldContainer}}>
          <FeatherIcon
            name={'lock'}
            size={20}
            color={'#444444'}
            style={{marginLeft: 4}}
          />
          <TextInput
            style={{...styles.textField}}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            value={password}
          />
        </View>

        <Pressable
          onPress={() => {
            submitBtnClick();
            dispatch(login({userName: userName, password: password}));
          }}
          style={{...styles.loginBtn}}>
          <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
        </Pressable>
      </View>
      <View style={{...styles.iconListContainer}}>
        <Divider />
        <LoginIconList />
      </View>

      {isLogin ? <Text>{JSON.stringify(memberProfile)}</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
  },
  wellComeTextContainer: {flex: 3},
  loginGrp: {flex: 12},
  textFieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    alignItems: 'baseline',
    paddingBottom: 5,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

    width: '90%',
    height: 40,
    marginTop: 'auto',
    marginBottom: '10%',
    backgroundColor: '#ee9dc5',
    borderRadius: 5,
  },
  iconListContainer: {
    marginBottom: '5%',
    flex: 5,
  },

  textField: {
    width: '100%',
    paddingVertical: 0,
    includeFontPadding: false,
    textAlignVertical: 'bottom',
  },
});
export default LoginBox;
