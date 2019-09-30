import {SET_NO_AUTH} from '../../constants/Actions';

const INITIAL_STATE = false

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_NO_AUTH:
      return payload
    default:
      return state
  }
}


export const noAuthSelector = (state) => state.user.noAuth
