import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function ProductGridItem({title}: any) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 6,
  },
  title: {
    fontSize: 32,
  },
});
