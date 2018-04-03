import React, { Component } from 'react';
import { Grid, Button, Text, Row } from 'native-base';
import { StyleSheet } from 'react-native';

import CardContainer from '../components/Card'
export default class FeedScreen extends Component {
  render() {
    return (
      <Grid style={styles.container}>
        <Row style={styles.cardRow}>
          <CardContainer />
        </Row>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('FormEntry')} >
          <Text>ADD A POST</Text>
        </Button>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8EAEBD'
  },
  cardRow: {
    padding: 10
  },
  button: {
    alignSelf: 'center'
  }
})