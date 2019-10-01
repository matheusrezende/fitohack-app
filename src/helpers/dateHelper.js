/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-04 13:21:48
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-11-20 07:24:22
 */
import Moment from 'moment'
import 'moment-timezone'
import {extendMoment} from 'moment-range';

import {MONTH, DAY_OF_THE_WEEK, DATE_FORMAT, DATE_TIME_FORMAT, TIME_FORMAT} from '../constants/DateFormats';


const moment = extendMoment(Moment);

export const getUserTimezone = () => moment.tz.guess()

export const getDateAndTime = (date, timezone) => moment.tz(date, timezone)

export const formatDate = (date, timezone, format) => getDateAndTime(date, timezone).format(format)

export const getDayOfMonth = (beginning, ending, timezone) => {
  const start = getDateAndTime(beginning, timezone)
  const end = getDateAndTime(ending, timezone)
  const contains = moment().range(start, end).contains(moment())
  if (!contains) {
    return start.date()
  }
  return moment().date()
}

export const getDayOfWeek = (date, timezone) => formatDate(date, timezone, DAY_OF_THE_WEEK)

export const getMonth = (date, timezone) => formatDate(date, timezone, MONTH)

export const getTime = (date, timezone) => getDateAndTime(date, timezone).date()

export const isSameDay = (beginning, ending, timezone) => getDateAndTime(beginning, timezone).isSame(ending, 'day')

export const isToday = (date, timezone) => getDateAndTime(date, timezone).isSame(moment(), 'day')

export const isTomorrow = (date, timezone) => getDateAndTime(date, timezone).isSame(moment().add(1, 'day'), 'day')

export const getTimeStamp = (date, timezone, format) => moment(formatDate(date, timezone, format), format).valueOf()

export const getTimeTimestamp = (date, timezone) => timeToTimestamp(formatDate(date, timezone, TIME_FORMAT))

export const isBeforeToday = (date) => moment(date).diff(moment(), 'days') < 0

export const formatDateAndTimeFromTimestamp = (date, time) => {
  const timezone = getUserTimezone()
  const formattedDate = moment(date).tz(timezone).format(DATE_FORMAT)
  const formattedTime = timestampToTime(time)
  return moment(`${formattedDate} ${formattedTime}`, DATE_TIME_FORMAT).valueOf()
}


export const timeToTimestamp = (TimeStr) => {
  if (TimeStr !== '') {
    const timeVec = TimeStr.split(':')
    return ((timeVec[0] * 3600000) + (timeVec[1] * 60))
  }
  
  return ''
}


export const timestampToTime = (TSValue) => {
  if (TSValue !== '') {
    let minutes = Math.floor((TSValue % 3600000) / 60)
    let hours = Math.floor(TSValue / 3600000)
    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    return (`${hours}:${minutes}`)
  }
  return ''
}
