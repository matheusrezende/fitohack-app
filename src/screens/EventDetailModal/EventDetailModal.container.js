import {compose} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {eventDetailSelector} from '../../reducers/event/detail';
import * as EventActions from '../../actions/event';
import EventDetailModalComponent from './EventDetailModal.component';
import {profileSelector} from '../../reducers/user/profile';

const mapStateToProps = (state) => ({
  event: eventDetailSelector(state),
  user: profileSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  joinEvent: bindActionCreators(EventActions.joinEvent, dispatch),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(EventDetailModalComponent);
