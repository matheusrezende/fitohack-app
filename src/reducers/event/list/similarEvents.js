/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:19
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 08:36:14
 */
import _ from 'lodash'
import {SUCCESS, SIMILAR_EVENT} from '../../../constants/Actions';
import EventEntity from '../../../entity/Event.entity';
import {createSelector} from '../../../../node_modules/reselect';
import {formatEventForCardDisplay} from '../../../helpers/formatEventHelper';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== SIMILAR_EVENT) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return EventEntity.mapObjectList(payload)

    default:
      return state
  }
}

export const eventSimilarSelector = (state) => state.event.list.similar

export const eventSimilarArraySelector = createSelector(
  eventSimilarSelector,
  (events) => _.map(events, (value) => formatEventForCardDisplay(value)),
)
