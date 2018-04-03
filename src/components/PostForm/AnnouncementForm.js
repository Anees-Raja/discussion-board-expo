import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Text, Grid, Row, Button, Icon, Col } from 'native-base';

export default class AnnouncementForm extends Component {
  render() {
    return(
      <Content padder>
        <Grid>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Body</Label>
              <Input 
              multiline={true}
              numberOfLines={14}
              style={{ height: 400 }}
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
    paddingTop: 10
  }
})