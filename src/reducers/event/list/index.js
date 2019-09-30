/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:15
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 08:36:36
 */
import {combineReducers} from 'redux';
import near from './near'
import upcoming from './upcoming'
import search from './search'
import own from './own'
import categorySearch from './categorySearch'
import similar from './similarEvents'
import favorites from './favorites'

export default combineReducers({
  near,
  upcoming,
  search,
  own,
  similar,
  categorySearch,
  favorites,
})
