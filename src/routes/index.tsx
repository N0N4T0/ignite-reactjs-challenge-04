import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes : React.FC = () => (
  <Router>
    <Route path="/"> {Dashboard} </Route> 
  </Router>
  
);

export default Routes;