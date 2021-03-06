import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/**
 *  Layouts
 */

import MainLayout from './components/layouts/main-layout'

/**
 *  Pages
 */

import Home from './components/home'
import SignupContainer from './components/containers/signup-container'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
    </Route>

    <Route path="/signup" component={SignupContainer} />

  </Router>
)
