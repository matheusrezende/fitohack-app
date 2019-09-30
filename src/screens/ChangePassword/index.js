/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 19:35:03
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 17:08:39
 */
import React from 'react'
import BackButton from '../../components/BackButton/BackButton';
import ChangePasswordContainer from './ChangePassword.container';

export default {
  screen: ChangePasswordContainer,
  navigationOptions: ({navigation}) => ({
    headerLeft: <BackButton
      onPress={() => navigation.goBack()}
    />,
    headerTitle: 'Change Password',
  }),
}

