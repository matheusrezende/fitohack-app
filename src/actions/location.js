/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 14:15:07
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-03 14:26:44
 */
import {Location, Permissions} from 'expo';
import {createAction} from '../helpers/actionHelper';
import {GET_LOCATION, LOADING, FAILURE, SUCCESS} from '../constants/Actions';

export const getLocation = () => async (dispatch) => {
  
  try {
    dispatch(createAction(`${GET_LOCATION}_${LOADING}`, true, GET_LOCATION, LOADING))
    const {status} = await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({enableHighAccuracy: true, maximumAge: 100})
      return dispatch(createAction(
        `${GET_LOCATION}_${SUCCESS}`,
        location,
        GET_LOCATION,
        SUCCESS,
      ))
    }
    
    return dispatch(createAction(
      `${GET_LOCATION}_${FAILURE}`,
      'Not permitted',
      GET_LOCATION,
      FAILURE,
    ))
    
  } catch (err) {
    return dispatch(createAction(
      `${GET_LOCATION}_${FAILURE}`,
      'Not permitted',
      GET_LOCATION,
      FAILURE,
    ))
  }
}
