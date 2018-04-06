import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import FormEntryContainer from '../components/FormEntry'

export default class FormEntryScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <FormEntryContainer navigation={this.props.navigation} />
        </Content>
      </Container>
    );
  }
}

styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})