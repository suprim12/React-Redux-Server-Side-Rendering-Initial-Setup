import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk];
const initalState = {};

const preloadedState = window.__PRELOADED_STATE__
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;