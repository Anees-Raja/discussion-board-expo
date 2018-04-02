import React, { Component } from 'react';
import { Container } from 'native-base';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

import CardContainer from '../components/Card'
export default class FeedScreen extends Component {
  render() {
    return (
      <Container>
        <CardContainer />
      </Container>
    );
  }
}
