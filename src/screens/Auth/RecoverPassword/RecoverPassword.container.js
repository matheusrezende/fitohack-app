import {bindActionCreators} from 'redux';
import {compose, withHandlers, withStateHandlers} from 'recompose';
import {connect} from 'react-redux';

import {RECOVER_PASSWORD} from '../../../constants/Actions';
import {loadingSelector} from '../../../reducers/app/loading';
import {recoverPassword as recoverPasswordAction} from '../../../actions/auth';
import RecoverPassword from './RecoverPassword.component'

const mapStateToProps = (state) => ({
  loading: loadingSelector(state, RECOVER_PASSWORD),
})

const mapDispatchToProps = (dispatch) => ({
  recoverPassword: bindActionCreators(recoverPasswordAction, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({success: false}, {
    setRequestStatus: () => () => ({success: true}),
  }),
  withHandlers({
    onSubmit: ({recoverPassword, setRequestStatus}) => (data) => recoverPassword(data)
      .then(() => setRequestStatus()),
  }),
)(RecoverPassword)
