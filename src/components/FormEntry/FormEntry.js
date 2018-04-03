import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Button, Icon, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";

const Item = Picker.Item;

export default class FormEntry extends Component {
  constructor() {
    super()

    this.state = {
      selected: ''
    }

    this.onValueChange = (val) => {
      this.props.getValue(val)
      this.setState({
        selected: val
      })
    }
  }

  render() {
    return (
      <Content padder>
        <Form>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selected}
            onValueChange={(val) => this.onValueChange(val)}
          >
            <Item label="Announcement" value="announcement" />
            <Item label="Event" value="event" />
            <Item label="Activity" value="activity" />
          </Picker>
          <Button style={styles.button} onPress={() => this.props.navigation.navigate('PostForm')} block >
            <Icon name="checkmark" style={styles.icon} />
          </Button>
        </Form>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center'
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 25
  }
});