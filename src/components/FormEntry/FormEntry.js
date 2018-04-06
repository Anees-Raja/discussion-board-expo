import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Button, Picker, Form, Item as FormItem, Text, Right, Left } from "native-base";

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
        <Content padder>
          <Right>
            <Button style={styles.button} onPress={() => this.checkValandGo()} block transparent >
              <Text style={styles.buttonText} >Next</Text>
            </Button>
          </Right>
          <Left>
            <Button style={styles.button} onPress={() => this.props.navigation.goBack()} block transparent >
              <Text style={styles.buttonText} >Back</Text>
            </Button>
          </Left>
        </Content>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center'
  },
  buttonText: {
    color: '#30415D'
  }
});