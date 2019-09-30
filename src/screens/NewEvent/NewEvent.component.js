/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 18:37:01
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-11-08 08:34:29
 */
import {LinearGradient} from 'expo-linear-gradient';
import {View, ImageBackground, Platform, ScrollView} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import React from 'react'

import {DE_DATE_FORMAT, TIME_FORMAT} from '../../constants/DateFormats';
import {TextInput, Typography} from '../../components';
// import {asyncValidate} from './NewEvent.container'
import {formatCategories, parseCategories, dateFomatter, dateParsers, formatTime, parseTime} from '../../helpers/formHelpers';
import {isBeforeToday} from '../../helpers/dateHelper';
import BackButton from '../../components/BackButton/BackButton';
import Card from '../../components/Card/Card';
import CategoriesPickerModalContainer from '../../components/CategoriesPickerModal/CategoriesPickerModal.container';
import Colors from '../../constants/Colors';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import DatePicker from '../../components/DatePicker/DatePicker';
import EventTopImage from '../../assets/icons/event-top.png'
import Icons from '../../constants/Icons';
import ImagePickerContainer from '../../components/imagePicker/ImagePicker.container';
import Layout from '../../constants/Layout';
import LinkButton from '../../components/LinkButton/LinkButton';
import MapComponent from '../../components/MapComponent/Map.component';
import SubmitEventButtonContainer from
  '../../components/SubmitEventButton/SubmitEventButton.container';
import LocationsComponent from '../../components/LocationsComponent/LocationsComponent';


const NewEventComponent = ({
  picture,
  openModal,
  categories,
  selectedCategories = '',
  getCurrentLocation,
  resetField,
  getLocationFromMap,
  formLatitude,
  showStarting,
  showEnding,
  navigation,
  showStartingTimePicker,
  onLocationSelect,
  showEndingTimePicker,
  formLongitude,
}) => (
  <View style={styles.container}>
    <ImageBackground
      source={picture ? {uri: picture} : EventTopImage}
      style={styles.imageStyle}
    />
    <LinearGradient
      style={styles.containerStyle}
      colors={Colors.darkGradient}
      start={Platform.OS === 'ios' ? [0, 0] : [0, 0]}
      end={Platform.OS === 'ios' ? [0, 0.5] : [0, 0.7]}
    />
    { Platform.OS === 'android' &&
    <CustomHeader
      leftButton={<BackButton
        onPress={() => navigation.goBack()}
      />}
      rightButton={
        <SubmitEventButtonContainer />
      }
      title={<Typography variant='drawer'>Event erstellen</Typography>}
    /> }

    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: Layout.spacing * 10}}>
      <View style={styles.formContainer}>
        <View
          style={styles.cameraContainer}
        >
          <Field name='picture' component={ImagePickerContainer} />
        </View>
        <Card>
          <View style={styles.cardContent}>
            <Field
              name='title'
              label='Titel'
              errorIcon='warning'
              onFocus={openModal({
                component: <Field
                  name='title'
                  hideBorder
                  autoFocus
                  placeholder='Trage den Namen des Events ein'
                  component={TextInput}
                />,
                title: 'Titel',
                clear: resetField('title'),
              })}
              placeholder='Trage den Namen des Events ein'
              component={TextInput}
            />
            
            <Field
              name='categories'
              label='Kategorie'
              errorIcon='warning'
              format={formatCategories(categories)}
              parse={parseCategories(categories)}
              
              onFocus={openModal({
                component: <CategoriesPickerModalContainer formName='newEvent' selected={selectedCategories.split(',')} />,
                title: 'Kategorie',
                clear: resetField('categories'),
              })}
              placeholder='Wähle eine Kategorie aus'
              component={TextInput}
            />
            <Field
              name='description'
              errorIcon='warning'
              label='Beschreibung'
              multiline
              onFocus={openModal({
                component: <Field
                  name='description'
                  hideBorder
                  autoFocus
                  multiline
                  placeholder='Erzähle mehr über das Event'
                  component={TextInput}
                />,
                title: 'Beschreibung',
                clear: resetField('description'),
              })}
              placeholder='Erzähle mehr über das Event'
              component={TextInput}
            />
            <Field
              name='addressString'
              label='Ort'
              errorIcon='warning'
              shouldShowValidationStatus
              placeholder='Wo findet das Event statt'
              iconHeight={20}
              iconWidth={15}
              icon='locationMark'
              onFocus={openModal({
                component: <Field
                  name='addressString'
                  onSelect={onLocationSelect}
                  component={LocationsComponent}
                />,
                title: 'Ort',
                clear: resetField('addressString address'),
              })}
              onIconPress={getCurrentLocation}
              component={TextInput}
            />
            {
              formLatitude && formLongitude &&
                <View style={styles.mapContainer}>
                  <MapComponent
                    latitude={formLatitude}
                    longitude={formLongitude}
                    markers={[{
                      latitude: formLatitude,
                      longitude: formLongitude,
                    }]}
                    draggableMarker
                    onDragEnd={getLocationFromMap}
                  />
                </View>
            }
            <View style={styles.dateRow}>
              <View style={styles.dateItemWidth}>
                <Field
                  name='beginning'
                  label='Von'
                  format={dateFomatter}
                  parse={dateParsers}
                  errorIcon='warning'
                  dateFormat={DE_DATE_FORMAT}
                  iconSource={Icons.calendarGradient}
                  component={DatePicker}
                />
              </View>
              <View style={styles.dateItem}>
                {
                  !showStartingTimePicker ?
                    <View style={styles.plusButtonStyle}>
                      <LinkButton onPress={showStarting} label='+ Startzeit' />
                    </View> :
                    <Field
                      name='beginningTime'
                      label=' '
                      mode='time'
                      format={formatTime}
                      parse={parseTime}
                      errorIcon='warning'
                      dateFormat={TIME_FORMAT}
                      iconSource={Icons.clock}
                      component={DatePicker}
                    />
                }
              </View>
            </View>
            <View style={{...styles.dateRow, ...styles.dateMargin}}>
              <View style={styles.dateItemWidth}>
                <Field
                  name='ending'
                  label='Bis'
                  dateFormat={DE_DATE_FORMAT}
                  errorIcon='warning'
                  format={dateFomatter}
                  parse={dateParsers}
                  iconSource={Icons.calendarGradient}
                  component={DatePicker}
                />
              </View>
              <View style={styles.dateItem}>
                {
                  !showEndingTimePicker ?
                    <View style={styles.plusButtonStyle}>
                      <LinkButton onPress={showEnding} label='+ Endzeit' />
                    </View> :
                    <Field
                      name='endingTime'
                      label=' '
                      format={formatTime}
                      parse={parseTime}
                      mode='time'
                      dateFormat={TIME_FORMAT}
                      errorIcon='warning'
                      iconSource={Icons.clock}
                      component={DatePicker}
                    />
                }
              </View>

            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  </View>
)

const styles = {
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: Layout.spacing,
  },
  imageStyle: {
    maxWidth: Layout.window.width,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: (Platform.OS === 'ios' ? -90 : 0),
    right: 0,
    bottom: (Platform.OS === 'ios' ? '60%' : '50%'),
    left: 0,
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
  cameraContainer: {
    height: Layout.window.width * 0.55,
    width: Layout.window.width,
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
  dateItemWidth: {
    width: '47%',
  },
  dateItem: {
    width: '47%', alignItems: 'center', justifyContent: 'center',
  },
  dateMargin: {
    marginTop: Layout.spacing,
  },
  mapContainer: {
    width: '100%',
    height: Layout.window.height / 5,
    marginBottom: Layout.spacing,
  },
  plusButtonStyle: {
    flex: 1, justifyContent: 'center',
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
