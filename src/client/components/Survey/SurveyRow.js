import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react'

class SurveyRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.survey,
      response: ''
    }
  }

  changeResponse = (event) => {
    this.setState({ response: event.target.value })
  }

  render() {
    return (
      <Form.Group>
        <Form.Input
          label={this.props.survey.survey_text}
          width={4}
        />
      </Form.Group>
    )
  }
}

export default SurveyRow;
