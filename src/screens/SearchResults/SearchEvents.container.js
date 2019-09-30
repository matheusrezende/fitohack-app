/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:50:32
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 16:27:13
 */
import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux';
import SearchEvents from './SearchEvents.component';
import {eventsGrouped} from '../../reducers/event/list/search';

const mapStateToProps = (state) => ({
  events: eventsGrouped(state),
})

export default compose(
  connect(mapStateToProps),
  withHandlers({
    openMap: ({navigation}) => () => navigation.navigate('Map'),
    newEvent: ({navigation}) => () => navigation.navigate('NewEvent'),
  }),
)(SearchEvents)
