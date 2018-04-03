import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import EventForm from './EventForm'
import ActivityForm from './ActivityForm'
import AnnouncementForm from './AnnouncementForm'

import { cancel } from '../../actions/form_actions'

const PostFormContainer = (props) => {
  const { formType, navigation, cancel } = props
  return(
    <Container>
      {
        formType === 'event' ?
        <EventForm 
        navigation={navigation}
        cancel={cancel}
        /> : null    
      }
      {
        formType === 'activity' ?
        <ActivityForm 
        navigation={navigation}
        cancel={cancel}
        /> : null    
      }
      {
        formType === 'announcement' ?
        <AnnouncementForm
        navigation={navigation}
        cancel={cancel}
        /> : null    
      }
    </Container>
  )
}

const mapStateToProps = (state) => ({
  formType: state.form.formType
})

const mapDispatchToProps = () => ({
  cancel
})

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)