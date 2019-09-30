/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 15:16:12
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 16:33:46
 */
import React from 'react'
import {View} from 'react-native'
import IconButton from '../../../components/IconButton/IconButton';
import Layout from '../../../constants/Layout';

export default ({openPickerActionSheet}) => (
  <View style={{marginRight: Layout.spacing * 3}}>
    <IconButton icon='camera_small' onPress={openPickerActionSheet} />
  </View>
)
