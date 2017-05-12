import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';

const history = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/:filter" component={App} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;


