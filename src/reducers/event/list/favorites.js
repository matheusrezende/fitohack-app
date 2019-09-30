/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:21
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-10 07:05:11
 */
import {SUCCESS, FAVORITED_EVENTS} from '../../../constants/Actions';
import {createSelector} from '../../../../node_modules/reselect';
import {formatEventForCardDisplay} from '../../../helpers/formatEventHelper';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== FAVORITED_EVENTS) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return payload

    default:
      return state
  }
}

export const eventFavoritedSelector = (state) => state.event.list.favorites

export const favoriteEventsFormattedSelector = createSelector(
  eventFavoritedSelector,
  (events) => events.map((item) => formatEventForCardDisplay(item)),
)
