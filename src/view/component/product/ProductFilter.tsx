import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenWidth} from '~/themes/measure';
import {DropDownList} from '../common/DropDownList';

const DATA = ['a', 'b', 'c', 'd', 'e'];

export const ProductFilter = () => {
  const [currentExpandList, setCurrentExpandList] = useState(-1);
  return (
    <View style={styles.container}>
      <DropDownList
        title={'abc'}
        item={DATA}
        expanded={currentExpandList === 0 ? true : false}
        titleOnPressCallBack={() => {
          if (currentExpandList !== 0) {
            setCurrentExpandList(0);
          } else {
            setCurrentExpandList(-1);
          }
        }}
        itemOnPressCallBack={() => {}}
      />
      <Text>21321</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    padding: 15,
    flexDirection: 'column',
    // alignItems: 'center',
  },
});
