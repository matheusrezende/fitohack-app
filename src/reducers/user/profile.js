/*
* @Author: Matheus Rezende
* @Date: 2018-08-10 15:51:14
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 16:35:10
*/

import {
  AUTHENTICATE,
  GET_USER,
  SUCCESS,
  UPDATE_PROFILE,
} from '../../constants/Actions';
import ProfileEntity from '../../entity/Profile.entity';

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, {name, payload, status}) => {
  if (name !== AUTHENTICATE && name !== UPDATE_PROFILE && name !== GET_USER) {
    return state
  }

  switch (status) {
    case SUCCESS:
      return ProfileEntity.map(payload)
    
    default:
      return state
  }
}

export const profileSelector = (state) => state.user.profile
