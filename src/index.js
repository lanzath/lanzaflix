import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App';
import VideoRegister from './pages/register/video';
import NotFound from './pages/404';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register/video" component={VideoRegister} />
          <Route component={NotFound} />
      </Switch>
  </Router>,
  document.getElementById('root')
);
