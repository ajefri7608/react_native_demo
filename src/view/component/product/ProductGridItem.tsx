import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import {
  Body01,
  Body01SemiBold,
  Body02,
  Header02,
  Header03,
} from '~/themes/typography';
import {CommonActions, useNavigation} from '@react-navigation/native';
export default function ProductGridItem({title}: any) {
  const navigation = useNavigation();
  const navToProductDetail = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ProductDetail',
        params: {
          // user: 'jane',
        },
      }),
    );
  };
  return (
    <Pressable style={styles.container} onPress={navToProductDetail}>
      <Image
        style={{width: '100%', height: 250, borderRadius: 9}}
        source={require('~/assets/images/car.jpg')}
        resizeMode={'contain'}
      />
      <View style={styles.textContainer}>
        <View style={styles.titleGrp}>
          <Text style={Body01}>2017 TOYOTA</Text>
          <Text style={Body02}>200,000</Text>
        </View>

        <Text style={[styles.bodyText, Body02]}>2 seats</Text>
        <Text style={[styles.bodyText, Body02]}>1999 cc</Text>
      </View>
    </Pressable>
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
