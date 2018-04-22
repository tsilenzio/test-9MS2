import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { configureStore } from '../../store'

const store = configureStore()

const App = (props) => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Switch>
          {/* TODO: create SurveyContainer */}
          {/*<Route path="/" component={SurveyContainer} />*/}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default hot(module)(App);
