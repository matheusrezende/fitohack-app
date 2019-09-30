/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 15:16:12
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-06 22:13:09
 */
import {Platform, View} from 'react-native';
import React from 'react'

import IconButton from '../../../components/IconButton/IconButton';
import Layout from '../../../constants/Layout';

export default ({showActionSheet}) => (
  <View style={Platform.OS === 'ios' ? {marginRight: Layout.spacing * 2} : {}}>
    <IconButton icon='more' onPress={showActionSheet} />
  </View>
)
