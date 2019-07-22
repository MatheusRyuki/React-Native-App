import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from 'react-navigation-drawer';
import BackgroundImage from '../../assets/download.jpg';

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
      <ScrollView>
        <View style={styles.container}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Compartilhe um lugar conosco!</Text>
        <View style={styles.placeholder}>
          <Image source={BackgroundImage} style={styles.imagem}></Image>
        </View>
        <View style={styles.button}> 
          <Button icon="add-a-photo" mode="contained">Escolha uma Imagem</Button>
        </View>
        <View style={styles.placeholder}><Text>Mapa</Text></View>
        <View style={styles.button}> 
          <Button mode="contained" icon="location-on">Me localize</Button>
        </View>
        <View style={styles.inputContainer}> 
        <TextInput
              mode='flat'
              label='Nome do Lugar'
              style={{margin: 8, width: "100%"}}
              selectionColor="gray"
            />
            </View>
            <View style={styles.button}> 
            <Button mode="contained" icon="share">Compartilhe!</Button>
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