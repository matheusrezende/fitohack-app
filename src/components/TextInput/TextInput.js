/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-14 18:57:16
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 09:38:15
 */
import React from 'react';
import PropTypes from 'prop-types'
import {TextInput as Input, View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import Styles from '../../constants/Styles';
import Divider from '../Divider/Divider';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import Typography from '../Typography/Typography';
import IconButton from '../IconButton/IconButton';
import {normalize} from '../../helpers/normalize';
import Spinner from '../Spinner/Spinner';
/*eslint-disable*/
/**
 * to be wrapped with redux-form Field component
 */
const TextInput = ({
  input: {
    onChange, onBlur, onFocus, value,
  },
  meta: {
    error,
    submitFailed,
    asyncValidating,
  },
  icon,
  activeIcon,
  errorIcon,
  onIconPress,
  hideBorder,
  label,
  onPress,
  shouldShowValidationStatus,
  ...inputProps
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.margin}>
      <Typography variant='body' color={submitFailed && error ? 'error' : 'black'}>{label}</Typography>
      <View style={styles.container} >
        <Input
          {...inputProps}
          underlineColorAndroid='transparent'
          onChangeText={onChange}
          onBlur={onBlur}
          placeholderTextColor={Colors.gray}
          onFocus={onFocus}
          value={value}
          style={StyleSheet.flatten([ styles.input, !icon &&  styles.fullWidth ])}
        />
        {
          shouldShowValidationStatus && asyncValidating ?
            <View style={styles.iconContainer}>
              <Spinner size='small' />
            </View>
            : ((icon || errorIcon) &&
            <View style={styles.iconContainer}>
              <IconButton
                onPress={onIconPress}
                icon={submitFailed && error ? (errorIcon ? errorIcon : icon) : (value ? activeIcon || icon : icon)} //eslint-disable-line
              />
            </View>
            )
        }
      </View>
      {!hideBorder &&
      <Divider error={submitFailed && error} gradient={!!value} />}
      {submitFailed && error && <Text style={styles.error}>{error}</Text>} 
    </View>
  </TouchableWithoutFeedback>
)


TextInput.propTypes = {
  icon: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    ...Styles.row,
    alignItems: 'center',
    width: '100%',

  },
  iconContainer: {
    position: 'absolute',
    right: Layout.spacing / 2,
    bottom: Layout.spacing,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  input: {
    color: Colors.black,
    marginTop: Layout.spacing * 0.5,
    marginBottom: Layout.spacing * 1.5,
    width: '90%',
    fontFamily: 'helvetica-regular',
    fontSize: normalize(14),
  },
  error: {
    color: Colors.error,
  },
  margin: {
    marginBottom: Layout.spacing * 2,
  },
})
export default TextInput
