import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Components
import Landing from './Pages/Landing/Landing.js';

// Routes for url linking components(pages)
export default (
    <Router>
        <Switch>
            <Route component={Landing} exact path='/' />
            {/* <Route component={Page2} exact path='/page2' /> */}
            
        </Switch>
    </Router>
)
