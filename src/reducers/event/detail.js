/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:35
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 14:34:10
 */
import _ from 'lodash'
import {SUCCESS, CLEAR, SET_EVENT_DETAIL, SET_PARTICIPANT} from '../../constants/Actions';

import EventEntity from '../../entity/Event.entity';
import {createSelector} from '../../../node_modules/reselect';
import {formatEventForCardDisplay, formatEventForUpdate} from '../../helpers/formatEventHelper';
import {profileSelector} from '../user/profile';

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  const {
    name, type, status, payload,
  } = action

  if (type === SET_EVENT_DETAIL) {
    return EventEntity.map(payload)
  }
  if (name !== SET_PARTICIPANT) {
    return state
  }

  switch (status) {
    case SUCCESS:
      // save the event id key because the user might select another event detail to look at
      return {...state, ...EventEntity.map(payload)}

    case CLEAR:
      return INITIAL_STATE
    default:
      return state
  }
}

export const eventDetailSelector = (state) => state.event.detail

export const eventDetailFormattedSelector = createSelector(
  eventDetailSelector,
  (event) => {
    if (_.isEmpty(event)) {
      return event
    }
    return formatEventForCardDisplay(event)
  },
)

export const isEventOwnerSelector = createSelector(
  eventDetailSelector,
  profileSelector,
  (event, profile) => {
    if (event && profile) {
      return event.author._id === profile._id
    }
    
    return false
  },
)


export const eventFormatForUpdate = createSelector(
  eventDetailSelector,
  (event) => {
    if (_.isEmpty(event)) {
      return event
    }
    return formatEventForUpdate(event)
  },
)
