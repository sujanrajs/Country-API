import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Country from './pages/Country/Country'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country" component={Country} />
  </Switch>
)

export default Routes
