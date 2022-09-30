import React from 'react';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {StyleSheet, View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
const Loading = () => {
  return (
    <View style={styles.blurViewContainer}>
      <BlurView
        style={styles.blurViewContainer}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <LottieView
        style={styles.Icon}
        source={require('~/assets/gif/lottie/loading1.json')}
        autoPlay
        loop
      />
    </View>
  );
};
const styles = StyleSheet.create({
  blurViewContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    width: '100%',
    height: 350,
  },
});
export default Loading;
