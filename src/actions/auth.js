/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 10:48:26
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 09:01:31
 */
import {createAction, createRequestAction} from '../helpers/actionHelper';
import * as ACTIONS from '../constants/Actions'
import * as API from '../constants/ApiUrls';

export const login = (body) => createRequestAction(ACTIONS.AUTHENTICATE, API.LOGIN, {method: 'POST', body})

export const signup = (body) => createRequestAction(ACTIONS.AUTHENTICATE, API.SIGNUP, {method: 'POST', body})

export const refreshToken = (body) => createRequestAction(ACTIONS.AUTHENTICATE, API.REFRESH_TOKEN, {method: 'POST', body})

export const recoverPassword = (body) => createRequestAction(ACTIONS.RECOVER_PASSWORD, API.RECOVER_PASSWORD, {method: 'POST', body})

export const setNoAuth = (noAuth) => createAction(ACTIONS.SET_NO_AUTH, noAuth)
