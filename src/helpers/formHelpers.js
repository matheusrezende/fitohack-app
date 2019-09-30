/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 16:07:14
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 07:42:25
 */
import moment from 'moment'
import {DE_DATE_FORMAT, DATE_FORMAT_FORM} from '../constants/DateFormats';
import {timeToTimestamp, timestampToTime} from './dateHelper';

export const formatCategories = (categories) => (value = '') => {
  if (value) {
    const arr = value.split(',') //split the string in the commas to form an array
    return categories.filter((item) => arr.includes(item._id)) // filter the categories to get the name by the id
      .reduce((currentValue, item) => {
        if (currentValue === '') {
          return item.title
        }
        return `${currentValue}, ${item.title}`
      }, '')
  }
  
  return value
}

export const parseCategories = (categories) => (value) => {
  if (value) {
    const arr = value.split(', ')
    return categories.filter((item) => arr.includes(item.title))
      .reduce((currentValue, item) => {
        if (currentValue === '') {
          return item.title
        }
        return `${currentValue}, ${item.title}`
      }, '')
  }
  return value
}

export const dateFomatter = (value) => {
  if (!value) {
    return ''
  }
  return moment(value).format(DATE_FORMAT_FORM)
}

export const dateParsers = (value) => {
  if (!value) {
    return value
  }

  return moment(value, DE_DATE_FORMAT).valueOf()

}

export const parseTime = (value) => {
  if (!value) {
    return value
  }
  return timeToTimestamp(value)
}

export const formatTime = (value) => {
  if (!value) {
    return value
  }
  return timestampToTime(value)
}
