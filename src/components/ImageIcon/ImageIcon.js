/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-01 18:16:51
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-08 21:21:48
 */
import React from 'react'
import {Image} from 'react-native'
import Icons from '../../constants/Icons'

const Icon = ({
  icon, darkIcon, ...props
}) => (
  <Image
    {...props}
    style={darkIcon ? styles.image : null}
    source={Icons[icon]}
    fadeDuration={0}
  />
)

const styles = {
  image: {
    tintColor: 'black',
  },
}


export default Icon
