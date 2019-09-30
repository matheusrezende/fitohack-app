/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 08:21:42
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-08-09 08:21:42
 */
import React from 'react'
import IconButton from '../IconButton/IconButton';

export default ({openPickerActionSheet}) => (
  <IconButton icon='camera' onPress={openPickerActionSheet} />
)
