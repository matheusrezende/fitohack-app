/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 10:31:14
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 17:47:35
 */
import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import Typography from '../Typography/Typography';
import Layout from '../../constants/Layout';
import Icon from '../ImageIcon/ImageIcon';
import Colors from '../../constants/Colors';

const DrawerRow = ({
  active, icon, label, onPress,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={{...styles.contentContainer, ...(active ? styles.active : {})}}>
      <Icon icon={icon} />
      <View style={{marginLeft: Layout.spacing * 4}}>
        <Typography variant='drawer'>{label}</Typography>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = {
  container: {
    width: '100%',
  },
  contentContainer: {
    width: '100%',
    height: Layout.spacing * 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing * 3,
  },
  active: {
    backgroundColor: Colors.overlay,
  },
}

export default DrawerRow
