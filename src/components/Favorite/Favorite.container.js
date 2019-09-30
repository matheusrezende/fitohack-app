/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 15:45:37
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 07:58:58
 */
import {bindActionCreators} from 'redux';
import {compose, withHandlers, withStateHandlers} from 'recompose'
import {connect} from 'react-redux'

import {favoriteEvent as favoriteEventAction} from '../../actions/event';
import {isEventFavoriteSelector} from '../../reducers/user/favorites';
import Favorite from './Favorite.component'
import saveToCalendarHoc from '../../hocs/saveToCalendarHoc';
import withActiveCheck from '../../hocs/withActiveCheck';

const mapStateToProps = (state, {eventId}) => ({
  isFavorite: isEventFavoriteSelector(state)(eventId),
})

const mapDispatchToProps = (dispatch) => ({
  favoriteEvent: bindActionCreators(favoriteEventAction, dispatch),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({loading: false}, {
    setLoadingStatus: () => (status) => ({
      loading: status,
    }),
  }),
  saveToCalendarHoc,
  withHandlers({
    onActionCall: ({
      eventId, favoriteEvent, setLoadingStatus, askUserForSaving, isFavorite, deleteFromCalendar,
    }) => async () => {
      setLoadingStatus(true)
      if (!isFavorite) {
        askUserForSaving()
      } else {
        await deleteFromCalendar()
      }
      await favoriteEvent(eventId)
      
      setLoadingStatus(false)
    },
  }),
  withActiveCheck,
)(Favorite)
