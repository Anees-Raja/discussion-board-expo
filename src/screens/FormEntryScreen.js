import React, { Component } from 'react';
import { Container } from 'native-base'
import FormEntryContainer from '../components/FormEntry'

export default class FormEntryScreen extends Component {
  render() {
    return (
    <Container>
      <FormEntryContainer navigation={this.props.navigation} />
    </Container>
    );
  }
}