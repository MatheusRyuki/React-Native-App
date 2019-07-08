/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import configureStore from './store/configureStore';
import React from 'react';

const store = configureStore();

const RNRedux = () => {
  return (
    <Provider store={store}>
    <App/>
  </Provider>
  )
};

AppRegistry.registerComponent(appName, () => RNRedux);
