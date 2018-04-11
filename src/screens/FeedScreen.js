import React, { Component } from 'react';
import { Grid, Button, Text, Row, Spinner, Icon, Container, View, Fab } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import CustomHeader from '../components/CustomHeaderMain'
import CardContainer from '../components/Card'
import FormEntryContainer from '../components/FormEntry';

class FeedScreen extends Component {
  render() {
    const { isAdmin } = this.props.currentUser
    const { data } = this.props
    const rowSize = isAdmin ? 90 : 100
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <Image style={styles.image} source={require('../../assets/images/blur-background08.jpg')} />
          <CustomHeader navigation={this.props.navigation} />
          <Grid style={styles.container}>
            {data ? 
            <Row style={styles.cardRow} size={rowSize} >
              <CardContainer />
            </Row> : 
            <Row style={styles.buttonRow} size={rowSize}>
              <Spinner large color='white'  />
            </Row>}
            {isAdmin &&
            <Row style={styles.buttonRow} size={10} >
              <FormEntryContainer navigation={this.props.navigation} />
            </Row>}
          </Grid>
        </View>
      </Container>
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
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardRow: {
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  buttonRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    justifyContent: 'center',
    alignItems: 'center',
  }
})