import React, { Component } from 'react';
import { Grid, Button, Text, Row } from 'native-base';
import { StyleSheet } from 'react-native';

import CardContainer from '../components/Card'
export default class FeedScreen extends Component {
  render() {
    return (
      <Grid style={styles.container}>
        <Row style={styles.cardRow} size={75} >
          <CardContainer />
        </Row>
        <Row style={styles.buttonRow} size={25} >
          <Button style={styles.button} onPress={() => this.props.navigation.navigate('FormEntry')} >
            <Text>ADD A POST</Text>
          </Button>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8EAEBD'
  },
  cardRow: {
    paddingBottom: 10,
    paddingTop: 10
  },
  button: {},
  buttonRow: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})