/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 17:44:14
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 10:21:16
 */

import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import Typography from '../Typography/Typography';
import {normalize} from '../../helpers/normalize';
import Icon from '../ImageIcon/ImageIcon';

export default ({onPress, label, hideAll}) => (
  <View style={styles.labelRow}>
    <Typography variant='headline'>{label}</Typography>
    {
      !hideAll &&
      <TouchableOpacity onPress={onPress}>
        <View style={styles.alle}>
          <Typography variant='link' color='link'>alle</Typography>
          <Icon icon='arrowRight' width={normalize(12)} height={normalize(10)} />
        </View>
      </TouchableOpacity>
    }
    
  </View>
)


const styles = StyleSheet.create({
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  alle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: normalize(40),
  },
})
