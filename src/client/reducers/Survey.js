import * as SurveyActions from '../actions/Survey'

export function SurveyListReducer(state = [], action) {
  switch (action.type) {
    case SurveyActions.GET_SURVEYS_SUCCESS: {
      return action.surveys.data;
    }

    default:
      return state
  }
}

const survey = (state, action) => {
  if (state.id != (action.id || action.survey.id)) {
    return state;
  }

  switch (action.type) {
    default: {
      return state;
    }
  }
}
