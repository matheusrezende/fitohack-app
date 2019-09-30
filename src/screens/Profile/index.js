/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 19:35:03
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 15:17:48
 */
import React from 'react'
import {Platform} from 'react-native'
import BackButton from '../../components/BackButton/BackButton';
import ProfileContainer from './Profile.container';
import SettingsButtonContainer from './Settings/SettingsButton.container';

export default {
  screen: ProfileContainer,
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
    headerTitle: 'My Profile',
    headerRight: <SettingsButtonContainer />,
  }),
}

