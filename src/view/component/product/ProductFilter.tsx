import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import {Colors} from '~/themes/colors';
import {Body02} from '~/themes/typography';
import {DropDownList} from '../common/DropDownList';
import {Rating} from '../common/Rating';
import {SwipeableRow} from '../common/SwipeableRow';

const DATA = ['item1', 'item2', 'item3', 'item4', 'item5'];
const checkBoxFilledImg = require('~/assets/images/vectorIcon/check_box_filled.png');
const checkBoxEmptyImg = require('~/assets/images/vectorIcon/check_box_empty.png');

export const ProductFilter = () => {
  const [dropDownListExpanded, setDropDownListExpanded] = useState(false);
  const [dropDownListSelectedItemIndex, setDropDownListSelectedItemIndex] =
    useState<number>();
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [showSwipeRow, setShowSwipeRow] = useState(true);

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

      {showSwipeRow ? (
        <SwipeableRow
          swipeLeftCallBack={() => {
            setShowSwipeRow(false);
          }}
        />
      ) : (
        <></>
      )}

      <View style={styles.ratingContainer}>
        <Rating ratingChangedCallBack={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    marginVertical: 20,
    marginHorizontal: 15,
    flexDirection: 'column',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 21,
    height: 21,
    tintColor: Colors.Grey_05,
  },
  checkBoxText: {
    marginStart: 5,
    color: Colors.Grey_05,
  },
  ratingContainer: {
    marginTop: 10,
  },
});
