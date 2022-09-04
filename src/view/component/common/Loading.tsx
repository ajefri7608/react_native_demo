import React from 'react';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {StyleSheet, View, Image} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.blurViewContainer}>
      <BlurView
        style={styles.blurViewContainer}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={require('~/assets/icons/loadingGif.gif')}
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
    // top: SCREEN_HEIGHT,
    // borderRadius: 20,
    // backgroundColor: 'white',
  },
});
export default Loading;
