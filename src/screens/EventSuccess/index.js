/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 19:35:03
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-15 08:55:08
 */

import {Platform} from 'react-native'
import EventSuccessContainer from './EventSuccess.container';

export default {
  screen: EventSuccessContainer,
  navigationOptions: {
    header: Platform.OS === 'android' && null,
    headerMode: Platform.OS === 'android' && 'none',

    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerLeft: null,
  },
}
