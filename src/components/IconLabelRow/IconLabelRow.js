/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-15 08:04:13
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-15 08:11:31
 */
import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import Icon from '../ImageIcon/ImageIcon';
import Typography from '../Typography/Typography';
import Layout from '../../constants/Layout';

export default ({onPress, label, icon}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.content}>
      <View style={styles.iconContainer}>
        <Icon icon={icon} size={20} />
      </View>
      <Typography numberOfLines={1} variant='title'>{label}</Typography>
    </View>
  </TouchableOpacity>
)

const styles = {
  container: {
    marginBottom: Layout.spacing * 4,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  iconContainer: {
    paddingRight: Layout.spacing,
  },

}
