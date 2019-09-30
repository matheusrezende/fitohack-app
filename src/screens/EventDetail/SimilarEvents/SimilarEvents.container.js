/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 19:30:42
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 08:41:25
 */
import {compose, lifecycle, withStateHandlers, withHandlers} from 'recompose';
import {withNavigation} from 'react-navigation'
import {connect} from 'react-redux';
import {getSimilarEvents} from '../../../actions/event';
import {locationSelector} from '../../../reducers/location';
import {loadingSelector} from '../../../reducers/app/loading';
import {SIMILAR_EVENT} from '../../../constants/Actions';
import BaseList from '../../Home/Common/BaseList';
import {eventSimilarArraySelector} from '../../../reducers/event/list/similarEvents';

const mapStateToProps = (state) => ({
  events: eventSimilarArraySelector(state),
  location: locationSelector(state),
  loading: loadingSelector(state, SIMILAR_EVENT),
})

const mapDispatchToProps = (dispatch) => ({
  getSimilarEvents: (data) => dispatch(getSimilarEvents(data)),
})

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    emptyText: 'No similar events found.',
    label: 'Ähnliche Events',
    hideAll: true,
  }),

  withHandlers({
    onPress: ({navigation}) => () => navigation.navigate('NearEvents'),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getSimilarEvents(this.props.location.coords)
    },
  }),
)(BaseList)

