import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Text, Button, Icon } from 'native-base';

export default class PostForm extends Component {
  render() {
    return(
      <Content padder>
        <Text>Event</Text>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item>
            <Button onPress={() => this.props.navigation.goBack()} block >
              <Icon name="close-circle" />
            </Button>
          </Item>
        </Form>
      </Content>
    )
  }
}