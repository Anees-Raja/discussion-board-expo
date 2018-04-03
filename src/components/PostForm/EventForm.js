import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Text, Button, Icon, Grid, Row, Col } from 'native-base';

export default class EventForm extends Component {
  render() {
    return(
      <Content padder>
        <Grid>
            <Form>
              <Item floatingLabel>
                <Label>Title</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Event Date</Label>
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
          <Row style={styles.buttonRow} size={25}>
            <Col>
              <Button onPress={() => this.props.navigation.goBack()} block danger >
                <Icon name="close-circle" />
              </Button>
            </Col>
            <Col>
              <Button onPress={() => this.props.navigation.goBack()} block success >
                <Icon name="checkmark" />
              </Button>
            </Col>
          </Row>
        </Grid>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  }
})