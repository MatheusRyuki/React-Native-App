import Auth from './screens/auth/Auth';
import MainTabs from './screens/MainTabs/startMainTabs';
import { createAppContainer, createSwitchNavigator , createStackNavigator } from 'react-navigation'; 
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Auth,
    }
  });

  let Navigation = createAppContainer(createSwitchNavigator (
    {
      Home: AppNavigator,
      Screen: MainTabs,
    },
    {
      initialRouteName: 'Home',
    }
  ));

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
    <Navigation />
  </Provider>
    );
  }
}