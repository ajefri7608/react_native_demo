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
import { Input, Icon } from '@rneui/themed';

export function LoginBox() {
  const count = useSelector((state: any) => state.counter.value)
  const test = useSelector((state: any) => state.loginBox.value)
  const dispatch = useDispatch()

  return (
    <View style={{ ...styles.container }}>
<Input placeholder="Password" secureTextEntry={true} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    //backgroundColor:"#242134",
    height:250,
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