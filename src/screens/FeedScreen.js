import React, { Component } from 'react';
import { Grid, Button, Text, Row, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import CardContainer from '../components/Card'

class FeedScreen extends Component {
  render() {
    const { isAdmin } = this.props.currentUser
    const { data } = this.props
    const rowSize = isAdmin ? 90 : 100
    return (
      <Grid style={styles.container}>
        {data ? 
        <Row style={styles.cardRow} size={rowSize} >
          <CardContainer />
        </Row> : 
        <Row style={styles.buttonRow} size={rowSize}>
          <Spinner large />
        </Row>}
        {isAdmin &&
        <Row style={styles.buttonRow} size={10} >
          <Button style={styles.button} onPress={() => this.props.navigation.navigate('FormEntry')} >
            <Text>ADD A POST</Text>
          </Button>
        </Row>}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  data: state.feed.data
})

export default connect(mapStateToProps)(FeedScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18121E',
    paddingTop: 20
  },
  cardRow: {
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  button: {},
  buttonRow: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})