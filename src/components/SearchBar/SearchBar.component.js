import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {View, Platform} from 'react-native'
import SearchInput from '../SearchInput/SearchInput';
import Layout from '../../constants/Layout';

const SearchBar = ({goToSearchScreen, submit}) => (
  <View style={styles.container}>
    <Field
      name='title'
      onSubmitEditing={submit}
      component={SearchInput}
      placeholder='Event suchen'
      onIconPress={goToSearchScreen}
    />
  </View>
)


const styles = {
  container: {
    marginLeft: (Platform.OS === 'ios' ? Layout.spacing * 5 : 0),
  },
}

export default reduxForm({form: 'search'})(SearchBar)
