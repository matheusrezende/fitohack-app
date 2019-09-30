/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 10:48:26
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-10 13:21:14
 */
import * as ACTIONS from '../constants/Actions'
import {createRequestAction} from '../helpers/actionHelper';
import * as API from '../constants/ApiUrls';

export const getAllCategories = () => createRequestAction(
  ACTIONS.GET_CATEGORIES,
  API.CATEGORY,
  {method: 'GET'},
)

