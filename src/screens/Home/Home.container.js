import {bindActionCreators} from 'redux';
import {compose, withHandlers, withStateHandlers} from 'recompose';
import {connect} from 'react-redux';

import {getAllNearEvents, getAllUpcomingEvents} from '../../actions/event';
import {locationSelector} from '../../reducers/location';
import HomeComponent from './Home.component';

const mapStateToProps = (state) => ({
  location: locationSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  getUpcomingEvents: bindActionCreators(getAllUpcomingEvents, dispatch),
  getNearEvents: bindActionCreators(getAllNearEvents, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({loading: false}, {
    changeLoadingStatus: ({loading}) => () => ({loading: !loading}),
  }),

  withHandlers({
    onActionCall: ({navigation}) => () => {
      navigation.navigate('NewEvent')
    },
    onRefresh: ({
      getUpcomingEvents, getNearEvents, location, loading, changeLoadingStatus,
    }) => async () => {
      changeLoadingStatus()
      const promise = () => Promise.all([getUpcomingEvents(), getNearEvents(location.coords)])
      if (!loading) {
        await promise()
      }
      changeLoadingStatus()
    },

  }),
)(HomeComponent)
