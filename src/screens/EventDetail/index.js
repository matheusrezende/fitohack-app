/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-18 10:11:31
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 14:24:19
 */
import React from 'react'
import {Platform} from 'react-native'
import BackButton from '../../components/BackButton/BackButton';
import EventDetailContainer from './EventDetail.container';
import SettingsButtonContainer from './SettingsButton/SettingsButton.container';

export default {
  screen: EventDetailContainer,
  navigationOptions: ({navigation}) => ({
    header: Platform.OS === 'android' && null,
    headerMode: Platform.OS === 'android' && 'none',
    headerLeft: <BackButton
      onPress={() => navigation.goBack()}
    />,
    headerTitle: 'Event',
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerRight: <SettingsButtonContainer eventId={navigation.getParam('eventId')} />,
  }),
}
