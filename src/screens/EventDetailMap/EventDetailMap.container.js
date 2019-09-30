/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-16 07:51:56
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 08:58:26
 */
import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'
import getDirections from 'react-native-google-maps-directions'
import EventDetailMap from './EventDetailMap.component'
import {loadingSelector} from '../../reducers/app/loading';
import {eventDetailFormattedSelector} from '../../reducers/event/detail';
import {EVENT_DETAIL} from '../../constants/Actions';
import {locationSelector} from '../../reducers/location';

const mapStateToProps = (state, {navigation}) => ({
  loading: loadingSelector(state, EVENT_DETAIL),
  event: eventDetailFormattedSelector(navigation.getParam('eventId'))(state),
  location: locationSelector(state),
})


export default compose(
  connect(mapStateToProps),
  withHandlers({
    getLatLng: ({event}) => () => ({longitude: event.location.coordinates[0], latitude: event.location.coordinates[1]}),
    onClose: ({navigation}) => () => {
      navigation.goBack()
    },
    getCurrentLocation: ({location}) => () => ({longitude: location.coords.longitude, latitude: location.coords.latitude}),
  }),
  withHandlers({
    openGoogleMapsNavigation: ({getLatLng, getCurrentLocation}) => () => {
      const navigationObj = {
        source: getCurrentLocation(),
        destination: getLatLng(),
        params: [
          {
            key: 'travelmode',
            value: 'driving', // may be "walking", "bicycling" or "transit" as well
          },
          {
            key: 'dir_action',
            value: 'navigate', // this instantly initializes navigation using the given travel mode
          },
        ],
      }
      getDirections(navigationObj)
    },
  }),
)(EventDetailMap)
