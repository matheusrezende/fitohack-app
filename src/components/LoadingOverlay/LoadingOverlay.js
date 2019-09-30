import {View} from 'react-native';
import React from 'react'

import {Spinner} from '..';
import Colors from '../../constants/Colors';

const LoadingOverlay = () => (
  <View style={styles.container}>
    <Spinner />
  </View>
)

const styles = {
  container: {
    backgroundColor: Colors.overlay,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexx: 1,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
}

export default LoadingOverlay
