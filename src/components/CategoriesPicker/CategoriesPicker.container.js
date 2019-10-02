import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux'
import CategoriesPickerComponent from './CategoriesPicker.component';
import {categoryArraySelector} from '../../reducers/category';
import {getAllCategories} from '../../actions/categories';
import {loadingSelector} from '../../reducers/app/loading';
import {GET_CATEGORIES} from '../../constants/Actions';
import cycling from '../../assets/categories/cycling.png';
import run from '../../assets/categories/run.png';
import skating from '../../assets/categories/skate.png';
import team_sport from '../../assets/categories/team_sport.png';
import workout from '../../assets/categories/workout.png';
import yoga from '../../assets/categories/yoga.png';

const images = {
  cycling,
  skating,
  'team\ sport': team_sport,
  workout,
  yoga,
  run,
};

const addImageToCategories = (categories) => categories.map((category) => ({
  ...category,
  icon: images[category.title.toLowerCase()],
}));

const mapStateToProps = (state) => ({
  categories: addImageToCategories(categoryArraySelector(state)),
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
