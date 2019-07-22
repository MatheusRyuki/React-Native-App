import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

class PlaceInput extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
      <TextInput
      label="Nome do Local"
      value={this.props.placeName}
      style={styles.input}
      onChangeText={this.props.onChangeText}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  input: {
    width: "100%"
  }, 
});

export default PlaceInput;