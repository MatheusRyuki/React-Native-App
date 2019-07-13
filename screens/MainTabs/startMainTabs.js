import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import FindPlace from '../FindPlace/FindPlace';
import SharePlace from '../SharePlace/SharePlace';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Details from '../PlaceDetail/PlaceDetail';

const TabNavigator = createBottomTabNavigator({
  'Compartilhar local': SharePlace,
  'Encontrar local': FindPlace,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'Encontrar local') {
        iconName = 'ios-map';
      } else if (routeName === 'Compartilhar local') {
        iconName = 'ios-share-alt';
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'gray',
  },
});

let Navigation = createStackNavigator(
  {
    Home: TabNavigator,
    Screen: Details,
  },
  {
    initialRouteName: 'Home',
  }
);

export default Navigation;