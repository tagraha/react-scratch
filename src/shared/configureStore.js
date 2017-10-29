import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import news from './../../redux/news'

const configureStore = preloadedState =>
  createStore(news, preloadedState, applyMiddleware(thunk));

export default configureStore;