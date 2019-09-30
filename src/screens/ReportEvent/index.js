/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-18 10:11:31
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 10:40:23
 */
import React from 'react'
import BackButton from '../../components/BackButton/BackButton';
import ReportEventContainer from './ReportEvent.container';

export default {
  screen: ReportEventContainer,
  navigationOptions: ({navigation}) => ({
    headerLeft: <BackButton
      onPress={() => navigation.goBack()}
    />,
    headerTitle: 'Report Event',
  }),
}
