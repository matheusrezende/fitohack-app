import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import CategoriesPickerComponent from './CategoriesPicker.component';
import {categoryArraySelector} from '../../reducers/category';
import {getAllCategories} from '../../actions/categories';
import {loadingSelector} from '../../reducers/app/loading';
import {GET_CATEGORIES} from '../../constants/Actions';


const mapStateToProps = (state) => ({
  categories: categoryArraySelector(state),
  loading: loadingSelector(state, GET_CATEGORIES),
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getAllCategories()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.getCategories()
    },
  }),
)(CategoriesPickerComponent)
