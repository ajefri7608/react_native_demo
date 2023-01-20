import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
} from 'react-native';

import {Colors} from '~/themes/colors';
import {Body01, Header01, Header02} from '~/themes/typography';
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';
import FastImage from 'react-native-fast-image';
import {screenWidth} from '~/themes/measure';
import {Rating} from '../common/Rating';
import {useNavigation, CommonActions} from '@react-navigation/native';
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

const SecondRoute = () => (
  <View style={styles.secondScreenContainer}>
    <Rating ratingChangedCallBack={() => {}} />
  </View>
);

function renderTabBar(
  props: SceneRendererProps & {
    navigationState: NavigationState<any>;
  },
) {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBar}
      renderLabel={({route}) => (
        <Text style={{color: Colors.Grey_05}}> {route.title}</Text>
      )}
    />
  );
}
export const ProductDetail = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  function renderProductImage({item}: any) {
    return (
      <Image
        style={styles.productImg}
        source={item.images}
        resizeMode={'cover'}
      />
    );
  }

  const FirstRoute = () => (
    <ScrollView style={styles.firstScreenContainer}>
      <View style={styles.infoTitleGrp}>
        <Image
          style={styles.infoIcon}
          source={require('~/assets/images/vectorIcon/info.png')}
        />
        <Text style={[Header01, styles.infoTitle]}>info</Text>
      </View>
      <View style={styles.productDiscriptionContainer}>
        <View style={styles.productDiscriptionRow}>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Make</Text>
            <Text style={[Body01, {marginTop: 12, textAlign: 'right'}]}>
              Toyota
            </Text>
          </View>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>New/Used</Text>
            <Text style={[Body01, {marginTop: 12, textAlign: 'right'}]}>
              Brand New
            </Text>
          </View>
        </View>
        <View style={styles.productDiscriptionRow}>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Seat Count</Text>
            <Text style={[Body01, {marginTop: 12}]}>5</Text>
          </View>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Manu. Year</Text>
            <Text style={[Body01, {marginTop: 12, textAlign: 'right'}]}>
              2020
            </Text>
          </View>
        </View>
        <View style={styles.productDiscriptionRow}>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Fuel Type</Text>
            <Text style={[Body01, {marginTop: 12}]}>Electric</Text>
          </View>
          <View style={styles.textGrp}>
            <Text style={[Header02]}>Num of Door</Text>
            <Text style={[Body01, {marginTop: 12, textAlign: 'right'}]}>4</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backBtn}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={styles.backBtnImg}
          source={require('~/assets/images/vectorIcon/arrow_left.png')}
        />
      </Pressable>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderProductImage}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageList}
      />
      <View style={styles.divider} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: screenWidth}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'white'},
  imageList: {height: 320, flexGrow: 0},
  productDiscriptionContainer: {
    flex: 1,

    marginVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Grey_03,
    paddingBottom: 5,
  },
  infoTitleGrp: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',

    paddingTop: 20,
  },
  infoIcon: {
    tintColor: Colors.Grey_05,
    width: 20,
    height: 20,
    top: 1,
  },
  infoTitle: {
    marginStart: 5,
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
  tabBar: {backgroundColor: 'white'},
  tabBarIndicator: {backgroundColor: 'pink'},
  productImg: {width: screenWidth, height: 320},
  divider: {height: 10, backgroundColor: 'white'},
  firstScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  secondScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
  },

  backBtn: {
    position: 'absolute',
    top: 45,
    left: 15,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 48,
    zIndex: 99,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnImg: {
    width: 30,
    height: 30,
    left: -1,
    tintColor: Colors.Grey_05,
  },
});
