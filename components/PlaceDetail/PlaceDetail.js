import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet, TouchableOpacity }  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
  let modalContent = null;
  
  if (props.selectedPlace) {
    modalContent = (
      <View>
      <Image source={props.selectedPlace.image} style={styles.placeImage}/>
      <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    )
  }

  return (
  <Modal onRequestClose={props.onClose} visible={props.selectedPlace !== null} animationType="slide">
    <View style={styles.modalContent}>
      {modalContent}
      <View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={props.onDelete}>
            <Icon name="ios-trash" size={30} color="red" />
          </TouchableOpacity>
        </View>
        <Button title={'fechar'} onPress={props.onClose}/>
      </View>
    </View>
  </Modal>
  )
};

const styles = StyleSheet.create({
  modalContent: {
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

export default placeDetail;