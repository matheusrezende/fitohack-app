/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:42:35
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-03 19:10:01
 */
import {SUCCESS, GET_LOCATION} from '../../constants/Actions';

const INITIAL_STATE = {
  
}

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== GET_LOCATION) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return payload

    default:
      return state
  }
}

export const locationSelector = (state) => state.location
