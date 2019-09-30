import {bindActionCreators} from 'redux';
import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';

import {getLocation} from './actions/location';
import RootNavigator from './navigation/RootNavigator';


const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  getCurrentPosition: bindActionCreators(getLocation, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getCurrentPosition()
    },
  }),
)(RootNavigator)
