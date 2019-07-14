import React, { Component } from 'react';
import {View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation-drawer';

class FindPlaceScreen extends Component {
  static navigationOptions = ({ navigation }) => {
      return {
      title: 'Encontrar local',
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

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    
    this.props.navigation.navigate('Screen', {
        title: this.props.places.find(place => {
          return place.key === key;
        }).name,
        selectedPlace: selPlace,
        key: key,
      }
    );
  };

  teste = () => {
    console.log(this.props)
  };

  render() {
    return (
      <View>
        <PlaceList places={this.props.places}
         onItemSelected={this.itemSelectedHandler}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);