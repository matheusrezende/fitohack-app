/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-16 07:08:05
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-19 15:32:02
 */
import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux';
import {submit} from 'redux-form'
import SubmitEventButtonComponent from './SubmitEventButton.component';
import {loadingSelector} from '../../reducers/app/loading';
import {CREATE_EVENT, UPDATE_EVENT} from '../../constants/Actions';

const mapStateToProps = (state) => ({
  loading: loadingSelector(state, CREATE_EVENT) || loadingSelector(state, UPDATE_EVENT),
})

const mapDispatchToProps = (dispatch) => ({
  submitForm: () => dispatch(submit('newEvent')),
})
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    submit: ({submitForm}) => () => {
      submitForm()
    },
  }),
)(SubmitEventButtonComponent)
