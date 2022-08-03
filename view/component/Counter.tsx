import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/slice/counterSlice'
import {
  View,
  Button,
  Text
} from 'react-native';
import { login } from '../../redux/slice/loginBoxSlice';
export function Counter() {
  const count = useSelector((state: any) => state.counter.value)
  const test = useSelector((state: any) => state.loginBox.value)
  const dispatch = useDispatch()

  return (
    <View>
      <View>
        <Button
          title="Increment value"
          onPress={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Text>{count}</Text>
        <Button
          title="Decrement value"
          onPress={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          title="Increase By Amount"
          onPress={() => dispatch(incrementByAmount(2))}
        >
        </Button>
        <Button
          title="login api call"
          onPress={() => dispatch(login(2))}
        >
        </Button>
      </View>
    </View>
  )
}
export default Counter