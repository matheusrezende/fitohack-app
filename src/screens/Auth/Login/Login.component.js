import React from 'react'
import {ScrollView, StyleSheet, View, StatusBar, Platform} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import TextInput from '../../../components/TextInput/TextInput';
import Colors from '../../../constants/Colors';
import {validateEmail, required} from '../../../helpers/validators';
import Layout from '../../../constants/Layout';
import Icon from '../../../components/ImageIcon/ImageIcon';
import {Button} from '../../../components';
import Spinner from '../../../components/Spinner/Spinner';
import {LinearGradient} from 'expo-linear-gradient';


const LoginComponent = ({
  handleSubmit, goToSignup, loading, keyboardOn,
}) => (
  <ScrollView
    bounces={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={StyleSheet.flatten([styles.container, styles.contentContainerStyle, styles.paddingTop])}
  >
    <LinearGradient
      style={styles.gradient}
      colors={[...Colors.gradient, 'transparent']}
      start={Platform.OS === 'ios' ? [0, 0] : [0, 0]}
      end={Platform.OS === 'ios' ? [0, 0.5] : [0, 0.7]}
    />
    <View style={{ padding: 40 }} />
    <Icon icon='whiteLogo' size={keyboardOn ? 50 : 80} />
    <View style={StyleSheet.flatten([styles.inputContainer])}>
      <Field
        name='email'
        label='Email'
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
        labelColor='white'
        fullWidth onPress={goToSignup}
      />
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayBackground,
    padding: Layout.spacing * 2,
  },
  gradient: {
    position: 'absolute',
    top: (Platform.OS === 'ios' ? -90 : 0),
    right: 0,
    bottom: (Platform.OS === 'ios' ? '60%' : '50%'),
    left: 0,
  },
  contentContainerStyle: {
    bottom: 0,
    alignItems: 'center',
    flexGrow: 1,
  },
  paddingTop: {
    paddingTop: Layout.spacing * 7,
  },
  inputContainer: {
    marginTop: Layout.spacing * 3,
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
