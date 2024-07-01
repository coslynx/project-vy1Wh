import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import projectReducer from '../reducers/projectReducer';

const rootReducer = combineReducers({
  project: projectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;