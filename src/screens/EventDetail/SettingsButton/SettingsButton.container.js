/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 17:26:51
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 15:57:43
 */
import {Alert} from 'react-native'
import {bindActionCreators} from 'redux';
import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'
import {connectActionSheet} from '@expo/react-native-action-sheet';
import {withNavigation} from 'react-navigation'

import {
  deleteEvent as deleteEventAction,
  reportEvent,
} from '../../../actions/event';
import {isEventOwnerSelector} from '../../../reducers/event/detail';
import SettingsButton from './SettingsButton.component'

const OPTIONS = ['Event melden', 'Cancel']

const OWNER_OPTIONS = ['Update Event', 'Delete Event', 'Cancel']


const REPORT_OPTIONS = ['Spam', 'Unangebracht', 'Cancel']

const mapStateToProps = (state, ownProps) => ({
  isEventOwner: isEventOwnerSelector(ownProps.eventId)(state),
})

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: bindActionCreators(deleteEventAction, dispatch),
  reportSubmit: bindActionCreators(reportEvent, dispatch),
  dispatch,
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  connectActionSheet,
  withHandlers({
    deleteData: ({deleteEvent, navigation, eventId}) => () => {
      Alert.alert('Delete Event', "By deleting this event you're gonna lose all its data.", [
        {text: 'Cancel', style: 'cancel', onPress: () => {}},
        {
          text: 'Confirm',
          onPress: () => deleteEvent(eventId)
            .then(() => navigation.goBack())
            .catch(() => Alert.alert('Something went wrong')),
        },
      ])
    },
    showSpamOptions: ({
      showActionSheetWithOptions, eventId, navigation, reportSubmit,
    }) => () => showActionSheetWithOptions({
      options: REPORT_OPTIONS,
      destructiveButtonIndex: REPORT_OPTIONS.length,
      cancelButtonIndex: REPORT_OPTIONS.length - 1,
    }, (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          return reportSubmit({title: 'Spam', description: 'Spam', event: eventId}).then(() => {
            navigation.navigate('ReportEvent')
          })
        case 1:
          return reportSubmit({title: 'Unangebracht', description: 'Unangebracht', event: eventId}).then(() => {
            navigation.navigate('ReportEvent')
          })
        default:
          return console.log('Canceled')
      }
    }),
  }),
  withHandlers({
    showActionSheet: ({
      showActionSheetWithOptions, navigation, deleteData, isEventOwner, eventId, showSpamOptions,
    }) => () => {
      const options = isEventOwner ? OWNER_OPTIONS : OPTIONS;
      const destructiveButtonIndex = options.length;
      const cancelButtonIndex = options.length - 1;
      showActionSheetWithOptions({
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      }, (buttonIndex) => {
        if (!isEventOwner) {
          switch (buttonIndex) {
            case 0: {
              showSpamOptions()
              break
            }
            default: {
              console.log('Canceled')
            }
          }

        } else {
          switch (buttonIndex) {
            case 0: {
              navigation.navigate({routeName: 'UpdateEvent', params: {eventId}})
              break
            }
            case 1: {
              deleteData()
              break
            }
            default: {
              console.log('Canceled')
            }
          }
        }
      })

    },
  }),
)(SettingsButton)
