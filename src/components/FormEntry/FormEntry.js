import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Picker, Form, Item as FormItem, Text, Right, Left, Row, Icon } from "native-base";

const Item = Picker.Item;

export default class FormEntry extends Component {
  constructor() {
    super()

    this.state = {
      selected: ''
    }

    this.onValueChange = (val) => {
      this.props.getFormType(val)
      this.setState({
        selected: val
      })
    }

    this.checkValandGo = () => {
      if(this.state.selected != ''){
        this.props.navigation.navigate('PostForm')
      }else{
        alert('Please choose form type to continue!')
      }
    }
  }

  render() {
    return (
      <Form>
        <Picker
          mode="dropdown"
          selectedValue={this.state.selected}
          onValueChange={(val) => this.onValueChange(val)}
        >
          <Item label="Choose Form Type..." value="" />
          <Item label="Announcement" value="announcement" />
          <Item label="Event" value="event" />
          <Item label="Activity" value="activity" />
        </Picker>
        <Row style={styles.buttonContainer}>
          <Left>
            <Button iconLeft style={styles.button} onPress={() => this.props.navigation.goBack()} bordered danger >
              <Icon name='arrow-forward' />
              <Text style={styles.buttonText}>Back</Text>
            </Button>
          </Left>
          <Right>
            <Button iconRight style={styles.button} onPress={() => this.checkValandGo()} bordered success >
              <Icon name='arrow-back' />
              <Text style={styles.buttonText}>Next</Text>
            </Button>
          </Right>
        </Row>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#30415D'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 10,
  }
});