import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import todoApp from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {


  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    todoApp,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default configureStore;
