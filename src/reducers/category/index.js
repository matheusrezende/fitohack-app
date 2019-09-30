/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:35
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-03 18:58:22
 */
import _ from 'lodash'
import {SUCCESS, GET_CATEGORIES} from '../../constants/Actions';
import CategoryEntity from '../../entity/Category.entity';
import {createSelector} from '../../../node_modules/reselect';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== GET_CATEGORIES) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return CategoryEntity.mapObjectList(payload)

    default:
      return state
  }
}

export const categoryListSelector = (state) => state.category

export const categoryArraySelector = createSelector(
  categoryListSelector,
  (categories) => {
    const categoriesList = _.map(categories, (value) => value)
    const others = categoriesList.pop()
  
    const sorted = categoriesList.filter((item) => item.title !== 'Other').sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    })
    return [...sorted, others]
  
  },
)
