/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 10:50:32
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-14 09:12:49
 */
import {compose, lifecycle} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {favoriteEventsFormattedSelector} from '../../reducers/event/list/favorites';
import EventsListComponent from './EventsList.component';
import {getFavoritedEvents} from '../../actions/event';
import {loadingSelector} from '../../reducers/app/loading';
import {FAVORITED_EVENTS} from '../../constants/Actions';

const mapStateToProps = (state) => ({
  events: favoriteEventsFormattedSelector(state),
  loading: loadingSelector(state, FAVORITED_EVENTS),
})

const mapDispatchToProps = (dispatch) => ({
  getData: bindActionCreators(getFavoritedEvents, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getData()
    },
  }),
)(EventsListComponent)
