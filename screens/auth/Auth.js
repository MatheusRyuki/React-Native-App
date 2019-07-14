import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, TextInput  } from 'react-native-paper';

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
      <View style={styles.container}>
        <Text>Por favor, faça login!</Text>
        <Button mode="contained">
          Mudar para Login
        </Button>
        <View style={styles.inputContainer}>
          <TextInput
            mode='outlined'
            label='Email'
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            mode='outlined'
            label='Senha'
            style={styles.input}
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
          />
          <TextInput
            mode='outlined'
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    width: '100%'
  },
  inputContainer: {
    width: '80%'
  }
});

export default AuthScreen;