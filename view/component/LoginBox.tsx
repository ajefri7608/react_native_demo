import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userNameOnChange, passwordOnChange } from '../../redux/slice/userSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hook'
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import { login } from '../../redux/slice/userSlice';
export function LoginBox() {
  const userName = useAppSelector(state => state.user.userName)
  const password = useAppSelector(state => state.user.password)
  const memberProfile = useAppSelector(state  => state.user.memberProfile)
  const isLogin = useAppSelector(state => state.user.isLogin)
  const dispatch = useAppDispatch()

  return (
    <View style={{ ...styles.container, ...styles.containerShadow }}>
      <View style={styles.textFieldContainer}>
        <TextInput
          style={{fontSize: 21}}
          onChangeText={(text) => dispatch(userNameOnChange(text))}
          value={userName}
          placeholder="type your userName"
          keyboardType="numeric"
        />
        <TextInput
          style={{fontSize: 21}}
          onChangeText={(text) => dispatch(passwordOnChange(text))}
          value={password}
          placeholder="type your password"
          keyboardType="numeric"
        />
        <Button
          title="submit"
          onPress={() => dispatch(login({ userName: userName, password: password }))}
        />
        {
          isLogin ?
            (<Text>
              {JSON.stringify(memberProfile)}
            </Text>) : null
        }

        <Text>{userName}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {

    height: 300,
    flexDirection: 'column',
    borderRadius: 30,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  containerShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  textFieldContainer: {
    flex: 1,
    alignItems: 'center',

    justifyContent:'center',
    backgroundColor: '#ffffff',
  },
  textField: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
export default LoginBox