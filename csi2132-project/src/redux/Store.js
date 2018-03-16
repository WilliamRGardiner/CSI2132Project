import { createStore } from 'redux';

import reducer from './reducers/Reducer';
import middleware from './Middleware';

export default createStore(reducer, middleware);
