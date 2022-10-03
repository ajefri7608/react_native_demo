import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  ListRenderItem,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

import {Colors} from '~/themes/colors';
import {
  Body01,
  Body01SemiBold,
  Header01,
  Header02,
  Header02ExtraBold,
} from '~/themes/typography';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
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

const SecondRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'pink'}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route}) => (
      <Text style={{color: Colors.Grey_05}}> {route.title}</Text>
    )}
  />
);
export const ProductDetail = ({item}: any) => {
  const windowWidth = Dimensions.get('window').width;

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  function renderProductImage({item}: any) {
    return (
      <Image
        style={{width: windowWidth, height: 320}}
        source={item.images}
        resizeMode={'cover'}
      />
    );
  }

  const FirstRoute = () => (
    <ScrollView style={styles.container}>
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
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderProductImage}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageList}
      />
      <View
        style={{width: '100%', height: 10, backgroundColor: 'white'}}></View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
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
