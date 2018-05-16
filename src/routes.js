import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './components/signup'
import Nav from './nav'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Nav} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  </Router>
);

export default Routes;
