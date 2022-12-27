import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from '~/themes/colors';
import {Body02} from '~/themes/typography';

type Param = {
  filterBtnOnPress: () => void;
};
export const SearchBar = (param: Param) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBarShadow}>
        <View style={styles.searchBar}>
          <View style={styles.searchTextGrp}>
            <View style={styles.searchIcon}>
              <FastImage
                style={{tintColor: Colors.Grey_05, width: 18, height: 18}}
                source={require('~/assets/images/vectorIcon/search.png')}
              />
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={setSearchText}
              value={searchText}
            />
          </View>
          <Pressable
            style={styles.filter}
            onPress={() => {
              param.filterBtnOnPress();
            }}>
            <FastImage
              style={{tintColor: Colors.Grey_05, width: 19, height: 19}}
              source={require('~/assets/images/vectorIcon/filter2.png')}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  searchBar: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 99,
    overflow: 'hidden',
  },
  searchBarShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 99,
  },

  searchTextGrp: {
    flex: 9,

    flexDirection: 'row',
    alignItems: 'baseline',
  },
  searchIcon: {
    position: 'relative',
    left: 0,
    paddingStart: 20,
    paddingEnd: 5,
    alignSelf: 'center',
  },
  textInput: {
    width: '100%',
    paddingVertical: 0,
    ...Body02,
    marginVertical: 0,
  },

  filter: {
    marginEnd: 20,
  },
});
