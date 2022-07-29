
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';

import configureStore from './redux/store/configureStore';


const RNRedux = () => (
    <Provider store = { configureStore }>
      <App />
    </Provider>
  )
  
  AppRegistry.registerComponent(appName, () => RNRedux);