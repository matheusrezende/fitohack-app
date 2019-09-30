import React from 'react'
import {TouchableOpacity} from 'react-native'
import Typography from '../Typography/Typography';
import Layout from '../../constants/Layout';

const ClearSearchComponent = ({resetForm}) => (
  <TouchableOpacity style={styles.container} onPress={resetForm}>
    <Typography color='link' variant='link'>
      Zurücksetzen
    </Typography >
  </TouchableOpacity>
)

const styles = {
  container: {
    marginRight: Layout.spacing * 2,
  },
}
export default ClearSearchComponent
