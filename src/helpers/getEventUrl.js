import {
  EVENT_DETAIL,
  EVENT_SEARCH,
  OPEN_DETAIL,
  OPEN_SEARCH,
} from '../constants/ApiUrls';
import {noAuthSelector} from '../reducers/user/noAuth';
import store from '../config/Store';

export const getEventUrl = () => noAuthSelector(store.getState()) ? OPEN_SEARCH : EVENT_SEARCH


export const getEventDetailUrl = () => noAuthSelector(store.getState()) ? OPEN_DETAIL : EVENT_DETAIL
