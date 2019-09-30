/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-01 08:15:35
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-06 22:05:29
 */
import {compose, withHandlers} from 'recompose';
import _ from 'lodash'
import {SubmissionError} from 'redux-form'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import SignupComponent from './Signup.component'
import * as AUTH_ACTIONS from '../../../actions/auth';
import {errorSelector} from '../../../reducers/app/error';
import {AUTHENTICATE} from '../../../constants/Actions';
import {loadingSelector} from '../../../reducers/app/loading';
import {saveToStorage} from '../../../helpers/storageHelper';
import {AUTH} from '../../../constants/StorageKeys';
import withKeyboardStatus from '../../../hocs/withKeyboardStatus';


const mapStateToProps = (state) => ({
  error: errorSelector(state, AUTHENTICATE),
  loading: loadingSelector(state, AUTHENTICATE),
})

const mapDispatchToProps = (dispatch) => ({
  signup: bindActionCreators(AUTH_ACTIONS.signup, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit: ({signup, navigation}) => (value) => signup(_.omit(value, ['confirmPassword']))
      .then((response) => {
        saveToStorage(AUTH, response)
        navigation.navigate('App')
      })
      .catch((err) => {
        if (err.errors && err.errors.password) {
          throw new SubmissionError({
            ...err.errors.password,
            password: 'Das Passwort sollte länger als 8 Zeichen sein und mindestens eine Zahl oder einen Buchstaben enthalten',
          })
        }
        throw new SubmissionError(err.errors)
      }),
    goToLogin: ({navigation}) => () => {
      navigation.navigate('Login')
    },
  }),
  withKeyboardStatus,
)(SignupComponent)
