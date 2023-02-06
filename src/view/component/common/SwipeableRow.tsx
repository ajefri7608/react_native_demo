import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Image,
  ImageRequireSource,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Colors} from '~/themes/colors';
import {Body03} from '~/themes/typography';

type IconItem = {
  text: string;
  icon: ImageRequireSource;
  backgroundColor: string;
  onPress: () => void;
};

type Param = {
  swipeLeftCallBack: () => void;
};

const RightIconList: IconItem[] = [
  {
    text: 'Archive',
    icon: require('~/assets/images/vectorIcon/archive_box.png'),
    onPress: () => {},
    backgroundColor: '#4A6EA2',
  },
  {
    text: 'Edit',
    icon: require('~/assets/images/vectorIcon/edit.png'),
    onPress: () => {},
    backgroundColor: '#787FF7',
  },
];

const LeftIconList: IconItem[] = [
  {
    text: 'Delete',
    icon: require('~/assets/images/vectorIcon/delete.png'),
    onPress: () => {},
    backgroundColor: 'red',
  },
];

const renderLeftActions = (
  progressAnimatedValue: Animated.AnimatedInterpolation,
  dragX: Animated.AnimatedInterpolation,
) => {
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        styles.leftBtn,
        {
          transform: [{translateX: trans}],
        },
        {backgroundColor: LeftIconList[0].backgroundColor},
      ]}>
      <Image source={LeftIconList[0].icon} style={styles.iconImg} />
      <Text style={[Body03, styles.rightIconText]}>{LeftIconList[0].text}</Text>
    </Animated.View>
  );
};

const renderRightAction = (
  item: IconItem,
  index: number,

  progress: Animated.AnimatedInterpolation,
) => {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [90 * (2 - index), 0],
  });
  return (
    <Animated.View
      style={[
        {transform: [{translateX: trans}]},
        styles.rightBtn,
        {backgroundColor: item.backgroundColor},
      ]}
      key={`rightItem${index}`}>
      <Image source={item.icon} style={styles.iconImg} />
      <Text style={[Body03, styles.rightIconText]}>{item.text}</Text>
    </Animated.View>
  );
};

const renderRightActions = (progress: Animated.AnimatedInterpolation) => {
  return (
    <View style={styles.rightBtnsContainer}>
      {RightIconList.map((item, index) =>
        renderRightAction(item, index, progress),
      )}
    </View>
  );
};

export const SwipeableRow = (param: Param) => {
  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableOpen={direction => {
        if (direction === 'left') {
          param.swipeLeftCallBack();
        }
        // console.log(`Opening swipeable from the ${direction}`);
      }}
      onSwipeableClose={direction => {
        // console.log(`Closing swipeable to the ${direction}`);
      }}
      leftThreshold={30}
      rightThreshold={40}
      friction={2}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>title</Text>
        <Text style={styles.subject}>subject</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'column',
    height: 80,
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  title: {
    color: Colors.Grey_05,
  },
  subject: {
    color: Colors.Grey_04,
  },
  rightBtnsContainer: {
    width: 180,
    flexDirection: 'row',
  },
  rightBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  iconImg: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  rightIconText: {
    color: 'white',
    marginTop: 8,
  },
  leftBtn: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  leftText: {
    color: 'white',
    fontSize: 16,
    // backgroundColor: 'transparent',
    padding: 10,
  },
});
