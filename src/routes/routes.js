import React from 'react';
import { Router, Route } from "react-router-dom";
import Home from '../containers/Home';
import history from './history';

function Routes() {
  return (   
     <Router history={history}>               
         <Route  path="/" component={Home} />      
     </Router>
  );
}

export default Routes;


