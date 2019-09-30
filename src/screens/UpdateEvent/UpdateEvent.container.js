/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-18 15:11:21
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-19 15:29:59
 */
import {compose, withHandlers, withStateHandlers} from 'recompose'
import _ from 'lodash'
import {formValueSelector, change as changeAction, SubmissionError, clearFields} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {Location} from 'expo'
import NewEventComponent from '../NewEvent/NewEvent.component';
import {eventFormatForUpdate} from '../../reducers/event/detail';
import {categoryArraySelector} from '../../reducers/category';
import {locationSelector} from '../../reducers/location';
import {formatEventForSubmission} from '../../helpers/formatEventHelper';
import {updateEvent, getEventDetail} from '../../actions/event';

const mapStateToProps = (state, {navigation}) => ({
  picture: formValueSelector('newEvent')(state, 'picture'),
  initialValues: eventFormatForUpdate(navigation.getParam('eventId'))(state),
  selectedCategories: formValueSelector('newEvent')(state, 'categories'),
  categories: categoryArraySelector(state),
  location: locationSelector(state),
  formLatitude: formValueSelector('newEvent')(state, 'latitude'),
  formLongitude: formValueSelector('newEvent')(state, 'longitude'),
})

const mapDispatchToProps = (dispatch) => ({
  changeField: bindActionCreators(changeAction, dispatch),
  update: bindActionCreators(updateEvent, dispatch),
  getDetail: bindActionCreators(getEventDetail, dispatch),
  clear: bindActionCreators(clearFields, dispatch),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(({showStartingTimePicker = true, showEndingTimePicker = true}) => ({
    showStartingTimePicker,
    showEndingTimePicker,
  }), {
    showStarting: () => () => ({
      showStartingTimePicker: true,
    }),
    showEnding: () => () => ({
      showEndingTimePicker: true,
    }),
  }),
  withHandlers({
    openModal: ({navigation}) => (params) => () => navigation.navigate('Modal', params),
    reverseGeocode: ({changeField}) => async ({latitude, longitude}) => {
      const reversedData = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      })
      const title = reversedData[0].name
      changeField('newEvent', 'addressString', title)
      changeField('newEvent', 'latitude', latitude)
      changeField('newEvent', 'longitude', longitude)
      changeField('newEvent', 'address', reversedData[0])
    },
  }),
  withHandlers({
    getCurrentLocation: ({location, reverseGeocode}) => () => reverseGeocode(location.coords),

    getLocationFromMap: ({reverseGeocode}) => (event) => reverseGeocode(event.nativeEvent.coordinate),

    onSubmit: ({update, navigation, getDetail}) => (values) => {
      const eventId = navigation.getParam('eventId')
      return update(eventId, formatEventForSubmission(values))
        .then(async (result) => {
          await getDetail(result._id)
          navigation.goBack()
        })
        .catch((err) => {
          if (err.errors) {
            throw new SubmissionError(err.errors)
          }
        })
    },
    resetField: ({clear, navigation}) => (fields) => () => {
      navigation.pop()

      _.debounce(() => clear('newEvent', false, false, fields), 1000)()
    },

  }),
)(NewEventComponent)
