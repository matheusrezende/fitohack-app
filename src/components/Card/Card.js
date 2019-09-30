/*
 * @Author: Matheus Rezende
 * @Date: 2018-05-20 13:15:58
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 20:20:08
 */
import React from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../../constants/Colors';

const Card = ({children, style, ...props}) => (
  <View style={{...styles.background, ...style}} {...props}>
    {children}
  </View>
)


Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}

const styles = {
  background: {
    backgroundColor: Colors.grayBackground,
    borderRadius: 5,
    overflow: 'hidden',
  },
}

export default Card
