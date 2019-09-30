/*
 * @Author: Matheus Rezende
 * @Date: 2018-05-23 16:13:22
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-09 08:34:58
 */

/*
  Model is defined to make sure the entity of the objects are always the same throughout every request
  and if the api schema changes it is not required drastic changes in the front end
*/
import objectMapper from 'object-mapper'
import _ from 'lodash'

class Model {
  constructor(mapper) {
    this._mapper = mapper
  }


  /**
   * Pass mapper to objects
   *
   * @param {any} item
   * @returns {Object}
   * @memberof Model
   */
  map = (item) => {
    if (!item) {
      throw new Error('Argument must not be null or undefined')
    }
    if (!_.isObject(item)) {
      throw new Error('Argument must be an object')
    }

    if (this._mapper) {
      return objectMapper(item, this._mapper)
    }
    
    return item
  }

  /**
   * Map Items for a list
   *
   * @param {Array} list
   * @returns {Array}
   * @memberof Model
   */
  mapList = (list) => {
    if (!Array.isArray(list)) {
      throw new Error('State argument must be of type array')
    }
    return list.map(this.map)
  }


  /**
   * Map Items for to an object
   *
   * @param {Array} list
   * @returns {Object}
   * @memberof Model
   */
  mapObjectList = (list) => {
    if (!Array.isArray(list)) {
      throw new Error('State argument must be of type array')
    }
    return list.reduce((obj, item) => {
      // eslint-disable-next-line
      obj[item._id] = this.map(item)
      return obj
    }, {})
  }
  
  /**
   * Map Items for to an object by a given key
   *
   * @param {Array} list
   * @param {String} key
   * @returns {Object}
   * @memberof Model
   */
  mapObjectListByKey = (list, key) => {
    if (!Array.isArray(list)) {
      throw new Error('State argument must be of type array')
    }
    return list.reduce((obj, item) => {
      // eslint-disable-next-line
      obj[item[key]] = this.map(item)
      return obj
    }, {})
  }

  /**
   * Add mapped item to array
   *
   * @param {Array} state
   * @param {any} item
   * @returns {Array}
   * @memberof Model
   */
  addItem = (state, item) => {
    if (!Array.isArray(state)) {
      throw new Error('State argument must be of type array')
    }
    return [...this.mapList(state), this.map(item)]
  }


  /**
   * Remove given item from array
   *
   * @param {Array} state
   * @param {any} item
   * @returns {Array}
   * @memberof Model
   */
  removeItem = (state, item) => {
    if (!Array.isArray(state)) {
      throw new Error('State argument must be of type array')
    }
    if (!item) {
      throw new Error('Item argument must not be null')
    }
    return state.filter((data) => this.map(data) === this.map(item))
  }


  /**
   * Update item in array given its index
   *
   * @param {Array} state
   * @param {any} item
   * @param {Number} index
   * @returns
   * @memberof Model
   */
  updateItem = (state, item, index) => {
    if (!state) {
      throw new Error('State argument must not be null or undefined')
    }
    if (!Array.isArray(state)) {
      throw new Error('State argument must of type array')
    }
    if (!item) {
      throw new Error('Item argument must not be null or undefined')
    }
    if (!index) {
      throw new Error('Index argument must not be null or undefined')
    }
    if (isNaN(index)) { //eslint-disable-line
      throw new Error('Index must be a number')
    }
    return state.map((data, i) => {
      if (i === index) {
        return this.map(item)
      }
      return this.map(data)
    })
  }
}

export default Model
