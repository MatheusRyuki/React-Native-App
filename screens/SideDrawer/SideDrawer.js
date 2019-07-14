import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Conta',
    drawerIcon: <Icon name="ios-person" size={30} color="green" />
  };

  render() {
    return (
      <View>
        <Text>Drawer Lateral</Text>
      </View>
    );
  }
}



export default SideDrawer;