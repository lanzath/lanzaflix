import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import videoRegister from './pages/register/video';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/" component={App} exact />
          <Route path="/video/register" component={videoRegister} />
      </Switch>
  </Router>,
  document.getElementById('root')
);
