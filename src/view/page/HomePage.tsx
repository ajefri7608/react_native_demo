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
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BottomSheetWithGesture, {
  refType,
} from '../component/common/BottomSheetWithGesture';

const HomePage = () => {
  const childRef = useRef<refType>(null);
  const [openCardDialog, setOpenCardDialog] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpenCardDialog(true)}>
        <Text style={{color: 'white'}}>Show Bottom Dialog</Text>
      </TouchableOpacity>
      {openCardDialog ? (
        <BottomSheetWithGesture
          closeBtnCallBack={() => {
            setTimeout(() => {
              setOpenCardDialog(false);
            }, 450);
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
