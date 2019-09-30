/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-07 21:20:47
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 12:06:15
 */
import React from 'react'
import {View, StatusBar, Platform} from 'react-native'
import {MapView} from 'expo';
import MapViewDirections from 'react-native-maps-directions'
import Icon from '../../components/ImageIcon/ImageIcon';
import EventCard from '../../components/EventCard/EventCard.container';
import Layout from '../../constants/Layout';
import IconButton from '../../components/IconButton/IconButton';
import {GOOGLE_MAPS_APIKEY} from '../../config/Maps';


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
      <MapViewDirections
        origin={getCurrentLocation()}
        destination={getLatLng()}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor='hotpink'
      />
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
