import {View} from 'react-native'
import React from 'react'

import Layout from '../../constants/Layout';

const Header = ({leftButton, title, rightButton}) => (
  <View style={styles.container}>
    <View>
      {leftButton}
    </View>
    <View>
      {title}
    </View>
    <View>
      {rightButton}
    </View>
  </View>
)

const styles = {
  container: {
    marginTop: Layout.spacing * 4,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Layout.spacing * 7,
  },
}

export default Header
