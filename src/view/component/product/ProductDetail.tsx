import React from 'react';

import {FlatList, StyleSheet, View, ScrollView, Image} from 'react-native';

const DATA = [
  {
    images: 'aaa',
  },
  {
    images: 'bbb',
  },
];
export const ProductDetail = ({item}: any) => {
  function renderProductImage() {
    return (
      <View style={{height: '100%', width: 220, backgroundColor: '#CED0CE'}}>
        {/* <Image
          style={{width: '100%', height: 250}}
          source={require('~/assets/images/car.jpg')}
          resizeMode={'cover'}
        /> */}
        <View
          style={{width: '100%', height: 20, backgroundColor: 'red'}}></View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        style={{}}
        data={DATA}
        renderItem={renderProductImage}
        keyExtractor={item => item.images}
        numColumns={1}
      />
      <View style={{width: '100%', height: 20, backgroundColor: 'blue'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'white'},
  imageContainer: {width: 250, height: 250, backgroundColor: 'red'},
});
