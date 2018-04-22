import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { configureStore } from '../../store';
import * as SurveyActions from '../../actions/Survey';
import SurveyContainer from '../../containers/Survey';

const store = configureStore()

// Fetch data from backend
// TODO: Request this only when the visitor is a patient
store.dispatch(SurveyActions.GetSurveys())

const App = (props) => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SurveyContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default hot(module)(App);
