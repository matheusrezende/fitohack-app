import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {View} from 'react-native'
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import {TextInput, Button} from '../../components';

const ChangePassword = ({confirmationDialog}) => (
  <View style={styles.container}>
    <Field
      name='oldPassword'
      label='Old Password'
      textContentType='password'
      secureTextEntry
      autoCapitalize='none'
      errorIcon='warning'
      component={TextInput}
    />
    <Field
      name='newPassword'
      label='New Passoword'
      textContentType='password'
      secureTextEntry
      autoCapitalize='none'
      errorIcon='warning'
      component={TextInput}
    />
    <Field
      name='confirmPassword'
      label='Confirm new Password'
      textContentType='password'
      secureTextEntry
      autoCapitalize='none'
      errorIcon='warning'
      component={TextInput}
    />
    <Button gradient label='Fertig' fullWidth onPress={confirmationDialog} />
  </View>
)


const styles = {
  container: {
    flex: 1,
    padding: Layout.spacing * 2,
    backgroundColor: Colors.background,
  },
}
const validate = (values) => {
  const errors = {}
  if (values.newPassword && values.confirmPassword && values.newPassword !== values.confirmPassword) {
    errors.newPassword = 'Password does not match!'
    errors.confirmPassword = 'Password does not match!'
  }

  return errors
}

export default reduxForm({form: 'changePassword', validate})(ChangePassword)
