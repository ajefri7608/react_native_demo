import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '~/themes/colors';
import {Body01, Body01SemiBold, Body02, Header02} from '~/themes/typography';
export default function ProductGridItem({title}: any) {
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: 250, borderRadius: 11}}
        source={require('~/assets/images/car.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    height: 360,
    marginHorizontal: 20,
  },
});
