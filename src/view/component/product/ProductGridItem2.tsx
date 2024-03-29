import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '~/themes/colors';
import {Body01, Body01SemiBold, Body02, Header02} from '~/themes/typography';
export default function ProductGridItem({title}: any) {
  return (
    <View style={styles.containerShadow}>
      <View style={{...styles.container}}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('~/assets/images/car.jpg')}
        />
        <View style={styles.subjectGrp}>
          <View style={styles.priceGrp}>
            <Text style={Body01}>2018 BMW 218I</Text>
            <Text
              style={[
                Body01SemiBold,
                {color: Colors.HoverRed, fontWeight: '700'},
              ]}>
              $200,000
            </Text>
          </View>
          <Text style={Body02}>Mileage: 110000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    marginVertical: 8,
    borderRadius: 6,
    height: 220,
    width: '90%',
    marginHorizontal: 20,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  containerShadow: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  priceGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: '100%',

    flex: 7,
  },
  subjectGrp: {
    flex: 2.5,
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontSize: 32,
  },
});
