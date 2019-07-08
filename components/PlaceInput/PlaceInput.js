import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: '',
  }

  placeNameChangeHandler = placeName => {
    this.setState({placeName})
  }

  render() {
    return (
      <View style={styles.inputContainer}>
      <TextInput
      placeholder="Um lugar bom"
      value={this.state.placeName}
      style={styles.input}
      onChangeText={this.placeNameChangeHandler}/>
      <Button style={styles.button} title={'Adicionar'} onPress={() => this.props.submitHandler(this.state.placeName)}/>
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
    width: "70%"
  }, 
  button: {
    width: "30%"
  },
});

export default PlaceInput;