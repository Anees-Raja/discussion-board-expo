import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Picker, Form, Item as FormItem, Text, Right, Left, Row, Icon, View, Fab } from "native-base";

const Item = Picker.Item;

export default class FormEntry extends Component {
  constructor() {
    super()

    this.state = {
      selected: null,
      active: false,
    }

    this.onValueChange = (val) => {
      this.props.getFormType(val)
      this.setState({
        selected: val
      })
      this.checkValandGo()
    }

    this.checkValandGo = () => {
      if(this.state.selected != ''){
        this.props.navigation.navigate('PostForm')
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => this.setState({ active: !this.state.active })}>
        <Icon name='note' type='SimpleLineIcons' />
        <Button onPress={() => this.onValueChange('event')} style={{ backgroundColor: '#34A34F' }}>
          <Icon name='event' type='SimpleLineIcons' />
        </Button>
        <Button onPress={() => this.onValueChange('announcement')} style={{ backgroundColor: '#3B5998' }}>
          <Icon name='megaphone' type='Entypo' />
        </Button>
        <Button onPress={() => this.onValueChange('activity')} style={{ backgroundColor: '#DD5144' }}>
          <Icon name="energy" type='SimpleLineIcons' />
        </Button>
      </Fab>
    </View>
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