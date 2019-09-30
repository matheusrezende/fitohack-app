/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 20:00:24
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 17:51:01
 */
import {Field, reduxForm, change} from 'redux-form'
import {Location} from 'expo'
import {View} from 'react-native'
import React from 'react'

import {DE_DATE_FORMAT} from '../../constants/DateFormats';
import {TextInput, Button} from '../../components';
import {
  dateFomatter,
  dateParsers,
  formatCategories,
  parseCategories,
} from '../../helpers/formHelpers';
import CategoriesPickerModalContainer from
  '../../components/CategoriesPickerModal/CategoriesPickerModal.container';
import Colors from '../../constants/Colors';
import DatePicker from '../../components/DatePicker/DatePicker';
import Icons from '../../constants/Icons';
import Layout from '../../constants/Layout';

const SearchComponent = ({
  handleSubmit,
  openModal, resetField, decodeLocation, selectedCategories, categories,
}) => (
  <View style={styles.container}>
    <Field
      name='name'
      placeholder='Event suchen'
      component={TextInput}
    />
    <Field
      name='address'
      placeholder='Ort'
      icon='location'
      onIconPress={decodeLocation}
      activeIcon='locationO'
      component={TextInput}
    />
    <Field
      name='categories'
      placeholder='Kategorie'
      errorIcon='warning'
      format={formatCategories(categories)}
      parse={parseCategories(categories)}
      onFocus={openModal({
        component: <CategoriesPickerModalContainer formName='searchForm' selected={selectedCategories.split(',')} />,
        title: 'Kategorie',
        clear: resetField('categories'),
      })}
      component={TextInput}
    />
    <View style={styles.row}>
      <View style={styles.columnLeft}>
        <Field
          name='beginning'
          label=''
          placeholder='Von'
          format={dateFomatter}
          parse={dateParsers}
          errorIcon='warning'
          dateFormat={DE_DATE_FORMAT}
          iconSource={Icons.calendarWhite}
          iconActive={Icons.calendarGradient}
          component={DatePicker}
        />
      </View>

      <View style={styles.columnRight}>
        <View style={styles.dateItemWidth}>
          <Field
            name='ending'
            label=''
            placeholder='Bis'
            dateFormat={DE_DATE_FORMAT}
            errorIcon='warning'
            format={dateFomatter}
            parse={dateParsers}
            iconSource={Icons.calendarWhite}
            iconActive={Icons.calendarGradient}
            component={DatePicker}
          />
        </View>
      </View>
    </View>
    <Button gradient labelColor='white' label='Suchen' onPress={handleSubmit} />
  </View>
)

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Layout.spacing * 2,
  },
  row: {
    flexDirection: 'row',
    paddingBottom: Layout.spacing * 2,
  },
  columnLeft: {
    flex: 1,
    paddingRight: Layout.spacing,
  },
  columnRight: {
    flex: 1,
    paddingLeft: Layout.spacing,
  },

}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const asyncValidate = (values, dispatch) => sleep(1000).then(async () => {
  const {address = ''} = values
  if (address.length > 5) {
    const result = await Location.geocodeAsync(address)
    if (result && result[0]) {
  
      const {latitude, longitude} = result[0]
      dispatch(change('searchForm', 'latitude', latitude))
      dispatch(change('searchForm', 'longitude', longitude))
    } else if (address.length > 5) {
        throw {address: 'Couldnt find address location'} // eslint-disable-line
    }
  }
})

SearchComponent.defaultProps = {
  selectedCategories: '',
}

export default reduxForm({
  form: 'searchForm',
  asyncValidate,
  
  asyncChangeFields: ['address'],
})(SearchComponent)
