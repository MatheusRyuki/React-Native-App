/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View,  } from 'react-native';
import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import * as action from './store/actions/index';

class App extends Component {
  submitHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeHandler = key => {
    this.props.onSelectPlace(key);
  };

  onDelete = key => {
    this.props.onDeletePlace();
  };

  onClose = () => {
    this.props.onUnselectPlace();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace} onClose={this.onClose}
        onDelete={this.onDelete}/>
          <PlaceInput submitHandler={this.submitHandler}/>
          <PlaceList places={this.props.places} onItemSelected={this.placeHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
}; 

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(action.addPlace(placeName)),
    onDeletePlace: () => dispatch(action.deletePlace()),
    onSelectPlace: (key) => dispatch(action.selectPlace(key)),
    onUnselectPlace: () => dispatch(action.unselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);