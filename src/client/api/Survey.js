import { HttpClient } from './httpClient'

// We will move this to .env and use automation to update it
// https://ewqpl1d4wi.execute-api.us-east-1.amazonaws.com/dev/survey
const API = 'https://ewqpl1d4wi.execute-api.us-east-1.amazonaws.com/dev'
const SURVEY_API = `${API}/survey`

const getSurvey = () => {
  return HttpClient.get(SURVEY_API)
}

const SurveyApi = { getSurvey }

export { SurveyApi }
