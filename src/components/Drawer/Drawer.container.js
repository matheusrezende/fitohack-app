import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'

import {clearAuthInfo} from '../../helpers/authHelper';
import {profileSelector} from '../../reducers/user/profile';
import Drawer from './Drawer.component'
import withActiveCheck from '../../hocs/withActiveCheck';


const mapStateToProps = (state) => ({
  profile: profileSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onActionCall: ({navigation}) => (route) => navigation.navigate(route),
    navigate: ({navigation}) => (route) => () => navigation.navigate(route),
    logout: ({navigation, dispatch}) => () => clearAuthInfo(navigation, dispatch),
  }),
  withActiveCheck,
)(Drawer)
