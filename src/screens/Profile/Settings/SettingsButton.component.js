/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 15:16:12
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 17:09:45
 */
import React from 'react'
import {View} from 'react-native'
import IconButton from '../../../components/IconButton/IconButton';
import Layout from '../../../constants/Layout';

export default ({showActionSheet}) => (
  <View style={{marginRight: Layout.spacing * 2}}>
    <IconButton icon='settingsWhite' onPress={showActionSheet} />
  </View>
)
