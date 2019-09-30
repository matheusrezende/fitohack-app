/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 15:52:48
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-08-10 15:52:48
 */
import {combineReducers} from 'redux'

import auth from './auth'
import favorites from './favorites'
import noAuth from './noAuth';
import profile from './profile'

export default combineReducers({
  auth,
  profile,
  favorites,
  noAuth,
})
