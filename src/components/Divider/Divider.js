import React from 'react'
import {View, StyleSheet} from 'react-native'
import {LinearGradient} from 'expo';
import Colors from '../../constants/Colors';


export default ({error, gradient}) => {
  if (error) {
    return (
      <View style={StyleSheet.flatten([styles.height, styles.error, styles.container])} />
    )
  }

  if (gradient) {
    return (
      <LinearGradient start={{x: 0.1, y: 1}} end={{x: 0.6, y: 1}} style={StyleSheet.flatten([styles.gradientHeight, styles.container])} colors={Colors.gradient} />
    )
  }

  return (
    <View style={StyleSheet.flatten([styles.height, styles.secondary, styles.container])} />
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  height: {
    height: 1.5,
  },
  gradientHeight: {
    height: 2,
  },
  error: {
    backgroundColor: Colors.error,
  },
  secondary: {
    backgroundColor: Colors.gray,
  },
})
