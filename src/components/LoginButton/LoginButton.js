import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
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
    width: 100,
    height: 30,
    backgroundColor: '#cc9e35',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  }
})