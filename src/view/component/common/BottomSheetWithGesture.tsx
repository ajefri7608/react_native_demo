/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import {StyleSheet, View, Pressable, Image} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {screenHeight, screenWidth} from '~/themes/measure';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

type Param = {
  content: JSX.Element;
  closeBtnCallBack: () => void;
};
export type refType = {
  dialogAnimControl: (open: boolean) => void;
};

const BottomSheetWithGesture = (param: Param, ref: Ref<refType>) => {
  const offset = useSharedValue(-screenHeight);
  const draggingDown = useSharedValue(false);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      bottom: offset.value,
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      'worklet';
    })
    .onChange(e => {
      'worklet';
      // console.log(offset.value, e.changeY);
      if (offset.value > 0 && e.changeY > 0) {
        if (e.changeY > 0) {
          draggingDown.value = true;
        } else {
          draggingDown.value = false;
        }

        offset.value = 0;
      } else if (offset.value <= 0) {
        if (offset.value - e.changeY > 0) {
          if (e.changeY > 0) {
            draggingDown.value = true;
          } else {
            draggingDown.value = false;
          }
          offset.value = 0;
        } else {
          if (e.changeY > 0) {
            draggingDown.value = true;
          } else {
            draggingDown.value = false;
          }
          offset.value = offset.value - e.changeY;
        }
      }
    })
    .onFinalize(() => {
      'worklet';
      if (draggingDown.value) {
        offset.value = withTiming(-screenHeight, {duration: 550});
        runOnJS(param.closeBtnCallBack)();
      } else {
        offset.value = withTiming(0, {duration: 550});
      }

      // if(offset)
    });

  const dialogAnimControl = (open: boolean) => {
    offset.value = withTiming(open ? 0 : -screenHeight, {duration: 550});
  };
  useEffect(() => {
    dialogAnimControl(true);
  }, []);
  useImperativeHandle(ref, () => ({
    dialogAnimControl: dialogAnimControl,
  }));
  return (
    <Pressable
      style={[
        styles.container,
        {height: screenHeight + 50 - useBottomTabBarHeight()},
      ]}>
      <Pressable
        onPress={() => {
          offset.value = withTiming(-screenHeight, {duration: 250});
          param.closeBtnCallBack();
        }}
        style={{
          width: screenWidth,
          height: screenHeight,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.dialogContainer, animatedStyles]}>
          {param.content}
        </Animated.View>
      </GestureDetector>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
  },
  dialogContainer: {
    borderTopStartRadius: 33,

    borderTopEndRadius: 33,
    backgroundColor: 'white',
    flexDirection: 'column',
    width: screenWidth,
    // transform: [{translateY: -999}],

    position: 'absolute',
    bottom: 0,
  },
});

export default forwardRef(BottomSheetWithGesture);
