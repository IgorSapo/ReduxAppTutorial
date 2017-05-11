import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

// window.console.dir(store.getState());

render(
  <Root store={store}/>,
  document.getElementById('root')
);
