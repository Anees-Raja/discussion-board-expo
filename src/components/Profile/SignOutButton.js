import React, { Component } from 'react';
import { Button, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { signOut } from '../../actions/auth_actions';

class SignOutButton extends Component {
  constructor() {
    super()

    this.handlePress = () => {
      this.props.signOut()
    }
  }
  render() {
    let { currentUser } = this.props
    return(
      <Button onPress={() =>  this.handlePress()} danger iconRight >
        <Text>Sign Out</Text>
        <Icon name='exclamation' type='SimpleLineIcons' />
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent'
  }
})

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
})

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton)