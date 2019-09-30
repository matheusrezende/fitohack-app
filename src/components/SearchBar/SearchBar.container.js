import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submit} from 'redux-form'
import {compose, withHandlers} from 'recompose'
import {withNavigation} from 'react-navigation'
import SearchBarComponent from './SearchBar.component';
import {searchAction} from '../../actions/event';


const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  submit: () => dispatch(submit('search')),
  search: bindActionCreators(searchAction, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  withHandlers({
    onSubmit: ({navigation, search}) => async (values) => search(values)
      .then(() => navigation.navigate('SearchResults')),
    goToSearchScreen: ({navigation}) => () => {
      navigation.navigate('Search')
    },
  }),
)(SearchBarComponent)
