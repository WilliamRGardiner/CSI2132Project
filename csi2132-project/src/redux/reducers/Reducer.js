import { combineReducers } from 'redux';
import TestReducer from './TestReducer';

export default (state, action) => {
  return {
    value: TestReducer(state, action)
  };
};
