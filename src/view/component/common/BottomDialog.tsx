/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Pressable, Image, Animated} from 'react-native';

type Props = {
  closeBtnCallBack: () => void;
};

const BottomDialog = ({closeBtnCallBack}: Props) => {
  useEffect(() => {
    dialogAnimControl(380);
  }, []);
  const hideAnim = useRef(new Animated.Value(0)).current;
  const dialogAnimControl = (to: number) => {
    Animated.timing(hideAnim, {
      toValue: to,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.PressableBg}
        onPress={() => {
          dialogAnimControl(0);
          closeBtnCallBack();
        }}
      />
      <Animated.View
        style={[styles.dialogContainer, {height: hideAnim}]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    height: '100%',
  },
  PressableBg: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    borderTopStartRadius: 20,
    position: 'absolute',
    borderTopEndRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    bottom: 0,
  },
});

export default BottomDialog;
