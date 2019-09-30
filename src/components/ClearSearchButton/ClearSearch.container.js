import {compose} from 'recompose';
import {connect} from 'react-redux';
import {reset} from 'redux-form'
import ClearSearch from './ClearSearch.component'

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  resetForm: () => dispatch(reset('searchForm')),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(ClearSearch)
