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
      <View style={styles.searchBarGrp}>
        <View style={styles.searchIcon}>
          <FeatherIcon name={'search'} size={23} color={Colors.Grey_04} />
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
      <Pressable style={styles.filter}>
        <FontAwesomeIcon name={'sliders'} size={23} color={Colors.Grey_04} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    height: 55,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },

  searchBarGrp: {
    flex: 9,
    backgroundColor: Colors.Grey_01,
    flexDirection: 'row',
    alignItems: 'baseline',
    borderRadius: 5,
  },
  searchIcon: {
    position: 'relative',
    left: 0,
    paddingStart: 10,
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
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
