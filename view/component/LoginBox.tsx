import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/slice/counterSlice'
import { userNameOnChange, passwordOnChange } from '../../redux/slice/userSlice';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import { login } from '../../redux/slice/userSlice';
export function LoginBox() {
  const userName = useSelector((state: any) => state.user.userName)
  const password = useSelector((state: any) => state.user.password)
  const memberProfile = useSelector((state: any) => state.user.memberProfile)
  const isLogin = useSelector((state: any) => state.user.isLogin)
  const dispatch = useDispatch()

  return (
    <View style={{ ...styles.container, ...styles.containerShadow }}>
      <View style={styles.textFieldContainer}>
        <TextInput
          style={{}}
          onChangeText={(text) => dispatch(userNameOnChange(text))}
          value={userName}
          placeholder="type your userName"
          keyboardType="numeric"
        />
        <TextInput
          style={{}}
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
    backgroundColor: '#ffffff',
    height: 300,
    flexDirection: 'column',
    borderRadius: 30,
    marginHorizontal: 20,
    paddingVertical: 10
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
    flex: 1
  },
  textField: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
export default LoginBox