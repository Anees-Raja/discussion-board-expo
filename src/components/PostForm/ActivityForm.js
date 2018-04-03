import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Text, Grid, Row, Button, Icon } from 'native-base';

export default class ActivityForm extends Component {
  render() {
    return(
      <Content padder>
        <Grid>
          <Row>
            <Form>
              <Item floatingLabel>
                <Label>Title</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Details</Label>
                <Input 
                multiline={true}
                numberOfLines={5}
                style={{ height: 200 }}
                />
              </Item>
            </Form>
          </Row>
          <Row>
            <Button onPress={() => this.props.navigation.goBack()} block >
              <Icon name="close-circle" />
            </Button>
          </Row>
        </Grid>
      </Content>
    )
  }
}