/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 19:30:42
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-06 22:10:01
 */
import {compose, lifecycle, withStateHandlers, withHandlers} from 'recompose';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation'

import {NEAR_EVENT} from '../../../constants/Actions';
import {eventNearArraySelector} from '../../../reducers/event/list/near';
import {getAllNearEvents} from '../../../actions/event';
import {loadingSelector} from '../../../reducers/app/loading';
import {locationSelector} from '../../../reducers/location';
import BaseList from '../Common/BaseList';

const mapStateToProps = (state) => ({
  events: eventNearArraySelector(state),
  location: locationSelector(state),
  loading: loadingSelector(state, NEAR_EVENT),
})

const mapDispatchToProps = (dispatch) => ({
  getAllNearEvents: (data) => dispatch(getAllNearEvents(data)),
})

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    emptyText: 'No events around you.',
    label: 'Events in der Nähe',
  }),

  withHandlers({
    onPress: ({navigation}) => () => navigation.navigate('NearEvents'),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getAllNearEvents(this.props.location.coords)
    },
  }),
)(BaseList)

