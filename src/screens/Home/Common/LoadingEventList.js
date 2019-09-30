import React from 'react'
import {View, StyleSheet} from 'react-native'
import Spinner from '../../../components/Spinner/Spinner';

export default () => (
  <View style={styles.container}>
    <Spinner />
  </View >
)

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
})
