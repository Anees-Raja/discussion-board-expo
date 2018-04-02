import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Content, Text } from 'native-base';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import CustomLoaderContainer from '../components/CustomLoader';

export default class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomLoaderContainer />
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
  }
});
