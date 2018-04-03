import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import PostFormContainer from '../components/PostForm'

export default class PostFormScreen extends Component {
  render() {
    return(
      <PostFormContainer
      navigation={this.props.navigation}
      />
    )
  }
}