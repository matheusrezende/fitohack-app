/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:21
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-10 07:05:11
 */
import {SUCCESS, MY_EVENT} from '../../../constants/Actions';
import {createSelector} from '../../../../node_modules/reselect';
import {formatEventForCardDisplay} from '../../../helpers/formatEventHelper';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== MY_EVENT) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return payload

    default:
      return state
  }
}

export const eventOwnSelector = (state) => state.event.list.own

export const eventOwnFormattedSelector = createSelector(
  eventOwnSelector,
  (events) => events.map((item) => formatEventForCardDisplay(item)),
)
