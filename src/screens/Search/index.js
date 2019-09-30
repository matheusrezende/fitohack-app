/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 19:35:03
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 19:37:57
 */
import React from 'react'
import BackButton from '../../components/BackButton/BackButton';
import ClearSearchContainer from '../../components/ClearSearchButton/ClearSearch.container';
import SearchContainer from './Search.container';

export default {
  screen: SearchContainer,
  navigationOptions: ({navigation}) => ({
    headerLeft: <BackButton
      onPress={() => navigation.goBack()}
    />,
    headerRight: <ClearSearchContainer />,
  }),
}

