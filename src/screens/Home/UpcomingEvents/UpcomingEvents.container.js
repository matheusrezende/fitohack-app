/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 19:30:31
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-10 07:31:01
 */

import {compose, lifecycle, withStateHandlers, withHandlers} from 'recompose';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation'
import {getAllUpcomingEvents} from '../../../actions/event';
import {eventUpcomingArraySelector} from '../../../reducers/event/list/upcoming';
import {loadingSelector} from '../../../reducers/app/loading';
import {UPCOMING_EVENT} from '../../../constants/Actions';
import BaseList from '../Common/BaseList';

const mapStateToProps = (state) => ({
  events: eventUpcomingArraySelector(state),
  loading: loadingSelector(state, UPCOMING_EVENT),
})

const mapDispatchToProps = (dispatch) => ({
  getAllUpcomingEvents: () => dispatch(getAllUpcomingEvents()),
})

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    label: 'Anstehende Events',
    emptyText: 'No events in the upcoming days.',
  }),
  withHandlers({
    onPress: ({navigation}) => () => navigation.navigate('UpcomingEvents'),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getAllUpcomingEvents()
    },
  }),
)(BaseList)
