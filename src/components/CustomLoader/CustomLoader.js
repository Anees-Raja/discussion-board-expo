import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Content, Icon, Body } from 'native-base'

export default class CustomLoader extends Component {
  render() {
    const { isLoading } = this.props
    return(
      <Body style={styles.body}>
        {
          isLoading ?
          <Icon name='pulse' style={styles.icon} /> :
          <Icon name='checkmark' style={styles.icon} />
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
    color: '#FFFFFF'
  }
})