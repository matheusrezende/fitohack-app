/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 18:37:01
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-11-08 08:34:29
 */
import {LinearGradient} from 'expo-linear-gradient';
import {View, Platform, ScrollView} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import React from 'react'
import moment from 'moment';

import {TIME_FORMAT} from '../../constants/DateFormats';
import {TextInput, Typography} from '../../components';
// import {asyncValidate} from './NewEvent.container'
import {formatTime, parseTime} from '../../helpers/formHelpers';
import {isBeforeToday} from '../../helpers/dateHelper';
import BackButton from '../../components/BackButton/BackButton';
import CategoriesPicker from '../../components/CategoriesPicker/CategoriesPicker.container';
import Colors from '../../constants/Colors';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import DatePicker from '../../components/DatePicker/DatePicker';
import Icons from '../../constants/Icons';
import Layout from '../../constants/Layout';
import MapComponent from '../../components/MapComponent/Map.component';
import SubmitEventButtonContainer from
  '../../components/SubmitEventButton/SubmitEventButton.container';

const NewEventComponent = ({
  openModal,
  selectedCategories = '',
  getCurrentLocation,
  resetField,
  getLocationFromMap,
  formLatitude,
  
  navigation,
  
  formLongitude,
  changeField,
}) => (
  <View style={styles.container}>
    <LinearGradient
      style={styles.containerStyle}
      colors={[...Colors.gradient, 'transparent']}
      start={Platform.OS === 'ios' ? [0, 0] : [0, 0]}
      end={Platform.OS === 'ios' ? [0, 0.5] : [0, 0.7]}
    />
    {
      Platform.OS === 'android' &&
        <CustomHeader
          leftButton={<BackButton
            onPress={() => navigation.goBack()}
          />}
          rightButton={
            <SubmitEventButtonContainer />
          }
          title={<Typography variant='drawer'>Create Event</Typography>}
        />
    }

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.formContainer}>
        <View style={styles.cardContent}>
          <Field
            name='title'
            label='Name your event'
            errorIcon='warning'
            onFocus={openModal({
              component: <Field
                name='title'
                hideBorder
                autoFocus
                placeholder='Name your event'
                component={TextInput}
              />,
              title: 'Title',
              clear: resetField('title'),
            })}
            placeholder='Event name'
            component={TextInput}
            style={styles.field}
          />
          <Field
            name='description'
            errorIcon='warning'
            multiline
            onFocus={openModal({
              component: <Field
                name='description'
                hideBorder
                autoFocus
                multiline
                placeholder='Would you like to add a description?'
                component={TextInput}
              />,
              title: 'Description',
              clear: resetField('description'),
            })}
            placeholder='Would you like to add a description?'
            component={TextInput}
          />
          <CategoriesPicker
            setSelectedCategory={(categoryId) => changeField('newEvent', 'categories', categoryId)}
            isSelected={(item) => (selectedCategories || '').indexOf(item && item._id) > -1}
          />
          <Field
            name='addressString'
            label='Location'
            errorIcon='warning'
            shouldShowValidationStatus
            placeholder='Where does the location start?'
            iconHeight={20}
            iconWidth={15}
            icon='locationMark'
            onIconPress={getCurrentLocation}
            editable={false}
            onPress={getCurrentLocation}
            component={TextInput}
          />
          {
            formLatitude && formLongitude &&
              <MapComponent
                latitude={formLatitude}
                longitude={formLongitude}
                markers={[{
                  latitude: formLatitude,
                  longitude: formLongitude,
                }]}
                draggableMarker
                onDragEnd={getLocationFromMap}
                style={styles.map}
              />
          }
          <View style={{...styles.dateRow, ...styles.dateMargin}}>
            <View style={styles.dateItem}>
              <Field
                name='endingTime'
                label='Ending time'
                format={formatTime}
                parse={parseTime}
                mode='time'
                dateFormat={TIME_FORMAT}
                errorIcon='warning'
                iconSource={Icons.clock}
                input={{value: moment().add(2, 'hours')}}
                component={DatePicker}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
)

const styles = {
  container: {
    paddingTop: Layout.spacing * 3,
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: Layout.spacing,
  },
  containerStyle: {
    position: 'absolute',
    top: (Platform.OS === 'ios' ? -90 : 0),
    right: 0,
    bottom: (Platform.OS === 'ios' ? '60%' : '50%'),
    left: 0,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    padding: Layout.spacing * 2,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateItem: {
    width: '100%', alignItems: 'center', justifyContent: 'center',
  },
  dateMargin: {
    marginTop: Layout.spacing,
  },
  map: {
    height: Layout.window.height / 5,
    marginBottom: Layout.spacing,
  },
  plusButtonStyle: {
    flex: 1, justifyContent: 'center',
  },
  field: {
    color: Colors.textColor,
  },
}


const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required!'
  }
  if (!values.description) {
    errors.description = 'Required!'
  }
  if (!values.categories) {
    errors.categories = 'Required!'
  }
  if (!values.addressString) {
    errors.addressString = 'Required!'
  }
  if (!values.beginning) {
    errors.beginning = 'Required!'
  }

  if (values.beginning && isBeforeToday(values.beginning)) {
    errors.beginning = 'Beginning should be bigger than current date'
  }

  if (values.ending && isBeforeToday(values.ending)) {
    errors.ending = 'End date should be bigger than current date'
  }

  if (values.beginning && values.ending && values.beginning > values.ending) {
    errors.beginning = 'Beginning should start before the ending date.'
    errors.ending = 'Ending should be after the beginning date.'
  }

  if (values.beginning && values.ending && values.beginning === values.ending) {
    if (values.beginningTime && values.endingTime && values.endingTime < values.beginningTime) {
      errors.beginningTime = 'Wrong values!'
      errors.endingTime = 'Wrong values!'
    }
  }

  return errors
}


export default reduxForm({
  form: 'newEvent',
  validate,
  // asyncValidate,
  asyncChangeFields: ['addressString'],
})(NewEventComponent)
