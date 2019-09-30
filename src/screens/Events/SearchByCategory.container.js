/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 08:19:25
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-10 08:50:45
 */
import {compose, withStateHandlers, withHandlers, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import SearchByCategory from './SearchByCategory.component'
import {categorySearch, clearCategorySearchEvents} from '../../actions/event';
import {loadingSelector} from '../../reducers/app/loading';
import {CATEGORY_SEARCH} from '../../constants/Actions';
import {categorySearchArraySelector} from '../../reducers/event/list/categorySearch';

const mapStateToProps = (state) => ({
  loading: loadingSelector(state, CATEGORY_SEARCH),
  events: categorySearchArraySelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  search: bindActionCreators(categorySearch, dispatch),
  clearCategorySearchEvents: bindActionCreators(clearCategorySearchEvents, dispatch),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(({navigation}) => ({
    label: navigation.getParam('title'),
    categoryId: navigation.getParam('_id'),
  })),
  withHandlers({
    getData: ({search, categoryId}) => () => {
      search(categoryId)
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getData()
    },
    componentWillUnmount() {
      this.props.clearCategorySearchEvents()
    },
  }),
)(SearchByCategory)
