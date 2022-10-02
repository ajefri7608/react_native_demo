import React from 'react';
import {FlatList, StyleSheet, View, ScrollView, Image} from 'react-native';
import {Dimensions} from 'react-native';

const DATA = [
  {
    images: 'aaa',
  },
  {
    images: 'bbb',
  },
];
export const ProductDetail = ({item}: any) => {
  const windowWidth = Dimensions.get('window').width;
  function renderProductImage() {
    return (
      <Image
        style={{width: windowWidth, height: 250}}
        source={require('~/assets/images/car.jpg')}
        resizeMode={'cover'}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        style={styles.imageContainer}
        data={DATA}
        renderItem={renderProductImage}
        keyExtractor={item => item.images}
        pagingEnabled
        numColumns={1}
      />
      <View style={{width: '100%', height: 20, backgroundColor: 'blue'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'white'},
  imageContainer: {width: '100%', height: 250, backgroundColor: 'red'},
});
