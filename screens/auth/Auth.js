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
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
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
    viewMode:  Dimensions.get("window").height > 500 ? "portrait" : "landscape",
  };

  loginHandler = () => {
    this.props.navigation.navigate('Screen');
  }

  render() {
    let headingText = null;

    if (this.state.viewMode === 'portrait') {
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
            <View style={this.state.viewMode === 'portrait'
             ? styles.portraitContainer 
             : styles.landscapeContainer}>
              <View style={this.state.viewMode === 'portrait'
             ? styles.portraitWrapper 
             : styles.landscapeWrapper}>
                <TextInput
                  mode='flat'
                  label='Senha'
                  style={styles.input}
                  value={this.state.senha}
                  onChangeText={senha => this.setState({ senha })}
                />
              </View>
              <View style={this.state.viewMode === 'portrait'
               ? styles.portraitWrapper
                : styles.landscapeWrapper}>
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
  portraitContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapeContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitWrapper: {
    width: "100%"
  },
  landscapeWrapper: {
    width: "45%"
  }
});

export default AuthScreen;