import { createStore } from 'redux';
import todoApp from './reducers';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!window.console.group) {
    return rawDispatch;
  }

  return (action) => {
    window.console.group(action.type);
    window.console.log('%c prev state', 'color: gray', store.getState());
    window.console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    window.console.log('%c next value', 'color: green', store.getState());
    window.console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {

  const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  return store;
};

export default configureStore;
