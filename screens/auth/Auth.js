import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button, TextInput  } from 'react-native-paper';
import BackgroundImage from '../../assets/download.jpg';

class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    email: '',
    senha: '',
    senha2: '',
  };

  loginHandler = () => {
    this.props.navigation.navigate('Screen');
  }

  render() {
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}> 
      <View style={styles.container}>
          <Text style={styles.textHeading}>Por favor, faça login!</Text>
          <Button mode="contained">
            Mudar para Login
          </Button>
          <View style={styles.inputContainer}>
            <TextInput
              mode='flat'
              label='Email'
              selectionColor="gray"
              style={styles.input}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              mode='flat'
              label='Senha'
              style={styles.input}
              value={this.state.senha}
              onChangeText={senha => this.setState({ senha })}
            />
            <TextInput
              mode='flat'
              label='Confirmar senha'
              style={styles.input}
              value={this.state.senha2}
              onChangeText={senha2 => this.setState({ senha2 })}
            />
          </View>
          <Button mode="contained" onPress={this.loginHandler}>
            Login
          </Button>
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
  },
  input: {
    width: '100%',
    margin: 8,
    backgroundColor: 'white'
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  inputContainer: {
    width: '80%'
  }
});

export default AuthScreen;