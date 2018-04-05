import React, { Component } from 'react';
import { connect } from 'react-redux'

import Avatar from './Avatar'

const AvatarContainer = (props) => {
  return(
    <Avatar
      avatar={props.avatar}
    />
  )
}

const mapStateToProps = (state) => ({
  avatar: state.auth.currentUser.avatar
})

export default connect(mapStateToProps)(AvatarContainer)