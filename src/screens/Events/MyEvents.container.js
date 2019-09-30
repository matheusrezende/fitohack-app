/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:50:32
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-14 09:12:49
 */
import {compose, lifecycle} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eventOwnFormattedSelector} from '../../reducers/event/list/own';
import EventsListComponent from './EventsList.component';
import {getOwnEvents} from '../../actions/event';
import {loadingSelector} from '../../reducers/app/loading';
import {MY_EVENT} from '../../constants/Actions';

const mapStateToProps = (state) => ({
  events: eventOwnFormattedSelector(state),
  loading: loadingSelector(state, MY_EVENT),
})

const mapDispatchToProps = (dispatch) => ({
  getData: bindActionCreators(getOwnEvents, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getData()
    },
  }),
)(EventsListComponent)
