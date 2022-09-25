import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import {Colors} from '~/themes/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Body02, Header01} from '~/themes/typography';
export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.searchBarShadow}>
        <View style={styles.searchBar}>
          <View style={styles.searchTextGrp}>
            <View style={styles.searchIcon}>
              <FeatherIcon name={'search'} size={23} color={'black'} />
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={setSearchText}
              value={searchText}
            />
          </View>
          <Pressable style={styles.filter}>
            <FontAwesomeIcon name={'sliders-h'} size={23} color={'black'} />
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
    marginTop: 3,
  },
  searchIcon: {
    position: 'relative',
    left: 0,
    paddingStart: 20,
    paddingEnd: 5,
    alignSelf: 'center',
    marginTop: 5,
  },
  textInput: {
    width: '100%',
    paddingVertical: 0,
    ...Body02,
  },

  filter: {
    marginEnd: 20,
    marginTop: 3,
  },
});
