import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {LinearGradient} from 'expo'
import Typography from '../Typography/Typography';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';


const Button = ({
  label,
  labelColor,
  labelTypography,
  fullWidth,
  gradient,
  style,
  onPress,
  ...props
}) => (
  <TouchableOpacity {...props} onPress={onPress} style={fullWidth && styles.fullWidth} >
    {
      gradient ?
        <LinearGradient start={{x: 0.1, y: 1}} end={{x: 0.6, y: 1}} colors={Colors.gradient} style={{...styles.button, ...style}}>
          <Typography color={labelColor} variant={labelTypography}>{label}</Typography>
        </LinearGradient> :
        <View style={{...styles.button, ...style}}>
          <Typography color={labelColor} variant={labelTypography}>{label}</Typography>
        </View>
    }
    
  </TouchableOpacity>
)

const styles = {
  button: {
    paddingVertical: Layout.spacing * 1.5,
    alignItems: 'center',
    width: '100%',
    borderRadius: 5,
  },
  fullWidth: {
    width: '100%',
  },
}

export default Button
