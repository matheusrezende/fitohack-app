/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-07 21:20:47
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 08:28:10
 */
import MapView from 'react-native-maps';
import {Platform} from 'react-native'
import React from 'react'

import Icon from '../ImageIcon/ImageIcon';
import mapMarker from '../../assets/icons/map-marker.png'

export default ({
  latitude, longitude, title, onDragEnd, draggableMarker, onPress,
}) => (
  <MapView
    onPress={onPress}
    style={styles.container}
    region={{
      latitude,
      longitude,
      latitudeDelta: 0.0099,
      longitudeDelta: 0.0217,
    }}
  >
    <MapView.Marker draggable={draggableMarker} coordinate={{longitude, latitude}} title={title} onDragEnd={onDragEnd} image={Platform.OS === 'android' ? mapMarker : undefined} >
      {
        Platform.OS === 'ios' &&
        <Icon icon='mapMarker' width={24} height={30} />
      }
    </MapView.Marker>
  </MapView>
)

const styles = {
  container: {
    flex: 1,
  },
}
