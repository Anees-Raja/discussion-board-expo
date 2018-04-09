import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import PostFormContainer from '../components/PostForm'
import { Container, Content } from 'native-base';

export default class PostFormScreen extends Component {
  render() {
    return(
      <Container style={styles.container} >
        <Content padder>
          <PostFormContainer
          navigation={this.props.navigation}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  }
})