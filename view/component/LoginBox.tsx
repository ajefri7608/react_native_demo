import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/slice/counterSlice'
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native';
import { login } from '../../redux/slice/userSlice';
import { TextInput } from 'react-native-gesture-handler';
export function LoginBox() {
  const count = useSelector((state: any) => state.counter.value)
  const test = useSelector((state: any) => state.loginBox.value)
  const dispatch = useDispatch()

  return (
    <View style={{ ...styles.container, ...styles.containerShadow }}>
      <View style={styles.textFieldContainer}>
        <TextInput
          style={styles.textField} />
        <TextInput />

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    height:100,
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
  textFieldContainer:{
    flex:1
  },
  textField: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
export default LoginBox