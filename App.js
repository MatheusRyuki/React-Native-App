import { createAppContainer, createSwitchNavigator , createStackNavigator } from 'react-navigation';
import MainTabs from './screens/MainTabs/startMainTabs';
import Auth from './screens/auth/Auth';
import React from 'react';

const AppNavigator = createStackNavigator(
  {
    Home: Auth,
  });

export default createAppContainer(createSwitchNavigator (
  {
    Home: AppNavigator,
    Screen: MainTabs,
  },
  {
    initialRouteName: 'Home',
  }
));