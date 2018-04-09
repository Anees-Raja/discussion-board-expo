import React, { Component } from 'react';
import { connect } from 'react-redux';

import CourseList from './CourseList'

const CourseListContainer = (props) => {
  return(
    <CourseList 
    courses={props.courses}
    />
  )
}

const mapStateToProps = (state) => ({
  courses: state.data.courses
})

export default connect(mapStateToProps)(CourseListContainer)