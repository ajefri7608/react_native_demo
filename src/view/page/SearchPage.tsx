/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LoginBox from '~/view/component/login/LoginBox';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import ProductGridItem from '../component/product/ProductGridItem';
import {SearchBar} from '~/view/component/search/SearchBar';

const DATA = [
  {
    brand: 'John Jacobs',
    type: 'EyeGlasses',
    name: 'Jobn Jacobs Blue Reactangle Eyeglasses',
    price: 100,
    productImage: '',
  },
  {
    brand: 'John Jacobs',
    type: 'EyeGlasses',
    name: 'Jobn Jacobs Blue Reactangle Eyeglasses',
    price: 100,
    productImage: '',
  },
  // {
  //   brand: 'John Jacobs',
  //   type: 'EyeGlasses',
  //   name: 'Jobn Jacobs Blue Reactangle Eyeglasses',
  //   price: 100,
  //   productImage: '',
  // },
  // {
  //   brand: 'John Jacobs',
  //   type: 'EyeGlasses',
  //   name: 'Jobn Jacobs Blue Reactangle Eyeglasses',
  //   price: 100,
  //   productImage: '',
  // },
  // {
  //   brand: 'John Jacobs',
  //   type: 'EyeGlasses',
  //   name: 'Jobn Jacobs Blue Reactangle Eyeglasses',
  //   price: 100,
  //   productImage: '',
  // },
];

const SearchPage = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const renderItem = ({item}: any) => <ProductGridItem title={item.title} />;
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <SearchBar />
      <FlatList
        numColumns={1}
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});

export default SearchPage;
