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
    const gesture = Gesture.Pan()
      .onStart(_ => {
        context.value = {y: translationY.value};
      })
      .onUpdate(event => {
        console.log(translationY);
        translationY.value = event.translationY + context.value.y;

        translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT / 2);
      })
      .onEnd(event => {
        if (translationY.value > -SCREEN_HEIGHT / 2 + 100) {
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

    const tabBarHeight = useBottomTabBarHeight();

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);

    useEffect(() => {
      translationY.value = withSpring(-SCREEN_HEIGHT / 2, {damping: 50});
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            styles.bottomSheet,
            bottomSheetStyle,
            {top: SCREEN_HEIGHT},
            styles.bottomSheetShadow,
          ]}>
          <View style={styles.line}></View>
          <View>{props.children}</View>
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
    marginVertical: 15,
  },

  bottomSheet: {
    height: SCREEN_HEIGHT / 3,
    width: '100%',
    position: 'absolute',

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
