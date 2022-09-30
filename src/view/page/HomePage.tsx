/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import BottomSheet, {
  BottomSheetRefProps,
} from '~/view/component/common/DragableBottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import DragableBottomSheet from '~/view/component/common/DragableBottomSheet';
import BottomDialog from '../component/common/BottomDialog';
const {height: SCREEN_HEIGHT} = Dimensions.get('screen');
const HomePage = ({navigation}: any) => {
  const refBottomSheet = useRef<BottomSheetRefProps>(null);
  const [openCardDialog, setOpenCardDialog] = useState(false);
  const triggerBottomSheet = () => {
    const isActive = refBottomSheet?.current?.isActive?.();

    if (isActive) {
      refBottomSheet?.current?.scrollTo?.(0);
    } else {
      refBottomSheet?.current?.scrollTo?.(-SCREEN_HEIGHT / 2.5);
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: '#e5e5e5'}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOpenCardDialog(true)}>
          <Text style={{color: 'white'}}>Show Bottom Dialog</Text>
        </TouchableOpacity>
        <LottieView
          style={{marginTop: 'auto'}}
          source={require('~/assets/gif/lottie/hello.json')}
          autoPlay
          loop
        />
      </View>
      <DragableBottomSheet ref={refBottomSheet}>
        <View>
          {Array.from(Array(5)).map((val, key) => {
            return (
              <View key={key} style={styles.item}>
                <View>
                  <Text>Hari Irawan</Text>
                  <Text>087666673246</Text>
                </View>

                <View style={styles.radioButton}></View>
              </View>
            );
          })}
        </View>
      </DragableBottomSheet>
      {openCardDialog ? (
        <BottomDialog
          closeBtnCallBack={() => {
            setTimeout(() => {
              setOpenCardDialog(false);
            }, 350);
          }}
        />
      ) : (
        <></>
      )}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 40,
    backgroundColor: 'blue',
  },
});

export default HomePage;
