/*
 * @Author: Matheus Rezende
 * @Date: 2018-06-27 12:48:39
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:43:14
 */
import _ from 'lodash'
import {LOADING, SUCCESS, FAILURE} from '../../constants/Actions';

export const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {

  const {name, status} = action
  switch (status) {
    case LOADING: {
      return {...state, [name]: false}
    }

    case SUCCESS: {
      return {...state, [name]: true}
    }
    case FAILURE: {
      return {...state, [name]: false}
    }

    default:
      return state
  }
}

/**
 * Takes state object and return success state based on actionType
 *
 * @param {Object} state
 * @param {String} actionType
 * @returns {Boolean}
 */
export const successSelector = (state, actionType) => {
  if (!state || !_.isObject(state)) {
    throw new Error(`State type must be Object but got ${typeof state}`)
  }
  if (!actionType || !_.isString(actionType)) {
    throw new Error(`ActionType type must be String but got ${typeof actionType}`)
  }

  return !!state.app.success[actionType]
}

