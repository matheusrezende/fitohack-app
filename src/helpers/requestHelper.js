
/*
 * @Author: Matheus Rezende
 * @Date: 2018-04-16 17:02:00
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 13:44:06
 */


import {
  API_URL,
  // API_AUTH,
  API_SECRET,
} from '../constants/App'
import {SUCCESS, FAILURE, LOADING, UNAUTHORIZED, BAD_REQUEST} from '../constants/Actions'
import store from '../config/Store';


export default async function requestRestfulApi(actionName = '', url = '', config = {}, dispatch, args = null) {
  if (url.length === 0 || actionName.length === 0) {
    dispatch({
      name: actionName,
      type: `${actionName}_${FAILURE}`,
      status: FAILURE,
      payload: {
        error: 'Invalid request',
      },
    })
    return false
  }

  return new Promise(async (resolve, reject) => {
    try {
      // Set default token
      const userToken = store.getState().user.auth.token

      const URL = API_URL + url
      const {
        // `method` is the request method to be used when making the request
        method = 'GET', // default

        // `body` is the data to be sent as the request body
        // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
        // When no `transformRequest` is set, must be of one of the following types:
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - Browser only: FormData, File, Blob
        // - Node only: Stream, Buffer
        body = {},

        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.

        // `headers` are custom headers to be sent
        headers = {
          // Authorization: apiAuth,
          'X-API-KEY': API_SECRET,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: userToken || '',
        },
      } = config;

      dispatch({
        name: actionName,
        type: `${actionName}_${LOADING}`,
        status: LOADING,
      })

      const reqParams = {
        method,
        headers,
      }

      if (method !== 'GET') {
        reqParams.body = JSON.stringify(body)
      }

      const response = await fetch(URL, reqParams) // eslint-disable-line

      if (response.status === 401) {
        dispatch({
          name: actionName,
          status: FAILURE,
          type: UNAUTHORIZED,
          payload: UNAUTHORIZED,
          exception: {
            error: UNAUTHORIZED,
            response: UNAUTHORIZED,
          },
          params: {
            url: URL,
            ...reqParams,
          },
        })
        reject(response)
      }

      const responseData = await response.json()
      if (response.status > 299) {
        dispatch({
          name: actionName,
          status: FAILURE,
          type: BAD_REQUEST,
          payload: responseData,
          exception: {
            error: responseData.message,
            response: responseData,
          },
          params: {
            url: URL,
            ...reqParams,
          },
        })
        reject(responseData)
      } else {
        dispatch({
          name: actionName,
          status: SUCCESS,
          type: `${actionName}_${SUCCESS}`,
          payload: responseData,
          args,
          params: {
            url: URL,
            ...reqParams,
          },
        })
        resolve(responseData)
      }
    } catch (err) {
      reject(err)
    }
    
  })
}
