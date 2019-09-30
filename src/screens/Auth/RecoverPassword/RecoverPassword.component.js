import React from 'react'
import {ScrollView, StyleSheet, View, StatusBar} from 'react-native'
import {reduxForm, Field} from 'redux-form'

import {Button, Typography} from '../../../components';
import {validateEmail} from '../../../helpers/validators';
import Colors from '../../../constants/Colors';
import Icon from '../../../components/ImageIcon/ImageIcon';
import Layout from '../../../constants/Layout';
import Spinner from '../../../components/Spinner/Spinner';
import TextInput from '../../../components/TextInput/TextInput';


const RecoverPassword = ({
  handleSubmit, loading, keyboardOn, success,
}) => (
  <ScrollView
    bounces={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={StyleSheet.flatten([styles.container, styles.contentContainerStyle])}
  >
    <StatusBar barStyle='light-content' />
    <Icon icon='logo' size={keyboardOn ? 60 : 80} />
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
      {
        loading ?
          <View style={styles.loading}>
            <Spinner />
          </View> :
          !success && <Button label='Neues Password anfordern' gradient fullWidth onPress={handleSubmit} />
      }

      { success &&
        <View style={styles.loading} >
          <Typography textAlign='center'>An email was sent to your email in order to recover your password.</Typography>
        </View>
      }
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
    flex: 1,
  },
  paddingTop: {
    paddingTop: Layout.spacing * 7,
  },
  inputContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
  loading: {
    marginTop: Layout.spacing * 2,
  },

})


export default reduxForm({form: 'recoverPassword'})(RecoverPassword)
