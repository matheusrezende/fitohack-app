/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-16 07:08:03
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:07:38
 */
// Base Actions
export const NETWORK_ERROR = 'NETWORK_ERROR'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const CLEAR = 'CLEAR'
export const LOADING = 'LOADING'
export const BAD_REQUEST = 'BAD_REQUEST'
export const UNAUTHORIZED = 'UNAUTHORIZED'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const GET_LOCATION = 'GET_LOCATION'
export const SET_NO_AUTH = 'SET_NO_AUTH'
// Custom Actions
export const LOGIN = 'LOGIN'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REFRESH_TOKEN = 'REFRESH_TOKEN'
export const SIGNOUT = 'SIGNOUT'

// Event Actions
export const EVENT_DETAIL = 'EVENT_DETAIL'
export const NEAR_EVENT = 'NEAR_EVENT'
export const UPCOMING_EVENT = 'UPCOMING_EVENT'
export const SEARCH_EVENT = 'SEARCH_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const MY_EVENT = 'MY_EVENT'
export const FAVORITE_EVENT = 'FAVORITE_EVENT'
export const CATEGORY_SEARCH = 'CATEGORY_SEARCH'
export const CLEAR_CATEGORY_SEARCH = 'CLEAR_CATEGORY_SEARCH'
export const SIMILAR_EVENT = 'SIMILAR_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const FAVORITED_EVENTS = 'FAVORITED_EVENTS'
// Categories Actions
export const GET_CATEGORIES = 'GET_CATEGORIES'


// users actions
export const GET_USER = 'GET_USER'
export const VERIFY_ACCOUNT = 'VERIFY_ACCOUNT'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const DELETE_USER = 'DELETE_USER'
export const RECOVER_PASSWORD = 'RECOVER_PASSWORD'

// report actions
export const REPORT_EVENT = 'REPORT_EVENT'


export const SET_EVENT_DETAIL = 'SET_EVENT_DETAIL'
export const SET_PARTICIPANT = 'SET_PARTICIPANT'
