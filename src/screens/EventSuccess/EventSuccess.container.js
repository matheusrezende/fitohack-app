/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-15 08:10:54
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-15 08:47:08
 */
import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'
import EventSuccess from './EventSuccess.component'
import saveToCalendarHoc from '../../hocs/saveToCalendarHoc';
import {eventSuccessFormattedSelector} from '../../reducers/event/success';


const mapStateToProps = (state) => ({
  event: eventSuccessFormattedSelector(state),
})
export default compose(
  connect(mapStateToProps),
  saveToCalendarHoc,
  withHandlers({
    newEvent: ({navigation}) => () => {
      navigation.replace({routeName: 'NewEvent'})
    },
    goToHome: ({navigation}) => () => {
      navigation.popToTop()
    },
    goToMyEvents: ({navigation}) => () => {
      navigation.replace({routeName: 'MyEvents'})
    },
  }),
)(EventSuccess)
