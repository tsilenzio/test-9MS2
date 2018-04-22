import { HttpClient } from './httpClient'

// We will move this to .env and use automation to update it
// https://58elknoe85.execute-api.us-east-1.amazonaws.com/dev/responses
const API = 'https://58elknoe85.execute-api.us-east-1.amazonaws.com/dev'
const SURVEY_API = `${API}/surveys`

const getSurvey = () => {
  return HttpClient.get(SURVEY_API)
}

const SurveyApi = { getSurvey }

export { SurveyApi }
