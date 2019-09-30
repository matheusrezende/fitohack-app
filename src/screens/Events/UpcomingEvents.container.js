/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:50:32
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-10 07:36:31
 */
import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EventsListComponent from './EventsList.component';
import {eventUpcomingArraySelector} from '../../reducers/event/list/upcoming';
import {loadingSelector} from '../../reducers/app/loading';
import {UPCOMING_EVENT} from '../../constants/Actions';
import {getAllUpcomingEvents} from '../../actions/event';

const mapStateToProps = (state) => ({
  events: eventUpcomingArraySelector(state),
  loading: loadingSelector(state, UPCOMING_EVENT),
})

const mapDispatchToProps = (dispatch) => ({
  getData: bindActionCreators(getAllUpcomingEvents, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getData()
    },
  }),
)(EventsListComponent)
