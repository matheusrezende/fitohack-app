import React from 'react'
import {Text} from 'react-native'
import Colors from '../../constants/Colors';
import {normalize} from '../../helpers/normalize';

const Typography = ({
  variant, color, children, numberOfLines, textAlign, ...props
}) => (
  <Text
    numberOfLines={numberOfLines}
    style={{...styles[variant], ...styles.color(color), textAlign}}
    {...props}
  >
    {children}
  </Text>
)

Typography.defaultProps = {
  variant: 'body',
  color: 'white',
}


const styles = {
  color: (color = 'white') => ({
    color: Colors[color],
  }),
  headline: {
    fontFamily: 'helvetica-regular',
    fontSize: normalize(22),
    letterSpacing: 0.5,
  },
  heading: {
    fontFamily: 'helvetica-light',
    fontSize: normalize(22),
  },
  drawer: {
    fontFamily: 'helvetica-light',
    fontSize: normalize(18),
  },
  title: {
    fontFamily: 'helvetica-bold',
    fontSize: normalize(14),
  },
  body: {
    fontFamily: 'helvetica-light',
    fontSize: normalize(14),
  },
  caption: {
    fontFamily: 'helvetica-regular',
    fontSize: normalize(12),
  },
  date: {
    fontFamily: 'helvetica-regular',
    fontSize: normalize(32),
  },
  link: {
    fontFamily: 'helvetica-bold',
    fontSize: normalize(12),
  },
  
}
export default Typography
