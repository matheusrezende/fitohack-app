/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 07:00:24
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:06:31
 */

let API_URL //eslint-disable-line

if (__DEV__) {
  API_URL = 'https://mymoxydev.herokuapp.com/api'
} else {
  API_URL = 'https://mymoxystaging.herokuapp.com/api'
}
const API_SECRET = ''

const SENTRY_SECRET = 'https://7d3dde742a9f4e0bbf127c6b92203105@sentry.io/1263318'

export {API_SECRET, SENTRY_SECRET, API_URL}
