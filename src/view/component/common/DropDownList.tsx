import React, {useEffect, useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import Animated, {
  color,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from '~/themes/colors';
import {Body02, Body03} from '~/themes/typography';

type Param = {
  title: string;
  item: string[];
  expanded: boolean;
  titleOnPressCallBack: () => void;
  itemOnPressCallBack: (index: number) => void;
  selectedItem?: number;
};

export const DropDownList = (param: Param) => {
  const listHeight = useSharedValue(45);
  const [animateEnd, setAnimateEnd] = useState(true);
  const itemCount =
    param.item !== undefined && param.item.length > 0
      ? param.item.length + 1
      : 1;
  const expandAnimatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(
        listHeight.value,
        {
          duration: 250,
        },
        () => {
          runOnJS(_setAnimateState)();
        },
      ),
    };
  });
  function _setAnimateState() {
    setAnimateEnd(true);
  }
  useEffect(() => {
    if (param.expanded) {
      listHeight.value = 36 * itemCount;
    } else {
      listHeight.value = 36;
    }
  }, [listHeight, itemCount, param.expanded]);
  return (
    <Animated.View style={[styles.container, expandAnimatedStyles]}>
      <Pressable onPress={() => param.titleOnPressCallBack()}>
        <View style={styles.titleContainer}>
          <Text style={[Body02, styles.title]}>{param.title}</Text>
          {param.expanded ? (
            <Image
              style={styles.expandIcon}
              source={require('~/assets/images/vectorIcon/arrow_up.png')}
            />
          ) : (
            <Image
              style={styles.expandIcon}
              source={require('~/assets/images/vectorIcon/arrow_down.png')}
            />
          )}
        </View>
      </Pressable>
      <View>
        {param.item.map((item, index) => {
          return (
            <View style={styles.itemContainer} key={`dropDownListItem${index}`}>
              <Text
                style={[
                  styles.item,
                  param.selectedItem === index ? {color: 'red'} : {},
                ]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  titleContainer: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.Grey_04,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  title: {color: Colors.Grey_05},
  expandIcon: {
    width: 16,
    height: 16,
    opacity: 0.7,
    tintColor: Colors.Grey_05,
  },
  itemContainer: {
    height: 33,
    justifyContent: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.Grey_02,
  },
  item: {
    marginStart: 8,
  },
});
