/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 15:02:32
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:34:56
 */
import {bindActionCreators} from 'redux';
import {compose, flattenProp, withHandlers} from 'recompose';
import {connect} from 'react-redux'

import {
  GET_USER,
  UPDATE_PROFILE,
  VERIFY_ACCOUNT,
} from '../../constants/Actions';
import {getProfile, verifyAccount} from '../../actions/user';
import {loadingSelector} from '../../reducers/app/loading';
import {numberOfFavoritesSelector} from '../../reducers/user/favorites';
import {profileSelector} from '../../reducers/user/profile';
import {successSelector} from '../../reducers/app/success';
import ProfileComponent from './Profile.component';

const mapStateToProps = (state) => ({
  verifyLoading: loadingSelector(state, VERIFY_ACCOUNT),
  profile: profileSelector(state),
  verifySuccess: successSelector(state, VERIFY_ACCOUNT),
  numberOfFavorites: numberOfFavoritesSelector(state),
  loadingProfilePicture: loadingSelector(state, UPDATE_PROFILE),
  loading: loadingSelector(state, GET_USER),
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: bindActionCreators(getProfile, dispatch),
  verifyAccount: bindActionCreators(verifyAccount, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  flattenProp('profile'),
  withHandlers({
    onRefresh: ({profile, ...props}) => () => {
      props.getProfile(profile._id)
        .then((response) => console.log(response))
    },
  }),
)(ProfileComponent)
