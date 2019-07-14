import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity }  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const placeDetail = props => {
  const selectedPlace = props.navigation.state.params;
  
  const placeDeletedHandler = () => {
    props.onDeletePlace(selectedPlace.selectedPlace.key);
    props.navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View>
         <Image source={selectedPlace.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{selectedPlace.selectedPlace.name}</Text>
      </View>
       <View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={placeDeletedHandler}>
            <Icon name="ios-trash" size={30} color="red" />
          </TouchableOpacity>
        </View>
        <Button title={'fechar'} onPress={props.onClose}/>
      </View> 
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 200,
  }, 
  placeName: {
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 28
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  }, 
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(actions.deletePlace(key)),
  };
};


export default connect(null, mapDispatchToProps)(placeDetail);