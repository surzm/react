import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App.jsx'
import IndexPage from './pages/IndexPage.jsx'
import AboutPage from './pages/AboutPage.jsx';
import AdminPage from './pages/AdminPage.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={IndexPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/admin' component={AdminPage} />
    </Route>
  </Router>,
  document.getElementById('main')
);
