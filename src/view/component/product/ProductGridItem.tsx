import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {
  Body01,
  Body01SemiBold,
  Body02,
  Header02,
  Header03,
} from '~/themes/typography';
export default function ProductGridItem({title}: any) {
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: 250, borderRadius: 9}}
        source={require('~/assets/images/car.jpg')}
        resizeMode={'contain'}
      />
      <View style={styles.textContainer}>
        <View style={styles.titleGrp}>
          <Text style={Body01}>2018 凌志 LEXUS</Text>
          <Text style={Header03}>200,000</Text>
        </View>

        <Text style={[styles.bodyText, Body02]}>2 seats</Text>
        <Text style={[styles.bodyText, Body02]}>1999 cc</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,

    marginHorizontal: 20,
    marginTop: 18,
  },
  textContainer: {
    flexDirection: 'column',
    paddingTop: 8,
    paddingHorizontal: 5,
  },
  titleGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyText: {marginTop: 2},
});
