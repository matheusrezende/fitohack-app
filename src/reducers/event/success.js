/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:35
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 09:23:23
 */
import _ from 'lodash'
import {SUCCESS, CREATE_EVENT, CLEAR} from '../../constants/Actions';

import EventEntity from '../../entity/Event.entity';
import {createSelector} from '../../../node_modules/reselect';
import {formatEventForCardDisplay} from '../../helpers/formatEventHelper';

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== CREATE_EVENT) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return EventEntity.map(payload)

    case CLEAR:
      return INITIAL_STATE
    default:
      return state
  }
}

export const eventSuccessSelector = (state) => state.event.success

export const eventSuccessFormattedSelector = createSelector(
  eventSuccessSelector,
  (event) => {
    if (_.isEmpty(event)) {
      return event
    }
    return formatEventForCardDisplay(event)
  },
)
