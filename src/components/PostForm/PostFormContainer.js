import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import EventForm from './EventForm'
import ActivityForm from './ActivityForm'
import AnnouncementForm from './AnnouncementForm'

import { cancel, getTitle, getBody, getMedia, getEventDate, openDatePicker, closeDatePicker, handleFormSubmit } from '../../actions/form_actions'

const PostFormContainer = (props) => {
  return(
    <Container>
      {
        props.formType === 'event' ?
        <EventForm
        formType={props.formType} 
        navigation={props.navigation}
        cancel={props.cancel}
        getTitle={props.getTitle}
        getBody={props.getBody}
        getMedia={props.getMedia}
        getEventDate={props.getEventDate}
        openDatePicker={props.openDatePicker}
        closeDatePicker={props.closeDatePicker}
        showDatePicker={props.showDatePicker}
        title={props.title}
        body={props.body}
        media={props.media}
        event_date={props.event_date}
        handleFormSubmit={props.handleFormSubmit}
        /> : null    
      }
      {
        props.formType === 'activity' ?
        <ActivityForm
        formType={props.formType} 
        navigation={props.navigation}
        cancel={props.cancel}
        getTitle={props.getTitle}
        getBody={props.getBody}
        getMedia={props.getMedia}
        getEventDate={props.getEventDate}
        openDatePicker={props.openDatePicker}
        closeDatePicker={props.closeDatePicker}
        showDatePicker={props.showDatePicker}
        title={props.title}
        body={props.body}
        media={props.media}
        event_date={props.event_date}
        handleFormSubmit={props.handleFormSubmit}
        /> : null    
      }
      {
        props.formType === 'announcement' ?
        <AnnouncementForm
        formType={props.formType}
        navigation={props.navigation}
        cancel={props.cancel}
        getTitle={props.getTitle}
        getBody={props.getBody}
        title={props.title}
        body={props.body}
        handleFormSubmit={props.handleFormSubmit}
        /> : null    
      }
    </Container>
  )
}

const mapStateToProps = (state) => ({
  formType: state.form.formType,
  title: state.form.title,
  body: state.form.body,
  media: state.form.media,
  event_date: state.form.event_date,
  showDatePicker: state.form.showDatePicker
})

const mapDispatchToProps = {
  cancel,
  getTitle,
  getBody,
  getMedia,
  getEventDate,
  openDatePicker,
  closeDatePicker,
  handleFormSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)