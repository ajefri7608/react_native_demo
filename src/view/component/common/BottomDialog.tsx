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
import {StyleSheet, View, Pressable, Image, Animated} from 'react-native';
import {screenHeight, screenWidth} from '~/themes/measure';

type Param = {
  content: JSX.Element;
  closeBtnCallBack: () => void;
};
export type refType = {
  dialogAnimControl: (open: boolean) => void;
};

const BottomDialog = (param: Param, ref: Ref<refType>) => {
  const hideAnim = useRef(new Animated.Value(-screenHeight)).current;
  const dialogAnimControl = (open: boolean) => {
    Animated.timing(hideAnim, {
      toValue: open ? 0 : -screenHeight,
      duration: 450,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    dialogAnimControl(true);
  }, []);
  useImperativeHandle(ref, () => ({
    dialogAnimControl: dialogAnimControl,
  }));
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.PressableBg}
        onPress={() => {
          dialogAnimControl(false);
          param.closeBtnCallBack();
        }}
      />
      <Animated.View style={[styles.dialogContainer, {bottom: hideAnim}]}>
        {param.content}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    position: 'absolute',
    height: screenHeight,
  },
  PressableBg: {
    position: 'absolute',
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0.3,
  },
  dialogContainer: {
    borderTopStartRadius: 20,
    position: 'absolute',
    borderTopEndRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
    width: screenWidth,
    bottom: -screenHeight,
  },
});

export default forwardRef(BottomDialog);
