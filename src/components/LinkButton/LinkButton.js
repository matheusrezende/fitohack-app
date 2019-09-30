import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Typography} from '../../components';
import Layout from '../../constants/Layout';

const LinkButton = ({onPress, label, disableSpacing}) => (
  <TouchableOpacity onPress={onPress} style={!disableSpacing && styles.button}>
    <Typography variant='link' color='link'>
      {label}
    </Typography>
  </TouchableOpacity>
)

const styles = {
  button: {marginRight: Layout.spacing * 2},
}

export default LinkButton
