import { combineReducers } from 'redux'
import { SurveyListReducer } from './Survey'

const rootReducer = combineReducers({
  surveys: SurveyListReducer
})

export default rootReducer
