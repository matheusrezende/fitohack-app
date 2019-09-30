/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 08:09:24
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 16:38:31
 */
import React from 'react'
import {View} from 'react-native'
import DatePicker from 'react-native-datepicker'
import Divider from '../Divider/Divider';
import Colors from '../../constants/Colors';
import Typography from '../Typography/Typography';
import Icons from '../../constants/Icons';

/*
  eslint-disable
*/
export default ({
  input: {onChange, value, onFocus},
  meta: {
    error, visited, submitFailed,
  },
  hideBorder,
  iconSource,
  label,
  iconActive,
  dateFormat,
  ...inputProps
}) => (
  <View style={styles.container}>
    <Typography variant='body'>{label}</Typography>
    <DatePicker
      style={styles.container}
      date={value}
      {...inputProps}
      onDateChange={onChange}
      confirmBtnText='Bestätigen'
      cancelBtnText='Abbrechen'
      onCloseModal={onFocus}
      format={dateFormat}
      customStyles={customStyles}
      iconSource={(visited || submitFailed) && error ? Icons.warning :  ((iconActive && !!value) ? iconActive : iconSource)} //eslint-disable-line
    />
    {!hideBorder &&
      <Divider error={(visited || submitFailed) && error} gradient={!!value} />}
    {(visited || submitFailed) && error && <Typography variant='body' color='error'>{error}</Typography>}
  </View>
)

const styles = {
  container: {
    width: '100%',
  },
}
const customStyles = {
  btnTextConfirm: {
    color: Colors.link,
  },
  btnTextCancel: {
    color: Colors.error,
  },
  dateText: {
    color: Colors.white,
  },
  dateIcon: {
    height: 25,
    width: 25,
    margin: 0,
  },
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
}
