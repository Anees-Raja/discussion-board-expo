import React, { Component } from 'react';
import { connect } from 'react-redux';

import CalendarList from './CalendarList'

const CalendarListContainer = (props) => {
  return(
    <CalendarList 
    events={props.events}
    />
  )
}

const mapStateToProps = (state) => ({
  events: state.data.events
})

export default connect(mapStateToProps)(CalendarListContainer)