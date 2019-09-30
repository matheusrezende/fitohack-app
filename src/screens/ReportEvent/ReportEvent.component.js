import {View} from 'react-native'
import React from 'react'

import {ImageIcon, Typography} from '../../components';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const ReportEvent = () => (
  <View style={styles.container}>
    <ImageIcon icon='checked' />
    <View style={styles.typgraphyContainer}>
      <Typography textAlign='center'>Vielen Dank, dass du diesen Beitrag gemeldet hast</Typography>
    </View>
  </View>
)

const styles = {
  container: {
    flex: 1,
    padding: Layout.spacing * 2,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typgraphyContainer: {
    marginTop: Layout.spacing * 2,
    padding: Layout.spacing * 2,
  },
}

export default ReportEvent
