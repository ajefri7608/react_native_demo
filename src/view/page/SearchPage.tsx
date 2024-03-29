/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {StyleSheet, View, FlatList, ListRenderItemInfo} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import ProductGridItem from '../component/product/ProductGridItem';
import {SearchBar} from '~/view/component/search/SearchBar';
import {CategoryIcon} from '../component/product/CategoryIcon';
import {CategoryIconItem} from '~/model/product/product';
import BottomSheetWithGesture, {
  refType,
} from '../component/common/BottomSheetWithGesture';
import {ProductFilter} from '../component/product/ProductFilter';

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
];
const CategoryIconData = [
  {
    name: 'For you',
    itemName: 'For you',
    icon: require('~/assets/gif/lottie/heart.gif'),
  },
  {
    name: 'For you',
    itemName: 'For you',
    icon: require('~/assets/gif/lottie/heart.gif'),
  },
  {
    name: 'For you',
    itemName: 'For you',
    icon: require('~/assets/gif/lottie/heart.gif'),
  },
  {
    name: 'For you',
    itemName: 'For you',
    icon: require('~/assets/gif/lottie/heart.gif'),
  },
  {
    name: 'For you',
    itemName: 'For you',
    icon: require('~/assets/gif/lottie/heart.gif'),
  },
  {
    name: 'For you',
    itemName: 'For you',
    icon: require('~/assets/gif/lottie/heart.gif'),
  },
  {
    name: 'For you',
    itemName: 'For you',
    icon: require('~/assets/gif/lottie/heart.gif'),
  },
  {
    name: 'For you',
    itemName: 'For you',
    icon: require('~/assets/gif/lottie/heart.gif'),
  },
];

const SearchPage = () => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const [openFilter, setOpenFilter] = useState(false);
  const childRef = useRef<refType>(null);
  const renderItem = ({item}: any) => <ProductGridItem title={item.title} />;

  const renderCategoryIconItem = ({
    item,
  }: ListRenderItemInfo<CategoryIconItem>) => {
    return <CategoryIcon {...item}></CategoryIcon>;
  };

  const renderFilter = () => {
    return (
      <BottomSheetWithGesture
        closeBtnCallBack={() => {
          setTimeout(() => {
            setOpenFilter(false);
          }, 450);
        }}
        content={<ProductFilter />}
        ref={childRef}
      />
    );
  };
  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: tabBarHeight},
      ]}>
      <SearchBar
        filterBtnOnPress={() => {
          setOpenFilter(true);
        }}
      />
      <FlatList
        horizontal
        data={CategoryIconData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderCategoryIconItem}
        style={{height: 140}}
        contentContainerStyle={{paddingStart: 16}}
      />
      <FlatList
        numColumns={1}
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
      {openFilter ? renderFilter() : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});

export default SearchPage;
