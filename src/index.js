import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/" component={App} exact />
      </Switch>
  </Router>,
  document.getElementById('root')
);
