import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Platform, Dimensions }  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class placeDetail extends React.Component { 
  state = {
    viewMode: "portrait"
  }

  constructor (props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles)
  }

  updateStyles = dims => {
    this.setState({viewMode: dims.window.height > 500 ? "portrait" : "landscape"})
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  };

  render () {
  const selectedPlace = this.props.navigation.state.params;
  
  const placeDeletedHandler = () => {
    this.props.onDeletePlace(selectedPlace.selectedPlace.key);
    this.props.navigation.pop();
  };

  return (
    <View style={[styles.container, this.state.viewMode === "portrait" ? styles.portraitContainer : styles.landscapeContainer]}>
      <View style={styles.subContainer}>
         <Image source={selectedPlace.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{selectedPlace.selectedPlace.name}</Text>
        <View style={styles.icon}>
          <TouchableOpacity onPress={placeDeletedHandler}>
            <Icon name={Platform.OS === 'android' ? "md-trash" : "ios-trash"} size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View> 
    </View>
  )
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1,
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row",
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
  subContainer: {
    flex: 1,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(actions.deletePlace(key)),
  };
};


export default connect(null, mapDispatchToProps)(placeDetail);