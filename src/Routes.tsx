import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Country from './pages/Country/Country'
import ErrorPage from './pages/Error/Error'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/country/:name" component={Country} />
    <Route path="*" component={ErrorPage} />
  </Switch>
)

export default Routes
