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
} from 'react-native-reanimated';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export type BottomSheetRefProps = {
  scrollTo?: (destination: number) => void;
  isActive?: () => boolean;
};
type BottomSheetProps = {
  children?: React.ReactNode;
};
const DragableBottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (props, ref) => {
    const active = useSharedValue(false);
    const context = useSharedValue({y: 0});

    const translationY = useSharedValue(0);
    const translationBackdrop = useSharedValue(0);
    const gesture = Gesture.Pan()
      .onStart(_ => {
        context.value = {y: translationY.value};
      })
      .onUpdate(event => {
        console.log(translationY);
        translationY.value = event.translationY + context.value.y;

        translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT + 100);
      })
      .onEnd(event => {
        if (translationY.value > -SCREEN_HEIGHT / 3) {
          translationY.value = withSpring(0, {damping: 50});
          active.value = false;
          translationBackdrop.value = 0;
        }
      });

    const bottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateY: translationY.value}],
      };
    });
    const bottomSheetStyleBackdrop = useAnimatedStyle(() => {
      return {
        transform: [{translateY: translationBackdrop.value}],
      };
    });

    const scrollTo = useCallback((destination: number) => {
      translationY.value = withSpring(destination, {damping: 50});
      active.value = destination !== 0;
      translationBackdrop.value = -SCREEN_HEIGHT;
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    const tabBarHeight = useBottomTabBarHeight();

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);

    return (
      <Animated.View
        style={[
          styles.bottomSheet,
          {backgroundColor: 'rgba(0, 0,0,0.2)'},
          bottomSheetStyleBackdrop,
        ]}>
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              styles.bottomSheet,
              bottomSheetStyle,

              styles.bottomSheetShadow,
            ]}>
            <View style={styles.line}></View>
            <View>{props.children}</View>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  line: {
    marginVertical: 15,
  },

  bottomSheet: {
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  bottomSheetShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
});
export default DragableBottomSheet;
