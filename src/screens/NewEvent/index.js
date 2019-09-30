/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 19:35:03
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 19:39:37
 */
import React from 'react'
import {Platform} from 'react-native'
import BackButton from '../../components/BackButton/BackButton';
import NewEventContainer from './NewEvent.container';
import SubmitEventButtonContainer from '../../components/SubmitEventButton/SubmitEventButton.container';

export default {
  screen: NewEventContainer,
  navigationOptions: ({navigation}) => ({
    header: Platform.OS === 'android' && null,
    headerMode: Platform.OS === 'android' && 'none',
    headerLeft: <BackButton
      onPress={() => navigation.goBack()}
    />,
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTitle: 'Event erstellen',
    headerRight: <SubmitEventButtonContainer />,
  }),
}

