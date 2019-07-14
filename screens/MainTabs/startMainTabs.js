import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import FindPlace from '../FindPlace/FindPlace';
import SharePlace from '../SharePlace/SharePlace';
import Conta from '../SideDrawer/SideDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Details from '../PlaceDetail/PlaceDetail';


const FindPlaceNow = createStackNavigator({
  Home: FindPlace,
});

const SharePlaceNow = createStackNavigator({
  Home: SharePlace,
});

const TabNavigator = createBottomTabNavigator({
  'Encontrar local':  FindPlaceNow,
  'Compartilhar local': SharePlaceNow,
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
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      }
    },
    Screen: Details,
  },
  {   
    initialRouteName: 'Home',
  }
);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Navigation,
    navigationOptions: {
      drawerLabel: 'Lugares',
      drawerIcon: <Icon name="ios-map" size={30} color="green" />
    },
  },
  Conta: Conta,
});

export default MyDrawerNavigator;