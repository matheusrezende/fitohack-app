import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from '../ImageIcon/ImageIcon';

const IconButton = ({
  icon, onPress, size, style,
  height, width,
}) => (
  <TouchableOpacity onPress={onPress} style={{height: height || size, width: width || size, ...style}}>
    <Icon icon={icon} size={size} height={height} width={width} />
  </TouchableOpacity>
)

export default IconButton
