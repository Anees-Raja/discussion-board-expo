import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomLoader from './CustomLoader'

const CustomLoaderContainer = (props) => {
  return (
    <CustomLoader 
      isLoading={props.isLoading}
    />
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.qol.isLoading
})

export default connect(mapStateToProps)(CustomLoaderContainer)