/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 10:48:26
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-19 15:19:15
 */
import {buildQueryString} from '../helpers/urlHelpers';
import {createRequestAction, createAction} from '../helpers/actionHelper';
import {getEventDetailUrl, getEventUrl} from '../helpers/getEventUrl';
import {
  routeReplacer,
  stringifyQueryObject,
} from '../helpers/queryStringHelper';
import * as ACTIONS from '../constants/Actions'
import * as API from '../constants/ApiUrls';

export const getAllUpcomingEvents = () => createRequestAction(
  ACTIONS.UPCOMING_EVENT,
  getEventUrl(),
  {method: 'GET'},
)

export const getAllNearEvents = ({latitude, longitude, maxDistance = 5} = {}) => createRequestAction(
  ACTIONS.NEAR_EVENT,
  getEventUrl() + stringifyQueryObject({latitude, longitude, maxDistance}),
  {method: 'GET'},
)

export const getOwnEvents = () => createRequestAction(
  ACTIONS.MY_EVENT,
  API.EVENT_OWN,
  {method: 'GET'},
)

export const createEvent = (body) => createRequestAction(
  ACTIONS.CREATE_EVENT,
  API.EVENT, {
    method: 'post', body,
  },
)


export const categorySearch = (categoryId) => createRequestAction(
  ACTIONS.CATEGORY_SEARCH,
  getEventUrl() + stringifyQueryObject({categories: categoryId}),
  {method: 'GET'},
)

export const getSimilarEvents = (data) => createRequestAction(
  ACTIONS.SIMILAR_EVENT,
  getEventUrl() + stringifyQueryObject(data),
  {method: 'GET'},
)

export const clearCategorySearchEvents = () => createAction(
  `${ACTIONS.CATEGORY_SEARCH}_${ACTIONS.CLEAR}`,
  null,
  ACTIONS.CATEGORY_SEARCH,
  ACTIONS.CLEAR,
)


export const favoriteEvent = (eventId) => createRequestAction(
  ACTIONS.FAVORITE_EVENT,
  API.FAVORITE_EVENT.replace(':id', eventId),
  {method: 'POST'},
)

export const getEventDetail = (id) => createRequestAction(
  ACTIONS.EVENT_DETAIL,
  routeReplacer(getEventDetailUrl(), {id}),
  {method: 'GET'},
)

export const clearEventDetail = () => createAction(
  `${ACTIONS.EVENT_DETAIL}_${ACTIONS.CLEAR}`,
  null,
  ACTIONS.EVENT_DETAIL,
  ACTIONS.CLEAR,
)


export const searchAction = (data) => createRequestAction(
  ACTIONS.SEARCH_EVENT,
  `${getEventUrl()}?${buildQueryString(data)}`,
  {method: 'GET'},
)


export const reportEvent = (body) => createRequestAction(
  ACTIONS.REPORT_EVENT,
  API.REPORT,
  {method: 'POST', body},
)

export const deleteEvent = (eventId) => createRequestAction(
  ACTIONS.DELETE_EVENT,
  API.EVENT_DETAIL.replace(':id', eventId),
  {method: 'DELETE'},
)

export const updateEvent = (eventId, body) => createRequestAction(
  ACTIONS.UPDATE_EVENT,
  API.EVENT_DETAIL.replace(':id', eventId),
  {method: 'PUT', body},
)

export const getFavoritedEvents = () => createRequestAction(
  ACTIONS.FAVORITED_EVENTS,
  API.FAVORITED_EVENTS,
  {method: 'GET'},
)


export const setEventDetail = (event) => createAction(ACTIONS.SET_EVENT_DETAIL, event);


export const joinEvent = (eventId) => createRequestAction(
  ACTIONS.SET_PARTICIPANT,
  API.POST_PARTICIPANT + eventId,
  {method: 'POST', body: {}},
)
