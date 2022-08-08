
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {store} from './src/redux/store/configureStore';

const RNRedux = () => (
  <Provider store={store}>
      <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);