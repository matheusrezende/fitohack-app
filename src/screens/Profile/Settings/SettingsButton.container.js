/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 17:26:51
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:20:36
 */
import {compose, withHandlers} from 'recompose'
import {withNavigation} from 'react-navigation'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {connectActionSheet} from '@expo/react-native-action-sheet';
import SettingsButton from './SettingsButton.component'
import {eventDetailSelector} from '../../../reducers/event/detail';
import * as UserActions from '../../../actions/user';
import {profileSelector} from '../../../reducers/user/profile';

const OPTIONS = ['Change Password', 'Delete Account', 'Cancel']


const mapStateToProps = (state, ownProps) => ({
  profile: profileSelector(state),
  event: eventDetailSelector(ownProps.eventId)(state),
})

const mapDispatchToProps = (dispatch) => ({
  deleteUserAccount: bindActionCreators(UserActions.deleteUserAccount, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  connectActionSheet,
  withHandlers({
    deleteAccount: ({navigation, deleteUserAccount, profile}) => async () => {
      await deleteUserAccount(profile._id)
      navigation.navigate('Login')
    },
  }),
  withHandlers({
    showActionSheet: ({
      profile, showActionSheetWithOptions, navigation, deleteAccount,
    }) => () => {
      const options = OPTIONS;
      const destructiveButtonIndex = 2;
      const cancelButtonIndex = 2;
      showActionSheetWithOptions({
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      }, (buttonIndex) => {
        switch (buttonIndex) {
          case 0: {
            navigation.navigate('ChangePassword')
            break
          }
          case 1: {
            deleteAccount(profile._id)
            
            break
          }
          default: {
            console.log('Canceled')
          }
        }
      })

    },
  }),
)(SettingsButton)
