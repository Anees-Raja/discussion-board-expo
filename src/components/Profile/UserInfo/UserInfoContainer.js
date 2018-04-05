import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserInfo from './UserInfo'

const UserInfoContainer = (props) => {
  return(
    <UserInfo
      user={props.user}
    />
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser
})

export default connect(mapStateToProps)(UserInfoContainer)