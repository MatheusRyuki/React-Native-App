import React, { Component } from 'react';
import {View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import * as actions from '../../store/actions/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation-drawer';

class SharePlaceScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
    title: 'Compartilhar local',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: 
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
    <Icon name="ios-menu" size={30} color="black" />
    </TouchableOpacity>
    ,
    headerLeftContainerStyle: {
      paddingLeft: 10
    }
  }
};

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(actions.addPlace(placeName)),
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);