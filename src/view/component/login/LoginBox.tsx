import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {userNameOnChange, passwordOnChange} from '~/redux/slice/userSlice';
import {useAppSelector, useAppDispatch} from '~/redux/hook';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {login} from '~/redux/slice/userSlice';
import LoginIconList from './LoginIconList';
import Divider from '../common/Divider';
export function LoginBox() {
  const userName = useAppSelector(state => state.user.userName);
  const password = useAppSelector(state => state.user.password);
  const memberProfile = useAppSelector(state => state.user.memberProfile);
  const isLogin = useAppSelector(state => state.user.isLogin);
  const dispatch = useAppDispatch();

  return (
    <View style={{...styles.container}}>
      <View style={{...styles.wellComeTextContainer}}>
        <Text style={{fontSize: 35}}>WellCome</Text>
      </View>
      <View style={styles.loginGrp}>
        <View style={styles.textFieldContainer}>
          <Text style={{fontSize: 22, marginLeft: 3, color: '#444444'}}>@</Text>
          <TextInput
            style={{...styles.textField}}
            onChangeText={text => dispatch(userNameOnChange(text))}
            value={userName}
          />
        </View>
        <View style={styles.textFieldContainer}>
          <FeatherIcon
            name={'lock'}
            size={20}
            color={'#444444'}
            style={{marginLeft: 3}}
          />
          <TextInput
            style={{...styles.textField}}
            onChangeText={text => dispatch(passwordOnChange(text))}
            value={password}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            dispatch(login({userName: userName, password: password}))
          }
          style={{...styles.loginBtn}}>
          <View style={{}}>
            <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: '5%'}}>
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
    justifyContent: 'center',
  },
  wellComeTextContainer: {},
  loginGrp: {},
  textFieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingBottom: 4,
    marginVertical: 12,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

    width: '90%',
    height: 40,
    marginVertical: 20,
    backgroundColor: '#ee9dc5',
    borderRadius: 5,
  },

  textField: {
    width: '100%',
    paddingLeft: 10,
  },
});
export default LoginBox;
