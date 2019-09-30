/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 06:35:28
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 15:04:47
 */
import React from 'react'
import {View} from 'react-native'
import Layout from '../../constants/Layout';
import {Typography, Divider} from '../../components';

export default ({label, value}) => (
  <View style={styles.container}>
    <Typography variant='title'>{label}</Typography>
    <View style={styles.value}>
      <Typography variant='body'>{value}</Typography>
    </View>
    <Divider gradient />
  </View>
)

const styles = {
  container: {
    marginVertical: Layout.spacing,
  },
  value: {
    marginVertical: Layout.spacing,
  },
}
