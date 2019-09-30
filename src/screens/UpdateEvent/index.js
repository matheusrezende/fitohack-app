/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 19:35:03
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 16:11:40
 */
import React from 'react'
import BackButton from '../../components/BackButton/BackButton';
import UpdateEvent from './UpdateEvent.container';
import SubmitEventButtonContainer from '../../components/SubmitEventButton/SubmitEventButton.container';

export default {
  screen: UpdateEvent,
  navigationOptions: ({navigation}) => ({
    headerLeft: <BackButton
      onPress={() => navigation.goBack()}
    />,
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTitle: 'Update Event',
    headerRight: <SubmitEventButtonContainer />,
  }),
}

