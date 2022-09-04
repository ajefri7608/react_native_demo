import React from 'react';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {StyleSheet, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.blurViewContainer}>
      <BlurView
        style={styles.blurViewContainer}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  blurViewContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',

    // top: SCREEN_HEIGHT,
    // borderRadius: 20,
    // backgroundColor: 'white',
  },
});
export default Loading;
