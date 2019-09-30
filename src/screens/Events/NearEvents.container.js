/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:50:32
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-14 09:12:52
 */
import {compose, lifecycle, withHandlers} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EventsListComponent from './EventsList.component';
import {getAllNearEvents} from '../../actions/event';
import {loadingSelector} from '../../reducers/app/loading';
import {NEAR_EVENT} from '../../constants/Actions';
import {eventNearArraySelector} from '../../reducers/event/list/near';
import {locationSelector} from '../../reducers/location';

const mapStateToProps = (state) => ({
  events: eventNearArraySelector(state),
  loading: loadingSelector(state, NEAR_EVENT),
  location: locationSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  getEvents: bindActionCreators(getAllNearEvents, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    getData: ({location, getEvents}) => () => getEvents(location.coords),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getData()
    },
  }),
)(EventsListComponent)
