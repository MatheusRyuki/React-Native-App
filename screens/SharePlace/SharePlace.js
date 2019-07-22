import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation-drawer';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import PlaceInput from '../../components/PlaceInput/PlaceInput';

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

state = {
  placeName: ""
}

placeNameChangeHandler = placeName => {
  this.setState({placeName})
}

placeAddedHandler = () => {
  if(this.state.placeName.trim() !== "") {
    this.props.onAddPlace(this.state.placeName);
  }
}

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Compartilhe um lugar conosco!</Text>
        <PickImage />
        <PickLocation />
        <View style={styles.inputContainer}> 
        <PlaceInput
          placeName={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
            />
            </View>
            <View style={styles.button}> 
            <Button mode="contained" icon="share" onPress={this.placeAddedHandler}>Compartilhe!</Button>
            </View>
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: "#eee",
    width: '80%',
    height: 150,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    width: '80%'
  },
  button: {
    margin: 8
  },
  imagem: {
    width: '100%',
    height: '100%',
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(actions.addPlace(placeName)),
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);