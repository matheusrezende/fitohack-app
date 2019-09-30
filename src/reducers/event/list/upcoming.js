/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:27
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-04 18:24:18
 */
import _ from 'lodash'
import {createSelector} from 'reselect';
import {SUCCESS, UPCOMING_EVENT} from '../../../constants/Actions';
import {formatEventForCardDisplay} from '../../../helpers/formatEventHelper';
import EventEntity from '../../../entity/Event.entity';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== UPCOMING_EVENT) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return EventEntity.mapObjectList(payload)

    default:
      return state
  }
}

export const eventUpcomingSelector = (state) => state.event.list.upcoming

export const eventUpcomingArraySelector = createSelector(
  eventUpcomingSelector,
  (events) => _.map(events, (value) => formatEventForCardDisplay(value)),
)
