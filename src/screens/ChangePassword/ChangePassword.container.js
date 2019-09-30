import {Alert} from 'react-native'
import {connect} from 'react-redux'
import {submit, SubmissionError} from 'redux-form'
import {bindActionCreators} from 'redux';
import {compose, withHandlers} from 'recompose'
import ChangePassword from './ChangePassword.component'
import {changeUserPassword} from '../../actions/user';
import {clearAuthInfo} from '../../helpers/authHelper';
import {profileSelector} from '../../reducers/user/profile';


const mapStateToProps = (state) => ({
  userId: profileSelector(state)._id,
  
})

const mapDispatchToProps = (dispatch) => ({
  changePassword: bindActionCreators(changeUserPassword, dispatch),
  submitForm: bindActionCreators(submit, dispatch),
  dispatch,
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    confirmationDialog: ({submitForm}) => () => {
      Alert.alert('Change password?', 'By changing your password you will have to login again', [
        {
          text: 'Cancel',
          onPress: () => {},
        }, {
          text: 'Confirm',
          onPress: () => submitForm('changePassword'),
        },
      ])
    },
    onSubmit: ({
      changePassword, navigation, dispatch, userId,
    }) => (values) => changePassword(userId, values)
      .then(() => clearAuthInfo(navigation, dispatch))
      .catch((err) => {
        if (err.errors) {
          throw new SubmissionError(err.errors)

        }
      }),
    
  }),
)(ChangePassword)
