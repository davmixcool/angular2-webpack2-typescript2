import { combineReducers } from 'redux';

// Plugin to sync to local storage - whoa! Magic!
const persistState = require('redux-localstorage');


// Reducers
import { counterReducer } from './reducers/counter.reducer';


// This is our data structure interface
export interface IAppState {
  counter?: number;
};


// This is the total application state, created by combining all reducers
export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer
});

// Redux plugins configurations
// Here we configure how local storage should be saved
export const enhancers = [
  persistState('counter', { key: 'redux-fucking-rocks' })
];