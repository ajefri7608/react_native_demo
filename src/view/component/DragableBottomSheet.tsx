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
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useHeaderHeight} from '@react-navigation/elements';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export type BottomSheetRefProps = {
  scrollTo?: (destination: number) => void;
  isActive?: () => boolean;
};

const DragableBottomSheet = forwardRef<{}, BottomSheetRefProps>(
  (props, ref) => {
    const active = useSharedValue(false);
    const context = useSharedValue({y: 0});

    const translationY = useSharedValue(0);
    const gesture = Gesture.Pan()
      .onStart(_ => {
        context.value = {y: translationY.value};
      })
      .onUpdate(event => {
        translationY.value = event.translationY + context.value.y;
        translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT + 200);
      })
      .onEnd(event => {
        if (translationY.value > -SCREEN_HEIGHT / 3) {
          translationY.value = withSpring(0, {damping: 50});
          active.value = false;
        }
      });

    const bottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateY: translationY.value}],
      };
    });

    const scrollTo = useCallback((destination: number) => {
      translationY.value = withSpring(destination, {damping: 50});
      active.value = destination !== 0;
    }, []);
    const isActive = useCallback(() => {
      return active.value;
    }, []);
    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);
    useEffect(() => {
      translationY.value = withSpring(-SCREEN_HEIGHT / 2, {damping: 50});
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.footer, bottomSheetStyle]}>
          <View style={styles.line}></View>
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    height: 5,
    width: 60,
    backgroundColor: '#e5e5e5',
    marginVertical: 15,
    alignSelf: 'center',
    borderRadius: 10,
  },

  footer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'red',
    top: SCREEN_HEIGHT,
    borderRadius: 20,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontsize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
});
export default DragableBottomSheet;
