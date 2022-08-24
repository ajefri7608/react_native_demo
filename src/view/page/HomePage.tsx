/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import LoginBox from '~/view/component/LoginBox';
import BottomSheet, {
  BottomSheetRefProps,
} from '~/view/component/DragableBottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import DragableBottomSheet from '~/view/component/DragableBottomSheet';
const HomePage = ({navigation}: any) => {
  const refBottomSheet = useRef<BottomSheetRefProps>(null);

  const triggerBottomSheet = () => {
    const isActive = refBottomSheet?.current?.isActive?.();

    if (isActive) {
      refBottomSheet?.current?.scrollTo?.(0);
    } else {
      refBottomSheet?.current?.scrollTo?.(-400);
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={triggerBottomSheet}>
          <Text style={{color: 'white'}}>Show Bottom Sheet</Text>
        </TouchableOpacity>
      </View>
      <DragableBottomSheet ref={refBottomSheet} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
});

export default HomePage;
