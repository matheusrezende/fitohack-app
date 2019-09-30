/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 19:35:03
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 19:35:57
 */
import React from 'react'

import HomeContainer from './Home.container';
import IconButton from '../../components/IconButton/IconButton';
import Layout from '../../constants/Layout';
import SearchBarContainer from '../../components/SearchBar/SearchBar.container';

export default {
  screen: HomeContainer,
  navigationOptions: ({navigation}) => ({
    headerLeft: <IconButton
      icon='drawer'
      style={styles.headerButtonLeft}
      onPress={navigation.openDrawer}
    />,
    headerTitle: <SearchBarContainer />,
  }),
}

const styles = {
  headerButtonLeft: {
    marginLeft: Layout.spacing * 2,
    paddingRight: 20,
    paddingVertical: 20,
  },
}
