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
} from 'react-native';
import LoginBox from '../component/LoginBox';

const LoginPage = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (

    <View style={styles.pageContainer}>

      <LoginBox />

    </View>

  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }

});

export default LoginPage;
