import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import {Colors} from '~/themes/colors';
import {Body02, Body03} from '~/themes/typography';
import {DropDownList} from '../common/DropDownList';

const DATA = ['item1', 'item2', 'item3', 'item4', 'item5'];
const checkBoxFilledImg = require('~/assets/images/vectorIcon/check_box_filled.png');
const checkBoxEmptyImg = require('~/assets/images/vectorIcon/check_box_empty.png');

export const ProductFilter = () => {
  const [dropDownListExpanded, setDropDownListExpanded] = useState(false);
  const [dropDownListSelectedItemIndex, setDropDownListSelectedItemIndex] =
    useState<number>();
  const [checkBoxState, setCheckBoxState] = useState(false);
  return (
    <View style={styles.container}>
      <DropDownList
        title={'Select One'}
        item={DATA}
        expanded={dropDownListExpanded}
        titleOnPressCallBack={() => {
          setDropDownListExpanded(!dropDownListExpanded);
        }}
        itemOnPressCallBack={index => {
          setDropDownListSelectedItemIndex(index);
        }}
        selectedItem={dropDownListSelectedItemIndex}
      />
      <Pressable
        style={styles.checkBoxContainer}
        onPress={() => setCheckBoxState(!checkBoxState)}>
        <Image
          source={checkBoxState ? checkBoxFilledImg : checkBoxEmptyImg}
          style={styles.checkbox}
        />
        <Text style={[Body02, styles.checkBoxText]}>
          {checkBoxState ? 'checked' : 'not check'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginVertical: 20,
    marginHorizontal: 15,
    flexDirection: 'column',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 21,
    height: 21,
    tintColor: Colors.Grey_04,
  },
  checkBoxText: {
    marginStart: 5,
  },
});
