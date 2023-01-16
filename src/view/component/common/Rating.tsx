import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';

const containerWidth = 200;
const ratingFilled = require('~/assets/images/vectorIcon/rating_filled.png');
const ratingEmpty = require('~/assets/images/vectorIcon/rating_empty.png');

type Param = {
  ratingChangedCallBack: (rating: number) => void;
};

export const Rating = (param: Param) => {
  const ratingAnimateValue = useSharedValue(5);
  const [rating, setRating] = useState(5);

  function currentRatingCal(gesturePositionX: number) {
    ratingAnimateValue.value = Math.ceil(
      gesturePositionX / (containerWidth / 5),
    );
  }

  const gesture = Gesture.Pan()
    .onBegin(e => {
      'worklet';

      runOnJS(currentRatingCal)(e.x);
    })
    .onUpdate(e => {
      'worklet';
      runOnJS(currentRatingCal)(e.x);
    });

  useAnimatedReaction(
    () => {
      return ratingAnimateValue.value;
    },
    (result, previous) => {
      if (result !== previous) {
        runOnJS(ratingChangedAction)();
      }
    },
    [ratingAnimateValue],
  );

  function ratingChangedAction() {
    setRating(ratingAnimateValue.value);
    param.ratingChangedCallBack(ratingAnimateValue.value);
  }

  function renderRating() {
    const jsxArr = [];
    for (let i = 0; i < 5; i++) {
      jsxArr.push(
        <Image
          source={i <= rating - 1 ? ratingFilled : ratingEmpty}
          style={[styles.ratingImg, i <= rating - 1 ? {tintColor: 'red'} : {}]}
        />,
      );
    }
    return jsxArr;
  }

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>{renderRating()}</View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: containerWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingImg: {
    width: 26,
    height: 26,
  },
});
