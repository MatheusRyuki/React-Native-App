import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  loginHandler = () => {
    this.props.navigation.navigate('Screen');
  }

  render() {
    return (
      <View>
        <Text>Tela de Autentificação</Text>
        <Button title="Login" onPress={this.loginHandler}/>
      </View>
    )
  }
}

export default AuthScreen;