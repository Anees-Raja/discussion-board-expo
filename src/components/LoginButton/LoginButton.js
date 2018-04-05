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

    this._handleGoogleLogin = async () => {
      try {
        const data = await Google.logInAsync({
          androidClientId: '498987946235-bm1l6kv2a78j5nsg6m16q1r2e2hbckql.apps.googleusercontent.com',
          iosClientId: '498987946235-qh6v4ob61d2oakfrdke232b4oc3ck1n0.apps.googleusercontent.com',
          webClientId: '498987946235-g6helpupvb0om1cgt1d31tq2rv1o9i56.apps.googleusercontent.com',
          behavior: 'system',
          scopes: ['profile', 'email']
        });
  
        switch (data.type) {
          case 'success': {
            console.log(data)
            Alert.alert(
              'Logged in!',
              `Hi ${data.user.name}!`,
            );
            break;
          }
          case 'cancel': {
            Alert.alert(
              'Cancelled!',
              'Login was cancelled!',
            );
            break;
          }
          default: {
            Alert.alert(
              'Oops!',
              'Login failed!',
            );
          }
        }
      } catch (e) {
        Alert.alert(
          'Oops!',
          'Login failed!',
        );
      }
    };

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