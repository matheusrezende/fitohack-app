
/*
* @Author: Matheus Rezende
* @Date: 2018-08-10 15:51:14
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 15:02:17
*/

import {AUTHENTICATE, SUCCESS, FAVORITE_EVENT} from '../../constants/Actions';

const INITIAL_STATE = {
  events: [],
}

export default (state = INITIAL_STATE, {name, payload, status}) => {
  if (name !== AUTHENTICATE && name !== FAVORITE_EVENT) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return payload.favorites
    
    default:
      return state
  }
}

export const isEventFavoriteSelector = (state) => (eventId) => state.user.favorites.events.includes(eventId)

export const numberOfFavoritesSelector = (state) => state.user.favorites.events.length
