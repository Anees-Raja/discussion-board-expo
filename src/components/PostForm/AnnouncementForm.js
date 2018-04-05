import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Text, Grid, Row, Button, Icon, Col } from 'native-base';

export default class AnnouncementForm extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      body: ''
    }

    this.handleTitle = (t) => {
      this.props.getTitle(t)
      this.setState({
        title: t
      })
    }

    this.handleBody = (b) => {
      this.props.getBody(b)
      this.setState({
        body: b
      })
    }

    this.handleSubmit = () => {
      let data = {
        type: this.props.formType,
        title: this.props.title,
        body: this.props.body
      }
      if (this.state.title === '' || this.state.body === '') {
        alert('Please fill out form to submit.')
      }else{
        this.props.handleFormSubmit(data)
      }
    }
  }
  render() {
    return(
      <Content padder>
        <Grid>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input onChangeText={(text) => this.handleTitle(text)} />
            </Item>
            <Item floatingLabel last>
              <Label>Body</Label>
              <Input 
              multiline={true}
              numberOfLines={14}
              style={{ height: 400 }}
              onChangeText={(text) => this.handleBody(text)}
              />
            </Item>
          </Form>
          <Row style={styles.buttonRow} size={25}>
            <Col>
              <Button onPress={() => this.props.navigation.goBack()} danger >
                <Icon name="close-circle" />
              </Button>
            </Col>
            <Col>
              <Button onPress={() => this.handleSubmit()} success >
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
    padding: 50,
    paddingLeft: 100
  }
})