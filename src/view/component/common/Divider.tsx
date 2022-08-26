import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider}></View>
      <Text style={{paddingHorizontal: 10}}>In Progress</Text>
      <View style={styles.divider}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
  },
  divider: {
    flex: 3,
    height: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    alignSelf: 'center',
  },
});
