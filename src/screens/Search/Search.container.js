import {Location} from 'expo'
import {bindActionCreators} from 'redux';
import {change, formValueSelector, reset, clearFields} from 'redux-form';
import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation'

import _ from 'lodash'

import {categoryArraySelector} from '../../reducers/category';
import {locationSelector} from '../../reducers/location';
import {searchAction} from '../../actions/event';
import SearchComponent from './Search.component';


const mapStateToProps = (state) => ({
  categories: categoryArraySelector(state),
  selectedCategories: formValueSelector('searchForm')(state, 'categories'),
  location: locationSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  search: bindActionCreators(searchAction, dispatch),
  changeField: bindActionCreators(change, dispatch),
  clear: bindActionCreators(clearFields, dispatch),
  reset: bindActionCreators(reset, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  withHandlers({
    onSubmit: ({navigation, search}) => async (values) => {
      const newValues = {...values}
      if (newValues.categories) {
        newValues.categories = newValues.categories.split(',').filter((item) => item != '')
      }
      search(newValues)
        .then(() => navigation.navigate('SearchResults'))
        .catch((err) => console.log(err))
    },
    openModal: ({navigation}) => (params) => () => navigation.navigate('SearchModal', params),
    goToSearchScreen: ({navigation}) => () => {
      navigation.navigate('Search')
    },
    decodeLocation: ({location, changeField}) => async () => {
      const reversedData = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })

      const title = reversedData[0].name
      changeField('searchForm', 'address', title)
      changeField('searchForm', 'latitude', location.coordinates[1])
      changeField('searchForm', 'longitude', location.coordinates[0])
    },
    resetField: ({clear, navigation}) => (fields) => () => {
      navigation.pop()

      _.debounce(() => clear('searchForm', false, false, fields), 1000)()
    },

  }),
)(SearchComponent)
