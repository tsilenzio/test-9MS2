import { SurveyApi } from "../api/Survey";

// Surveys is a read only resource
export const GET_SURVEYS = '[Survey] GET_SURVEYS'
export const GET_SURVEYS_SUCCESS = '[Survey] GET_SURVEYS_SUCCESS'
export const GET_SURVEYS_ERROR = '[Survey] GET_SURVEYS_ERROR'

export function GetSurveys() {
  return (dispatch, getState) => {
    return SurveyApi.getSurvey().then(res => {
      dispatch(GetSurveySuccess(res))
    })
  }
}

export function GetSurveySuccess(surveys) {
  return {
    type: GET_SURVEYS_SUCCESS,
    surveys
  }
}
