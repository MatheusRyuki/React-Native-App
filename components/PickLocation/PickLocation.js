import React, { Component } from 'react'
import { View } from 'react-native'.
import { Buttton, Text } from 'react-native-paper';

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.placeholder}><Text>Mapa</Text></View>
        <View style={styles.button}> 
          <Button mode="contained" icon="location-on">Me localize</Button>
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

export default PickLocation;