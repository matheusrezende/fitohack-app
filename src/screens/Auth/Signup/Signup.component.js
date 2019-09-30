/* eslint-disable no-throw-literal */
/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 08:30:44
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-07 09:01:02
 */
import {Field, reduxForm, values} from 'redux-form';
import {ScrollView, StyleSheet, View, StatusBar} from 'react-native'
import React from 'react'

import Colors from '../../../constants/Colors';
import {validateEmail, validatePassword} from '../../../helpers/validators';
import Layout from '../../../constants/Layout';
import Icon from '../../../components/ImageIcon/ImageIcon';
import Spinner from '../../../components/Spinner/Spinner';
import {TextInput, Typography, Button} from '../../../components';


const SignupComponent = ({
  handleSubmit, goToLogin, loading, keyboardOn,
}) => (
  <ScrollView
    bounces={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={styles.contentContainerStyle}
  >
    <StatusBar barStyle='light-content' />
    {
      !keyboardOn && <Icon icon='logo' size={80} />
    }
    
    <View style={keyboardOn ? styles.withKeyboardOn : StyleSheet.flatten([styles.inputContainer, styles.paddingTop])}>
      <Field
        name='username'
        autoCapitalize='none'
        label='Username'
        errorIcon='warning'
        component={TextInput}
      />
      <Field
        name='email'
        textContentType='emailAddress'
        keyboardType='email-address'
        validate={validateEmail}
        autoCapitalize='none'
        label='Email'
        errorIcon='warning'
        component={TextInput}
      />
      <Field
        name='password'
        label='Password'
        validate={validatePassword}
        textContentType='none'
        secureTextEntry
        autoCapitalize='none'
        errorIcon='warning'
        component={TextInput}
      />
      <Field
        name='confirmPassword'
        validate={validatePassword}
        label='Confirm Password'
        textContentType='password'
        secureTextEntry
        autoCapitalize='none'
        errorIcon='warning'
        component={TextInput}
      />
      <View style={styles.buttonContainer}>
        <Typography textAlign='center' variant='caption'>
            Mit deiner Anmeldung stimmst du der Datenschutzerklärung und den AGB von MYMOXY zu.
        </Typography>


        <View style={styles.submitButton}>
          {
            loading ?
              <View style={styles.loading}>
                <Spinner />
              </View> :
              <Button label="Hier geht's lang..." gradient fullWidth onPress={handleSubmit} />

          }
        </View>
      </View>
    </View>
    <Button
      label='Bin schon dabei. einloggen'
      labelTypography='body'
      labelColor='white'
      fullWidth onPress={goToLogin}
    />
  </ScrollView>
)

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: Layout.spacing * 2,
    minHeight: Layout.window.height,
  },

  withKeyboardOn: {
    paddingBottom: Layout.window.height * 0.5,
  },
  paddingTop: {
    paddingTop: Layout.spacing * 7,
  },
  inputContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: Layout.spacing * 4,
  },
  submitButton: {
    paddingTop: Layout.spacing * 2, width: '100%',
  },
  loading: {
    marginVertical: Layout.spacing,
  },
})

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const asyncValidate = () => sleep(200).then(() => {
  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    throw {
      password: 'Password does not match!',
      confirmPassword: 'Password does not match!',
    }
  }
})


export default reduxForm({form: 'signup', asyncValidate})(SignupComponent)
