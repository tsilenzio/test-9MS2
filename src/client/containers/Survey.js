import React, { Component } from 'react';
import * as SurveyActions from '../actions/Survey'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SurveyForm from '../components/Survey/SurveyForm';

export class SurveyContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="survey-container">
        <SurveyForm
          surveys={this.props.surveys}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    surveys: state.surveys
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SurveyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
