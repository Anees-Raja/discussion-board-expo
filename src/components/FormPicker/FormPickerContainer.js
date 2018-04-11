import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormPicker from './FormPicker';
import { getFormType } from '../../actions/form_actions';

const FormPickerContainer = (props) => {
  return(
    <FormPicker 
      selected_value={props.selected_value}
      getFormType={props.getFormType}
      navigation={props.navigation}
    />
  )
}

mapStateToProps = (state) => ({
  formType: state.form.selected_value
})

const mapDispatchToProps = {
  getFormType
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPickerContainer)