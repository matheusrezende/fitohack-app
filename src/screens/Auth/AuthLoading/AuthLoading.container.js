import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {lifecycle, compose, withHandlers} from 'recompose';
import {getAuthInfo, authSuccess} from '../../../helpers/authHelper';
import {refreshToken as refreshTokenAction} from '../../../actions/auth';
import AuthLoadingComponent from './AuthLoading.component';
import {isAuthenticatedSelector} from '../../../reducers/user/auth';

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticatedSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  refreshToken: bindActionCreators(refreshTokenAction, dispatch),
})

const checkAuth = ({navigation, ...props}) => async () => {
  try {
    let user
    const authInfo = await getAuthInfo()
    if (authInfo) {
      const {refreshToken, email} = authInfo
      const response = await props.refreshToken({refreshToken, email})
      if (response) {
        authSuccess(navigation, response)
        user = true
      } else {
        user = false
      }
    }
    navigation.navigate(user ? 'App' : 'Auth');

  } catch (err) {
    navigation.navigate('Auth');
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    checkAuth,
  }),
  lifecycle({
    componentWillMount() {
      this.props.checkAuth()
    },
  }),
)(AuthLoadingComponent)
