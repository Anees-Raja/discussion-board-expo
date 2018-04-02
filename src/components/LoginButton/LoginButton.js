import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'native-base'
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'

export default class LoginButton extends Component {
  render() {
    return(
      <TouchableOpacity style={styles.button} onPress={this.props.login} >
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 75,
    backgroundColor: '#985E6D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 20
  }
})