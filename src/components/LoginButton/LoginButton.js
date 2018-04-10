import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Button, Text, Icon } from 'native-base';
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
      <Button style={styles.button} onPress={() => this.handlePress()} danger iconRight >
        <Text style={styles.text}>Login</Text>
        <Icon style={styles.icon} type='FontAwesome' name='google-plus' />
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
  text: {
    color: '#ffffff',
  },
  icon: {
    color: '#ffffff',
  }
})