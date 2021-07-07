import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Total from '../pages/total'

const Routes: React.FC = () => (
  <Switch>
    <Route  path="/" exact component={Home} />
    <Route  path="/total" component={Total} />
  
  </Switch>
);

export default Routes;
