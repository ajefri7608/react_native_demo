import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
});
