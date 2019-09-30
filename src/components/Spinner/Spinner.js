/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 16:23:27
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-08-10 16:23:27
 */
import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import Colors from '../../constants/Colors';

const Spinner = ({size, color}) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator color={color || Colors.link} size={size || 'large'} />
  </View>
)

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Spinner
