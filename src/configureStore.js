import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todoApp from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {

  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    todoApp,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default configureStore;
