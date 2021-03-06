import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginButtonContainer from '../components/LoginButton/LoginButtonContainer';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButtonContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#031424',
    paddingTop: 20
  }
});
