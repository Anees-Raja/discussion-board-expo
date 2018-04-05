import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Content, Icon, Body, Spinner } from 'native-base'

export default class CustomLoader extends Component {
  render() {
    const { isLoading } = this.props
    return(
      <Body style={styles.body}>
        {
          isLoading ?
          <Spinner color="#FFFFFF" /> :
          <Icon name='checkmark-circle' style={styles.icon} large />
        }
      </Body>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 50,
  }
})