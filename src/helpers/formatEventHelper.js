/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-04 18:18:57
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-10 07:45:55
 */
import _ from 'lodash'

import {DATE_RANGE, TIME_FORMAT, BEGINNING_TIME_DEFAULT, ENDING_TIME_DEFAULT, DATE_FORMAT} from '../constants/DateFormats';
import {
  formatDate,
  formatDateAndTimeFromTimestamp,
  getDayOfMonth,
  getDayOfWeek,
  getMonth,
  getTimeStamp,
  getTimeTimestamp,
  getUserTimezone,
  isSameDay,
  isToday,
  isTomorrow,
} from './dateHelper';

export const formatEventForCardDisplay = (item) => ({
  ...item,
  startingDay: getDayOfMonth(item.beginning, item.ending, item.timezone),
  month: getMonth(item.beginning, item.timezone),
  startingDayOfTheWeek: getDayOfWeek(item.beginning, item.timezone),
  categoriesNames: item.categories.map((category) => category.title).reduce((currentValue, cat) => {
    if (currentValue === '') {
      return cat
    }
    return `${currentValue}, ${cat}`
  }, ''),
  dateRange: formatEventDateRange(item),
  latitude: item.location.coordinates[1],
  longitude: item.location.coordinates[0],
})


const formatEventDateRange = ({beginning, ending, timezone}) => {
  if (isToday(beginning, timezone) && isSameDay(beginning, ending, timezone)) {
    return `Heute ${formatDate(beginning, timezone, TIME_FORMAT)} - ${formatDate(ending, timezone, TIME_FORMAT)}`
  }

  if (isToday(beginning, timezone) && !isSameDay(beginning, ending, timezone)) {
    return `Heute ${formatDate(beginning, timezone, TIME_FORMAT)} - ${formatDate(ending, timezone, DATE_RANGE)}`
  }

  if (isTomorrow(beginning, timezone) && isSameDay(beginning, ending, timezone)) {
    return `Morgen ${formatDate(beginning, timezone, TIME_FORMAT)} - ${formatDate(ending, timezone, TIME_FORMAT)}`
  }

  if (isTomorrow(beginning, timezone) && !isSameDay(beginning, ending, timezone)) {
    return `Morgen ${formatDate(beginning, timezone, TIME_FORMAT)} - ${formatDate(ending, timezone, DATE_RANGE)}`
  }

  if (isSameDay(beginning, ending, timezone)) {
    return `${formatDate(beginning, timezone, DATE_RANGE)} - ${formatDate(ending, timezone, TIME_FORMAT)}`
  }
  
  return `${formatDate(beginning, timezone, DATE_RANGE)} - ${formatDate(ending, timezone, DATE_RANGE)}`
}

export const groupEventsByCategory = (events = [], categories = []) => categories.reduce((acc, cat) => {
  const categoryEventList = events.filter((item) => item.categories.find((eventCat) => eventCat.title === cat.title))
  if (categoryEventList.length < 1) {
    return acc
  }
  return {...acc, [cat.title]: categoryEventList.map(formatEventForCardDisplay)}
}, {})


export const formatEventForSubmission = (event) => {
  const body = {...event}
  if (body.beginningTime) {
    body.beginning = formatDateAndTimeFromTimestamp(body.beginning, body.beginningTime)
  }
  if (body.endingTime) {
    body.ending = formatDateAndTimeFromTimestamp(body.ending, body.endingTime)
  }
  if (!body.beginningTime) {
    body.beginning = formatDateAndTimeFromTimestamp(body.beginning, BEGINNING_TIME_DEFAULT)
  }
  if (!body.endingTime) {
    body.ending = formatDateAndTimeFromTimestamp(body.ending, ENDING_TIME_DEFAULT)
  }
  if (body.categories) {
    body.categories = body.categories.split(',').filter((item) => item !== '')
  }
  body.timezone = getUserTimezone()
  return _.omit(body, ['endingTime', 'beginningTime'])
}

export const getEventsLocationList = (events) => events.map(({location}) => ({latitude: location.coordinates[1], longitude: location.coordinates[0]}))


export const formatEventForUpdate = (item) => {
  const event = _.omit(item, ['_id', 'author', 'favorite', 'createdAt', 'location'])
  return {
    ...event,
    categories: event.categories.map((cat) => cat._id).toString(),
    addressString: event.address.name,
    beginning: getTimeStamp(event.beginning, event.timezone, DATE_FORMAT),
    latitude: item.location.coordinates[1],
    longitude: item.location.coordinates[0],
    beginningTime: getTimeTimestamp(event.beginning, event.timezone),
    ending: getTimeStamp(event.ending, event.timezone, DATE_FORMAT),
    endingTime: getTimeTimestamp(event.ending, event.timezone),
  }
}
