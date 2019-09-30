/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-07 21:20:47
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 12:06:15
 */
import React from 'react'
import {View, StatusBar, Platform} from 'react-native'
import {MapView} from 'expo';
import Icon from '../../components/ImageIcon/ImageIcon';
import EventCard from '../../components/EventCard/EventCard.container';
import Layout from '../../constants/Layout';
import IconButton from '../../components/IconButton/IconButton';


export default ({
  title, onDragEnd, onPress, event, getLatLng, onClose, getCurrentLocation, openGoogleMapsNavigation,
}) => (
  <React.Fragment>
    {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
    <MapView
      onPress={onPress}
      style={styles.container}
      region={{
        ...getLatLng(),
        latitudeDelta: 0.0099,
        longitudeDelta: 0.0217,
      }}
    >

      <MapView.Marker coordinate={getCurrentLocation()} title='My Location'>
        <Icon icon='locationMark' />
      </MapView.Marker>
      <MapView.Marker coordinate={getLatLng()} title={title} onDragEnd={onDragEnd} >
        <Icon icon='mapMarker' />
      </MapView.Marker>
    </MapView>
    <View style={styles.eventContainer}>
      <EventCard {...event} />
    </View>
    <View style={styles.backButton}>
      <IconButton icon='close' onPress={onClose} />
    </View>
    <View style={styles.navigationButton}>
      <IconButton icon='navigation' onPress={openGoogleMapsNavigation} />
    </View>
  </React.Fragment>
)

const styles = {
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    left: Layout.spacing * 3,
    top: Layout.spacing * 8,
  },
  navigationButton: {
    position: 'absolute',
    right: Layout.spacing * 3,
    top: Layout.spacing * 8,
  },
  eventContainer: {
    position: 'absolute',
    left: Layout.spacing * 2,
    right: Layout.spacing * 2,
    bottom: Layout.spacing * 10,
  },
}
