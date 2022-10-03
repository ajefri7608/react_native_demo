import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  ListRenderItem,
} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '~/themes/colors';
import {
  Body01,
  Body01SemiBold,
  Header01,
  Header02,
  Header02ExtraBold,
} from '~/themes/typography';

const DATA = [
  {
    images: require('~/assets/images/car.jpg'),
  },
  {
    images: require('~/assets/images/car2.jpg'),
  },
  {
    images: require('~/assets/images/car3.jpg'),
  },
];
export const ProductDetail = ({item}: any) => {
  const windowWidth = Dimensions.get('window').width;
  function renderProductImage({item}: any) {
    return (
      <Image
        style={{width: windowWidth, height: 320}}
        source={item.images}
        resizeMode={'cover'}
      />
    );
  }
  return (
    <ScrollView style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderProductImage}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageList}
      />
      <View style={styles.infoTitleGrp}>
        <Image
          style={styles.infoIcon}
          source={require('~/assets/images/vectorIcon/info.png')}
        />
        <Text style={Header01}>info</Text>
      </View>
      <View style={styles.productDiscriptionContainer}>
        <View style={styles.productDiscriptionRow}>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Make</Text>
            <Text style={[Body01, {marginTop: 10, textAlign: 'right'}]}>
              Toyota
            </Text>
          </View>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>New/Used</Text>
            <Text style={[Body01, {marginTop: 10, textAlign: 'right'}]}>
              Brand New
            </Text>
          </View>
        </View>
        <View style={styles.productDiscriptionRow}>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Seat Count</Text>
            <Text style={[Body01, {marginTop: 10}]}>5</Text>
          </View>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Manu. Year</Text>
            <Text style={[Body01, {marginTop: 10, textAlign: 'right'}]}>
              2020
            </Text>
          </View>
        </View>
        <View style={styles.productDiscriptionRow}>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Fuel Type</Text>
            <Text style={[Body01, {marginTop: 10}]}>Electric</Text>
          </View>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Num of Door</Text>
            <Text style={[Body01, {marginTop: 10, textAlign: 'right'}]}>4</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'white'},
  imageList: {height: 320, flexGrow: 0},
  productDiscriptionContainer: {
    flex: 1,
    marginHorizontal: 18,
    marginVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Grey_03,
    paddingBottom: 5,
  },
  infoTitleGrp: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingTop: 20,
  },
  infoIcon: {
    tintColor: Colors.Grey_05,
    width: 20,
    height: 20,
    marginEnd: 5,
    marginTop: 5,
  },
  productDiscriptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  textGrp: {flexDirection: 'column'},
  infoText: {
    marginStart: 5,
  },
});
