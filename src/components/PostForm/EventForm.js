import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Text, Button, Icon, Grid, Row, Col } from 'native-base';

export default class EventForm extends Component {
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

    this.handleDate = (d) => {
      this.props.getEventDate(d)
      this.props.closeDatePicker()
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
    console.log(this.state)
    return(
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input onChangeText={(text) => this.handleTitle(text)} />
          </Item>
          <Item floatingLabel>
            <Label>Details</Label>
            <Input 
            multiline={true}
            numberOfLines={5}
            style={{ height: 200 }}
            onChangeText={(text) => this.handleBody(text)}
            />
          </Item>
        </Form>
        <Grid>
          <Row style={styles.buttonRow} size={1}>
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
            <Col>
              <Button >
                <Icon name="calendar" />
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
    paddingLeft: 80
  }
})