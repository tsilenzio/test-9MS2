import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import SurveyRow from './SurveyRow'

const SurveyForm = (props) => {
  return (
    <Form>
      {props.surveys.map(s => {
        return <SurveyRow
          survey={s}
          key={s.id}
        />
      })}
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default SurveyForm;
