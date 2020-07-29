import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App';
import VideoRegister from './pages/register/video';
import NotFound from './pages/404';
import CategoryRegister from './pages/register/category';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register/video" component={VideoRegister} exact />
          <Route path="/register/category" component={CategoryRegister} exact />
          <Route component={NotFound} />
      </Switch>
  </Router>,
  document.getElementById('root')
);
