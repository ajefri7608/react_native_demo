import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
export default function LoginIconList() {
  return (
    <View style={styles.iconList}>
      <View style={styles.iconContainer}>
        <FastImage
          source={require('~/assets/images/vectorIcon/google.png')}
          style={{width: 30, height: 30}}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.iconContainer}>
        <FastImage
          source={require('~/assets/images/vectorIcon/facebook.png')}
          style={{width: 30, height: 30}}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.iconContainer}>
        <FastImage
          source={require('~/assets/images/vectorIcon/twitter.png')}
          style={{width: 30, height: 30}}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconList: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: 80,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#bcbcbc',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
