import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base'
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'

export default class LoginButton extends Component {
  constructor() {
    super()

    this.handlePress = () => {
      this.props.login()
    }
  }

  render() {
    return(
      <Button style={styles.button} onPress={() => this.handlePress()} block danger >
        <Text style={styles.text}>Sign In</Text>
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 200
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Roboto',
  }
})