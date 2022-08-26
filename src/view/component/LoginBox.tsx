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
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {login} from '~/redux/slice/userSlice';
export function LoginBox() {
  const userName = useAppSelector(state => state.user.userName);
  const password = useAppSelector(state => state.user.password);
  const memberProfile = useAppSelector(state => state.user.memberProfile);
  const isLogin = useAppSelector(state => state.user.isLogin);
  const dispatch = useAppDispatch();

  return (
    <View style={{...styles.container}}>
      <View style={{...styles.wellComeTextContainer}}>
        <Text style={{fontSize: 40}}>WellCome</Text>
      </View>

      <View style={styles.textFieldContainer}>
        <Text style={{fontSize: 22, marginLeft: 6, color: '#444444'}}>@</Text>
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
          style={{marginLeft: 6}}
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
        }>
        <View style={{...styles.loginBtn}}>
          <Text style={{fontSize: 20}}>Login</Text>
        </View>
      </TouchableOpacity>
      {isLogin ? <Text>{JSON.stringify(memberProfile)}</Text> : null}

      <Text>{userName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  wellComeTextContainer: {
    flexDirection: 'column',
  },
  textFieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    alignItems: 'center',
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textField: {
    width: '100%',

    padding: 10,
  },
});
export default LoginBox;
