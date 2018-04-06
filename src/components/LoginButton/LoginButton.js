import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { Google } from 'expo'

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
        <Icon name='logo-google' />
        <Text style={styles.text}>Login</Text>
        <Icon name='arrow-round-forward' />
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 160,
    height: 40,
  },
  text: {
    color: '#ffffff',
  }
})