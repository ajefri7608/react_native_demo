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

import DragableBottomSheet from '~/view/component/common/DragableBottomSheet';
import BottomSheetWithGesture, {
  refType,
} from '../component/common/BottomSheetWithGesture';

const HomePage = ({navigation}: any) => {
  const childRef = useRef<refType>(null);
  const [openCardDialog, setOpenCardDialog] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#e5e5e5'}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOpenCardDialog(true)}>
          <Text style={{color: 'white'}}>Show Bottom Dialog</Text>
        </TouchableOpacity>
      </View>

      {openCardDialog ? (
        <BottomSheetWithGesture
          closeBtnCallBack={() => {
            setTimeout(() => {
              setOpenCardDialog(false);
            }, 250);
          }}
          content={
            <View
              style={{
                backgroundColor: 'white',
                height: 300,
                marginTop: 30,
              }}>
              <Text>aaasa</Text>
            </View>
          }
          ref={childRef}
        />
      ) : (
        <></>
      )}
    </View>
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
