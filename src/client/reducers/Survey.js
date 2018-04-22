import * as SurveyActions from '../actions/Survey'

export function SurveyListReducer(state = [], action) {
  switch (action.type) {
    case SurveyActions.GET_SURVEYS_SUCCESS: {
      return action.survey.data;
    }

    default:
      return state
  }
}

const survey = (state, action) => {
  if (state._id != (action._id || action.survey._id)) {
    return state;
  }

  switch (action.type) {
    default: {
      return state;
    }
  }
}
