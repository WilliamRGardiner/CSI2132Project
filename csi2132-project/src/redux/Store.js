import { createStore } from 'redux';

import reducer from './reducers/Reducer';
import initialState from './initialState';
import middleware from './Middleware';

export default createStore(reducer, initialState, middleware);
