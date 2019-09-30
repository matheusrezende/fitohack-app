/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 10:48:26
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:08:12
 */
import * as ACTIONS from '../constants/Actions'
import {createRequestAction} from '../helpers/actionHelper';
import * as API from '../constants/ApiUrls';
import {routeReplacer} from '../helpers/queryStringHelper';


export const getProfile = (id) => createRequestAction(
  ACTIONS.GET_USER,
  routeReplacer(API.USER_DETAIL, {id}),
  {method: 'GET'},
)

export const updateProfilePicture = (id, body) => createRequestAction(
  ACTIONS.UPDATE_PROFILE,
  routeReplacer(API.UPDATE_PROFILE_PICTURE, {id}),
  {method: 'PUT', body},
)


export const deleteUserAccount = (id) => createRequestAction(
  ACTIONS.DELETE_USER,
  routeReplacer(API.USER_DETAIL, {id}),
  {method: 'DELETE'},
)


export const changeUserPassword = (id, body) => createRequestAction(
  ACTIONS.CHANGE_PASSWORD,
  routeReplacer(API.CHANGE_PASSWORD, {id}),
  {method: 'PUT', body},
)

export const verifyAccount = () => createRequestAction(
  ACTIONS.VERIFY_ACCOUNT,
  API.VERIFY_ACCOUNT,
  {method: 'POST'},
)
