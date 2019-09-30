/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:19
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-10 08:51:44
 */
import _ from 'lodash'
import {SUCCESS, CATEGORY_SEARCH, CLEAR} from '../../../constants/Actions';
import EventEntity from '../../../entity/Event.entity';
import {createSelector} from '../../../../node_modules/reselect';
import {formatEventForCardDisplay} from '../../../helpers/formatEventHelper';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== CATEGORY_SEARCH) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return EventEntity.mapObjectList(payload)

    case CLEAR:
      return INITIAL_STATE
    default:
      return state
  }
}

export const categorySearchSelector = (state) => state.event.list.categorySearch

export const categorySearchArraySelector = createSelector(
  categorySearchSelector,
  (events) => _.map(events, (value) => formatEventForCardDisplay(value)),
)
