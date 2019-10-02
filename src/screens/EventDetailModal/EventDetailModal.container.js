import {compose, withHandlers} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {eventDetailSelector} from '../../reducers/event/detail';
import * as EventActions from '../../actions/event';
import EventDetailModalComponent from './EventDetailModal.component';

const mapStateToProps = (state) => ({
  eventDetail: eventDetailSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  getEventDetail: bindActionCreators(EventActions.getEventDetail, dispatch),
  joinEvent: bindActionCreators(EventActions.joinEvent, dispatch),
});

export default compose(
  withHandlers({
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(EventDetailModalComponent);
