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
  {
    brand: 'John Jacobs',
    type: 'EyeGlasses',
    name: 'Jobn Jacobs Blue Reactangle Eyeglasses',
    price: 100,
    productImage: '',
  },
];

const SearchPage = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const renderItem = ({item}: any) => <ProductGridItem title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList numColumns={2} data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginHorizontal: 20,
  },
});

export default SearchPage;
