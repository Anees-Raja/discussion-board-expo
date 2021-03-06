import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';

import AppIndex from './src'
import { Container } from 'native-base';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    await Expo.Asset.loadAsync([
      require('./assets/images/blur-background10.jpg'),
      require('./assets/images/blur-background13.jpg'),
      require('./assets/images/blur-background08.jpg'),
      require('./assets/images/blur-background09.jpg'),
    ]),
    this.setState({ isReady: true });
  }
  render() {
    return (
      <Container>
        {this.state.isReady &&<AppIndex />}
      </Container>
    );
  }
}
