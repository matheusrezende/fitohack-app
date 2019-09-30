import React from 'react'
import {ScrollView, StyleSheet, View, StatusBar} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import TextInput from '../../../components/TextInput/TextInput';
import Colors from '../../../constants/Colors';
import {validateEmail, required} from '../../../helpers/validators';
import Layout from '../../../constants/Layout';
import Icon from '../../../components/ImageIcon/ImageIcon';
import {Button} from '../../../components';
import Spinner from '../../../components/Spinner/Spinner';


const LoginComponent = ({
  handleSubmit, goToSignup, loading, keyboardOn, goToRecoverPassword, signInWithoutAuthentication,
}) => (
  <ScrollView
    bounces={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={StyleSheet.flatten([styles.container, styles.contentContainerStyle])}
  >
    <StatusBar barStyle='light-content' />
    <Icon icon='logo' size={keyboardOn ? 50 : 80} />
    <View style={StyleSheet.flatten([styles.inputContainer, styles.paddingTop])}>
      <Field
        name='email'
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize='none'
        label='Email'
        validate={validateEmail}
        errorIcon='warning'
        component={TextInput}
      />
      <Field
        name='password'
        label='Password'
        textContentType='password'
        secureTextEntry
        autoCapitalize='none'
        validate={required}
        errorIcon='warning'
        component={TextInput}
      />
      {
        loading ?
          <View style={styles.loading}>
            <Spinner />
          </View> :
          <Button label='Anmeldung' gradient fullWidth onPress={handleSubmit} />
      }
        
    </View>
    <View style={styles.footer}>
      <Button
        label='Weiter ohne Account'
        labelTypography='body'
        labelColor='white'
        fullWidth onPress={signInWithoutAuthentication}
      />
      <Button
        label='Passwort vergessen'
        labelTypography='body'
        labelColor='white'
        fullWidth onPress={goToRecoverPassword}
      />
      <Button
        label='Benutzerkonto erstellen'
        labelTypography='body'
        labelColor='white'
        fullWidth onPress={goToSignup}
      />
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: Layout.spacing * 2,
  },
  contentContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
  },
  paddingTop: {
    paddingTop: Layout.spacing * 7,
  },
  inputContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
  footer: {
    marginTop: Layout.spacing * 5,
    alignItems: 'center',
  },
  loading: {
    marginTop: Layout.spacing * 2,
  },
})


export default reduxForm({form: 'login'})(LoginComponent)
