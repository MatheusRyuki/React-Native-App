import React, { Component } from 'react'
import { View, Image } from 'react-native';
import { Buttton } from 'react-native-paper';
import BackgroundImage from '../../assets/download.jpg';

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.placeholder}>
          <Image source={BackgroundImage} style={styles.imagem}></Image>
        </View>
        <View style={styles.button}> 
          <Button icon="add-a-photo" mode="contained">Escolha uma Imagem</Button>
        </View>
        </View>
    )
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
    width: '100%'
  },
  imagem: {
    width: '100%',
    height: '100%',
  }
});

export default PickImage;