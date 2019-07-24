import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput  } from 'react-native-paper';
import { Button, Text } from 'native-base';
import BackgroundImage from '../../assets/download.jpg';

class AuthScreen extends Component {
  constructor (props) {
    super(props)
    Dimensions.addEventListener("change", (dims) => {
      this.setState({
        respStyles: {
          direction: Dimensions.get("window").height > 500 ? "column" : "row",
          justifyContent: Dimensions.get("window").height > 500 ? "flex-start" : "space-between",
          width: Dimensions.get("window").height > 500 ? "100%" : "45%"
        }
      });
    });
  }

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
    respStyles: {
      direction:  "column",
      justifyContent: "flex-start",
      width: "100%"
    }
  };

  loginHandler = () => {
    this.props.navigation.navigate('Screen');
  }

  render() {
    let headingText = null;

    if (Dimensions.get("window").height > 500) {
      headingText = <Text style={styles.textHeading}>Por favor, faça login!</Text>;
    }


    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}> 
      <View style={styles.container}>
          {headingText}
          <View style={styles.inputContainer}>
            <TextInput
              mode='flat'
              label='Email'
              selectionColor="gray"
              style={styles.input}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <View style={{
              flexDirection: this.state.respStyles.direction,
              justifyContent: this.state.respStyles.justifyContent,
            }}>
              <View style={{width: this.state.respStyles.width}}>
                <TextInput
                  mode='flat'
                  label='Senha'
                  style={styles.input}
                  value={this.state.senha}
                  onChangeText={senha => this.setState({ senha })}
                />
              </View>
              <View style={{width: this.state.respStyles.width}}>
                <TextInput
                  mode='flat'
                  label='Confirmar senha'
                  style={styles.input}
                  value={this.state.senha2}
                  onChangeText={senha2 => this.setState({ senha2 })}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity >
          <Button primary onPress={this.loginHandler}> 
            <Text>Login</Text>
          </Button>
          </TouchableOpacity>    
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
  },
});

export default AuthScreen;