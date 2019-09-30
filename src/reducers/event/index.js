/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:39
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-15 08:42:57
 */
import {combineReducers} from 'redux';
import list from './list'
import detail from './detail'
import success from './success'

export default combineReducers({
  detail,
  list,
  success,
})
