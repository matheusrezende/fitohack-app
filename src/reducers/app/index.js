import {combineReducers} from 'redux';

import error from './error';
import loading from './loading';
import success from './success';

export default combineReducers({error, loading, success})
