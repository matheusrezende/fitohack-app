/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-05 10:45:00
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 08:50:45
 */
import {compose, withHandlers} from 'recompose'
import {withNavigation} from 'react-navigation';
import EventCard from './EventCard'


export default compose(
  withNavigation,
  withHandlers({
    onPress: ({navigation, _id}) => () => navigation.navigate({routeName: 'EventDetail', params: {eventId: _id}, key: _id}),
    
  }),
)(EventCard)
