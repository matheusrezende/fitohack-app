/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 07:00:24
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:06:31
 */

let API_URL //eslint-disable-line

if (__DEV__) {
  API_URL = 'https://fitohack.herokuapp.com/api'
} else {
  API_URL = 'https://fitohack.herokuapp.com/api'
}
const API_SECRET = ''


export {API_SECRET, API_URL}
