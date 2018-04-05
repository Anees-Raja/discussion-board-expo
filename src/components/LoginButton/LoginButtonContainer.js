import React, { Component } from 'react';
import  { connect } from 'react-redux'

import LoginButton from './LoginButton'
import { login } from '../../actions/auth_actions'

const LoginButtonContainer = props => {
  return(
    <LoginButton login={props.login} navigation={props.navigation} />
  )
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButtonContainer)