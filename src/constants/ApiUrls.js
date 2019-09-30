/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 10:46:22
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:28:36
 */
export const LOGIN = '/auth/login'
export const SIGNUP = '/auth/signup'
export const REFRESH_TOKEN = '/auth/token'


export const EVENT = '/event/'
export const EVENT_DETAIL = '/event/:id'
export const EVENT_SEARCH = '/event/search'
export const OPEN_SEARCH = '/event/openSearch'
export const OPEN_DETAIL = '/event/openDetail/:id'
export const EVENT_OWN = '/event/own'
export const FAVORITE_EVENT = '/event/:id/favorite'
export const FAVORITED_EVENTS = '/event/favoritedEvents/'

export const CATEGORY = '/category'

export const USER_DETAIL = '/users/:id'
export const UPDATE_PROFILE_PICTURE = '/users/:id/profile'
export const VERIFY_ACCOUNT = '/users/createVerificationToken'
export const CHANGE_PASSWORD = '/users/:id/changepassword'
export const RECOVER_PASSWORD = '/auth/lostpassword'
export const REPORT = '/report'
