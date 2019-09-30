/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:24
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-14 08:12:38
 */
import {createSelector} from 'reselect';
import {SUCCESS, SEARCH_EVENT} from '../../../constants/Actions';
import EventEntity from '../../../entity/Event.entity';
import {categoryArraySelector} from '../../category';
import {groupEventsByCategory} from '../../../helpers/formatEventHelper';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== SEARCH_EVENT) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return EventEntity.mapList(payload)

    default:
      return state
  }
}

export const eventSearchSelector = (state) => state.event.list.search


export const eventsGrouped = createSelector(
  eventSearchSelector,
  categoryArraySelector,
  (events, categories) => groupEventsByCategory(events, categories),
)
