/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 08:39:55
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-08-09 08:39:55
 */
import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native';
import Icon from '../../../components/ImageIcon/ImageIcon';
import {Spinner} from '../../../components';

const AuthLoadingComponent = () => (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <Icon icon='logo' size={80} />
      <Spinner />
    </View>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 200,
  },
  container: {
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AuthLoadingComponent
