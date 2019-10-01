/*
 * @Author: Matheus Rezende
 * @Date: 2018-05-20 13:16:02
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-03 08:12:48
 */
import React from 'react'
import {withNavigation} from 'react-navigation'
import {compose, withHandlers} from 'recompose'
import {View, TouchableOpacity, ImageBackground} from 'react-native'
import Colors from '../../constants/Colors';
import Typography from '../Typography/Typography';
import {LinearGradient} from 'expo-linear-gradient';
import Layout from '../../constants/Layout';

const Tile = ({title, picture, onPress, setSelected, selected, navigate, icon}) => (
  <View style={styles.tile}>
    <TouchableOpacity style={styles.touchableOpacity} onPress={setSelected ? onPress : navigate}>
      <LinearGradient
        colors={Colors.gradient}
        start={[0.5, 0]}
        end={[0.5, 1]}
        style={{ ...styles.overlay, ...(selected ? styles.selected : {}) }}
      />
      <View style={styles.imageWrapper}>
        <ImageBackground resizeMode='center' style={styles.imageStyle} source={icon ? icon : {uri: picture, cache: 'force-cache'}} />
      </View>
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
    backgroundColor: Colors.primaryColor,
    opacity: 50,
    zIndex: 300,
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
  tile: {
    aspectRatio: 1,
    height: '48%',
    width: '48%',
    marginVertical: '1%',
    borderRadius: '30%',
  },
  selected: {
    borderColor: 'black',
  },
  imageWrapper: {
    height: '70%',
    width: '70%',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 350,
    margin: '15%',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    zIndex: 350,
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
    onPress: ({_id, setSelected}) => () => setSelected(_id),
  }),
)(Tile)
