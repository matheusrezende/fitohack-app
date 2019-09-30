/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 14:35:32
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:32:11
 */
import {combineReducers} from 'redux'
import {reducer as reduxFormReducer} from 'redux-form'

import {SIGNOUT} from '../constants/Actions';
import app from './app';
import category from './category'
import event from './event'
import location from './location'
import user from './user';

const appReducer = combineReducers({
  user,
  form: reduxFormReducer,
  app,
  event,
  location,
  category,
})


export default (state, action) => {
  if (action.type === SIGNOUT) {
    state = {location: state.location} //eslint-disable-line
  }
  
  return appReducer(state, action)
}
