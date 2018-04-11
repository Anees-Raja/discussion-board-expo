import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Icon, Picker, Item, Text, Button, Spinner, Fab } from "native-base";

export default class FormPicker extends Component {
  constructor() {
    super()
    this.state = {
      selected: ''
    }

    this.setFormType = (val) => {
      this.props.getFormType(val)
      this.setState({ selected: val })
    }

    this.checkValandGo = () => {
      if(this.props.selected != ''){
        this.props.navigation.navigate('PostForm')
      }else{
        alert('Please choose form type to continue!')
      }
    }
  }

  render() {
    return (
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => this.setState({ active: !this.state.active })}>
        <Icon name='note' type='SimpleLineIcons' />
        <Button style={this.setFormType('announcement')}>
          <Icon name='megaphone' type='Entypo' />
        </Button>
        <Button style={this.setFormType('activity')}>
          <Icon name='energy' type='SimpleLineIcons' />
        </Button>
        <Button onPress={this.setFormType('event')} >
          <Icon name='event' type='SimpleLineIcons' />
        </Button>
      </Fab>
    )
  }
}