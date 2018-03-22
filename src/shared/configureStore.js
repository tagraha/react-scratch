import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Logger with default options
import logger from 'redux-logger';

import repos from './../../redux/repos';

const reducer = combineReducers({
  repos,
});

const configureStore = preloadedState =>
  createStore(reducer, preloadedState, applyMiddleware(
    logger,
    thunk,
  ));

export default configureStore;
