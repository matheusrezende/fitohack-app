/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-05 19:06:46
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-09 08:36:58
 */
import {compose, withHandlers, withStateHandlers} from 'recompose';
import {connect} from 'react-redux';
import {change} from 'redux-form'
import CategoriesPickerModalComponent from './CategoriesPickerModal.component';
import {categoryArraySelector} from '../../reducers/category';

const mapStateToProps = (state) => ({
  categories: categoryArraySelector(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeFieldValue: (value) => dispatch(change(ownProps.formName, 'categories', value)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(({selected = []}) => ({selected}), {
    changeSelected: () => (selected) => ({
      selected,
    }),
  }),
  withHandlers({
    onSelectChange: ({
      selected, changeSelected, changeFieldValue,
    }) => (value) => () => {
      let arrayHolder = selected
      if (selected.includes(value)) {
        arrayHolder = selected.filter((item) => item !== value)
      } else {
        arrayHolder = [...selected, value]
      }
      
      changeFieldValue(arrayHolder.toString())
      changeSelected(arrayHolder)
    },
  }),
)(CategoriesPickerModalComponent)
