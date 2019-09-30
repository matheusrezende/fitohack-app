/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-01 08:15:35
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 07:00:50
 */
import {bindActionCreators} from 'redux';
import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux'

import {AUTHENTICATE} from '../../../constants/Actions';
import {errorSelector} from '../../../reducers/app/error';
import {loadingSelector} from '../../../reducers/app/loading';
import * as AUTH_ACTIONS from '../../../actions/auth';
import * as Handlers from './Login.handlers'
import LoginComponent from './Login.component'
import withKeyboardStatus from '../../../hocs/withKeyboardStatus';

const mapStateToProps = (state) => ({
  error: errorSelector(state, AUTHENTICATE),
  loading: loadingSelector(state, AUTHENTICATE),
})

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(AUTH_ACTIONS.login, dispatch),
  setNoAuth: bindActionCreators(AUTH_ACTIONS.setNoAuth, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit: Handlers.onFormSubmit,
    goToSignup: ({navigation}) => () => {
      navigation.navigate('Signup')
    },
    goToRecoverPassword: ({navigation}) => () => {
      navigation.navigate('RecoverPassword')
    },
    signInWithoutAuthentication: Handlers.signInWithoutAuthentication,
  }),
  withKeyboardStatus,
)(LoginComponent)
