/*
 * @Author: Matheus Rezende
 * @Date: 2018-05-20 13:16:02
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-03 08:12:48
 */
import React from 'react'
import {withNavigation} from 'react-navigation'
import {compose, withHandlers} from 'recompose'
import {View, TouchableOpacity, Image} from 'react-native'
import Colors from '../../constants/Colors';
import Typography from '../Typography/Typography';

const Tile = ({title, picture, navigate}) => (
  <View style={styles.tile} >
    <TouchableOpacity style={styles.touchableOpacity} onPress={navigate}>
      <View
        style={styles.overlay}
      />
      <Image resizeMode='cover' style={styles.imageStyle} source={{uri: picture, cache: 'force-cache'}} />
      <View style={styles.tileNameContainer}>
        <Typography variant='body'> {title}</Typography>
      </View>
    </TouchableOpacity>
  </View>
)

const styles = {
  touchableOpacity: {
    width: '100%', height: '100%',
  },
  overlay: {
    backgroundColor: Colors.overlay,
    zIndex: 300,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  tile: {
    aspectRatio: 1,
    height: '20%',
    width: '20%',
    marginVertical: '1%',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  tileNameContainer: {
    position: 'absolute',
    height: '100%',
    zIndex: 400,
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileName: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.defaultColor,
  },

}

export default compose(
  withNavigation,
  withHandlers({
    navigate: ({navigation, _id, title}) => () => navigation.navigate('SearchByCategoryEvents', {_id, title}),
  }),
)(Tile)
