import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Param = {
  title: string;
  item: string[];
  expanded: boolean;
  titleOnPressCallBack: () => void;
};

export const DropDownList = (param: Param) => {
  const listHeight = useSharedValue(45);
  const [animateEnd, setAnimateEnd] = useState(true);
  const itemCount =
    param.item !== undefined && param.item.length > 0
      ? param.item.length + 1
      : 1;
  const expandAnimatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(
        listHeight.value,
        {
          duration: 250,
        },
        () => {
          runOnJS(_setAnimateState)();
        },
      ),
    };
  });
  function _setAnimateState() {
    setAnimateEnd(true);
  }
  useEffect(() => {
    if (param.expanded) {
      listHeight.value = 42 * itemCount;
    } else {
      listHeight.value = 42;
    }
  }, [listHeight, itemCount, param.expanded]);
  return (
    <Animated.View style={[styles.container, expandAnimatedStyles]}>
      <Pressable onPress={() => param.titleOnPressCallBack()}>
        <View style={styles.title}>
          <Text>{param.title}</Text>
        </View>
      </Pressable>
      {param.item.map((item, index) => {
        return <Text>{item}</Text>;
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'column', width: '100%', overflow: 'hidden'},
  title: {
    height: 40,
    backgroundColor: 'red',
  },
});
