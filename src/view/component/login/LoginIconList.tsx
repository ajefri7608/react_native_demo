import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from '~/themes/colors';
export default function LoginIconList() {
  return (
    <View style={styles.iconList}>
      <View style={styles.iconContainer}>
        <FastImage
          source={require('~/assets/images/vectorIcon/google.png')}
          style={styles.iconImg}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.iconContainer}>
        <FastImage
          source={require('~/assets/images/vectorIcon/facebook.png')}
          style={styles.iconImg}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.iconContainer}>
        <FastImage
          source={require('~/assets/images/vectorIcon/twitter.png')}
          style={styles.iconImg}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconList: {
    height: 140,
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: 80,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.Grey_03,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImg: {
    width: 30,
    height: 30,
  },
});
