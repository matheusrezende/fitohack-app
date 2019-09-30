/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 12:41:22
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 09:12:56
 */
import {getFromStorage, saveToStorage} from './storageHelper';
import {AUTH} from '../constants/StorageKeys';
import {SIGNOUT} from '../constants/Actions';


export const getAuthInfo = () => getFromStorage(AUTH)

export const saveAuthInfo = (data) => saveToStorage(AUTH, data)

export const clearAuthInfo = (navigation, dispatch) => {
  saveAuthInfo(null)
  navigation.navigate('Auth')
  dispatch({type: SIGNOUT})
}

export const authSuccess = (navigation, data) => {
  saveAuthInfo(data)
  navigation.navigate('App')
}

export const authError = (navigation) => {
  navigation.navigate('Auth')
}
