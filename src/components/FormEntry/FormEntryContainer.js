import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormEntry from './FormEntry'
import { getFormType } from '../../actions/form_actions'

const FormEntryContainer = (props) => {
  return (
    <FormEntry 
      getValue={props.getValue}
      selected_value={props.selected_value}
      navigation={props.navigation}
    />
  )
}

const mapStateToProps = (state) => ({
  selected_value: state.form.selected_value
})

const mapDispatchToProps = {
  getFormType
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEntryContainer)