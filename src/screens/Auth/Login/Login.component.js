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
  handleSubmit, goToSignup, loading, keyboardOn,
}) => (
  <ScrollView
    bounces={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={StyleSheet.flatten([styles.container, styles.contentContainerStyle])}
  >
    <StatusBar barStyle='light-content' />
    <Icon icon='logo' size={keyboardOn ? 50 : 80} />
    <View style={StyleSheet.flatten([styles.inputContainer])}>
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
          <Button label='LOGIN' gradient fullWidth onPress={handleSubmit} />
      }
        
    </View>
    <View style={styles.footer}>
      <Button
        label='Create account'
        labelTypography='body'
        labelColor='black'
        fullWidth onPress={goToSignup}
      />
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteBackground,
    padding: Layout.spacing * 2,
  },
  contentContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
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
