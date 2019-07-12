import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SharePlaceScreen extends Component {
  render() {
    return (
      <View>
        <Icon name="ios-trash" size={20} color="red"/>
        <Text>On SharePlaceScreen</Text>
      </View>
    );
  }
}

export default SharePlaceScreen;