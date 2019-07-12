import { createBottomTabNavigator } from 'react-navigation';
import FindPlace from '../FindPlace/FindPlace';
import SharePlace from '../SharePlace/SharePlace';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const TabNavigator = createBottomTabNavigator({
  SharePlace: SharePlace,
  FindPlace: FindPlace,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'Home') {
        iconName = "ios-trash";
       
      } else if (routeName === 'FindPlace') {
        iconName = 'ios-map';
      } else if (routeName === 'SharePlace') {
        iconName = 'ios-share-alt';
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default TabNavigator;