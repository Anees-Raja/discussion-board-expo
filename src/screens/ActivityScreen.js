import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import CalendarListContainer from '../components/CalendarList';

export default class ActivityScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CalendarListContainer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});
