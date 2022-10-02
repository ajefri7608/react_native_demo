import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {Body03} from '~/themes/typography';
import LottieView from 'lottie-react-native';
import {CategoryIconItem} from '~/model/product/product';
export const CategoryIcon = (item: CategoryIconItem) => {
  return (
    <View style={styles.containerShadow}>
      <Pressable style={styles.container} onPress={() => {}}>
        <Image style={styles.icon} source={item.icon} resizeMode={'contain'} />
        <Text style={[Body03, styles.text]}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerShadow: {
    width: 80,
    height: 85,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    alignSelf: 'center',
    flexDirection: 'column',
    marginStart: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
  text: {},
});
