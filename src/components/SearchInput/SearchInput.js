import React from 'react';
import PropTypes from 'prop-types'
import {TextInput as Input, View} from 'react-native';
import Divider from '../Divider/Divider';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import {normalize} from '../../helpers/normalize';
import IconButton from '../IconButton/IconButton';

/**
 * to be wrapped with redux-form Field component
 */
const SearchInput = ({
  input: {
    onChange, onBlur, onFocus, value,
  },
  meta: {
    error,
    visited,
  },
  onIconPress,
  onSubmitEditing,
  ...inputProps
}) => (
  <View style={styles.wrapper}>
    <View style={styles.container} >
      <Input
        {...inputProps}
        onChangeText={onChange}
        onBlur={onBlur}
        underlineColorAndroid='transparent'
        placeholderTextColor={Colors.white}
        onFocus={onFocus}
        onSubmitEditing={onSubmitEditing}
        value={value}
        style={styles.input}
      />
      <View style={styles.icon}>
        <IconButton icon='search' onPress={onIconPress} />
      </View>
    </View>
    <Divider error={visited && error} gradient />
    { /*visited && error && <Text style={styles.error}>{error}</Text>*/}
  </View>
)


SearchInput.propTypes = {
  icon: PropTypes.string,
}

const styles = {
  wrapper: {
    width: Layout.window.width - (Layout.spacing * 9),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Layout.spacing,
    marginBottom: Layout.spacing,
  },
  icon: {
    position: 'absolute',
    right: 4,
  },
  input: {
    color: 'white',
    flex: 13,
    fontFamily: 'lato-regular',
    fontSize: normalize(18),
  },
  error: {
    color: Colors.error,
  },
  label: {
    color: Colors.white,
  },
}
export default SearchInput
