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
  const viewHeight = useSharedValue(-screenHeight);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      bottom: withTiming(offset.value, {duration: 350}),
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      'worklet';
    })
    .onChange(e => {
      'worklet';
      if (viewHeight.value != -screenHeight) {
        if (offset.value > -50) {
          if (e.changeY > 0) {
            offset.value = offset.value - e.changeY;
          }
        } else {
          offset.value = -screenHeight;
          runOnJS(param.closeBtnCallBack)();
        }
      }
    })
    .onFinalize(() => {
      'worklet';
    });

  const dialogAnimControl = (open: boolean) => {
    offset.value = open ? 0 : 300;
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
        {height: screenHeight - useBottomTabBarHeight()},
      ]}
      onPress={() => {
        offset.value = -screenHeight;
        param.closeBtnCallBack();
      }}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[styles.dialogContainer, animatedStyles]}
          onLayout={e => {
            viewHeight.value = e.nativeEvent.layout.height;
          }}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  dialogContainer: {
    borderTopStartRadius: 20,

    borderTopEndRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
    width: screenWidth,
    // transform: [{translateY: -999}],
    position: 'absolute',
  },
});

export default forwardRef(BottomSheetWithGesture);
