import { createStore } from 'redux';
import todoApp from './reducers';

const logger = (store) => (next) => {
  if (!window.console.group) {
    return next;
  }

  return (action) => {
    window.console.group(action.type);
    window.console.log('%c prev state', 'color: gray', store.getState());
    window.console.log('%c action', 'color: blue', action);
    const returnValue = next(action);
    window.console.log('%c next value', 'color: green', store.getState());
    window.console.groupEnd(action.type);
    return returnValue;
  };
};

const promise = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action);
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware => 
    store.dispatch = middleware(store)(store.dispatch)
  );
};

const configureStore = () => {

  const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }
  
  wrapDispatchWithMiddlewares(store, middlewares);

  return store;
};

export default configureStore;
