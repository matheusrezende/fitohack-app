import {createSelector} from 'reselect'
import {AUTHENTICATE, SUCCESS} from '../../constants/Actions';

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  const {name, status, payload} = action
  if (name !== AUTHENTICATE) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return payload

    default:
      return state
  }
}

export const authSelector = (state) => state.user.auth

export const isAuthenticatedSelector = createSelector(
  authSelector,
  (auth) => !!(auth.token && auth.token.tokenExp >= Date.now() / 1000),
)
