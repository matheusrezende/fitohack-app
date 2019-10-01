/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-05 19:58:07
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-11-08 08:53:50
 */
import * as Location from 'expo-location'
import {Platform} from 'react-native'
import {bindActionCreators} from 'redux';
import {compose, lifecycle, withHandlers, withStateHandlers} from 'recompose';
import {connect} from 'react-redux'
import {formValueSelector, change as changeAction, SubmissionError, clearFields} from 'redux-form'
import moment from 'moment';

import _ from 'lodash'

import {categoryArraySelector} from '../../reducers/category';
import {createEvent} from '../../actions/event';
import {formatEventForSubmission} from '../../helpers/formatEventHelper';
import {locationSelector} from '../../reducers/location';
import NewEventComponent from './NewEvent.component'


const mapStateToProps = (state) => ({
  categories: categoryArraySelector(state),
  selectedCategories: formValueSelector('newEvent')(state, 'categories'),
  beginningDate: formValueSelector('newEvent')(state, 'beginning'),
  endingDate: formValueSelector('newEvent')(state, 'ending'),
  location: locationSelector(state),
  formLatitude: formValueSelector('newEvent')(state, 'latitude'),
  formLongitude: formValueSelector('newEvent')(state, 'longitude'),
})

const mapDispatchToProps = (dispatch) => ({
  changeField: bindActionCreators(changeAction, dispatch),
  createNewEvent: bindActionCreators(createEvent, dispatch),
  clear: bindActionCreators(clearFields, dispatch),
})

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const asyncValidate = (values, dispatch) => sleep(3000).then(async () => {
  // simulate server latency

  const {addressString} = values
  if (addressString.length > 5) {
    const result = await Location.geocodeAsync(addressString)
  
    if (result && result[0]) {
      const {latitude, longitude} = result[0]
      dispatch(changeAction('newEvent', 'latitude', latitude))
      dispatch(changeAction('newEvent', 'longitude', longitude))
      const reversedData = await Location.reverseGeocodeAsync({latitude, longitude})
      dispatch(changeAction('newEvent', 'address', reversedData[0]))
    } else if (addressString.length > 5) {
      throw {addressString: 'Couldnt find address location'} // eslint-disable-line
    }
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(({
    showStartingTimePicker = false,
    showEndingTimePicker = false,
    // Initial values that goes in the form
    initialValues = {
      beginning: moment(),
      ending: moment(),
    },
  }) => ({
    showStartingTimePicker,
    showEndingTimePicker,
    initialValues,
  }), {
    showStarting: () => () => ({
      showStartingTimePicker: true,
    }),
    showEnding: () => () => ({
      showEndingTimePicker: true,
    }),
  }),
  withHandlers({
    onSubmit: ({createNewEvent, navigation}) => (values) => createNewEvent(formatEventForSubmission(values))
      .then(() => navigation.replace({routeName: 'EventSuccess'}))
      .catch((err) => {
        const errorData = err || {}
        if (errorData.message === 'validation error') {
          const errors = {
            ...errorData.errors,
          }
          if (errorData.errors['address,street']) {
            errors.addressString = 'Could not find location address.'
          }
          throw new SubmissionError(errors)
        }
      }),

    onLocationSelect: ({changeField}) => (data) => {
      _.map(data, (value, key) => {
        changeField('newEvent', key, value)
      })
    },
    openModal: ({navigation}) => (params) => () => navigation.navigate('Modal', params),

    reverseGeocode: ({changeField}) => async (data) => {
      if (data) {
        const {latitude, longitude} = data
        const reversedData = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        })
        let title
        if (Platform.OS === 'android') {
          title = `${reversedData[0].street}, ${reversedData[0].name}`
        } else {
          title = reversedData[0].name
        }

        changeField('newEvent', 'addressString', title)
        changeField('newEvent', 'latitude', latitude)
        changeField('newEvent', 'longitude', longitude)
        changeField('newEvent', 'address', reversedData[0])

      }
    },
    resetField: ({clear, navigation}) => (fields) => () => {
      navigation.pop()

      _.debounce(() => clear('newEvent', false, false, fields), 1000)()
    },
  
  }),
  withHandlers({
    getCurrentLocation: ({location, reverseGeocode}) => () => reverseGeocode(location.coords),
    getLocationFromMap: ({reverseGeocode}) => (event) => reverseGeocode(event.nativeEvent.coordinate),
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.beginningDate !== this.props.beginningDate && (nextProps.beginningDate > this.props.endingDate || !nextProps.endingDate)) {
        this.props.changeField('newEvent', 'ending', nextProps.beginningDate)
      }
    },
  }),
)(NewEventComponent)
