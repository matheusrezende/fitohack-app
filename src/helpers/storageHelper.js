/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 12:20:13
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-03 10:56:01
 */
import {AsyncStorage} from 'react-native'

export const saveToStorage = (key, data) => {
  const value = JSON.stringify(data)
  return AsyncStorage.setItem(key, value)
}

export const getFromStorage = async (key) => {
  const data = await AsyncStorage.getItem(key)
  if (!data) {
    return null
  }
  return JSON.parse(data)
}
