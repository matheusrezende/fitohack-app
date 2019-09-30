/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 16:41:46
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 14:22:25
 */
import {
  ImageBackground,
  Platform,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react'

import {Typography} from '../../components';
import BackButton from '../../components/BackButton/BackButton';
import Card from '../../components/Card/Card';
import Colors from '../../constants/Colors';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import DescriptionDisplay from './DescriptionDisplay';
import EventTopImage from '../../assets/icons/event-top.png'
import FavoriteContainer from '../../components/Favorite/Favorite.container';
import Layout from '../../constants/Layout';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import MapComponent from '../../components/MapComponent/Map.component';
import SettingsButtonContainer from './SettingsButton/SettingsButton.container';
import SimilarEventsContainer from './SimilarEvents/SimilarEvents.container';

const EventDetailComponent = ({
  loading, getEvent, picture, categoriesNames,
  title, dateRange, description, latitude, longitude, address, openMap,
  _id, navigation, reportLoading,
}) => (
  <View style={styles.container}>
    <ImageBackground
      source={picture ? {uri: picture} : EventTopImage}
      style={styles.imageStyle}
    />
    <LinearGradient
      style={styles.containerStyle}
      colors={Colors.darkGradient}
      start={[0, 0]}
      end={[0, 0.7]}
    />
    { Platform.OS === 'android' &&
      <CustomHeader
        leftButton={<BackButton
          onPress={() => navigation.goBack()}
        />}
        rightButton={
          <SettingsButtonContainer eventId={navigation.getParam('eventId')} />
        }
        title={<Typography variant='drawer'>Event</Typography>}
      /> }
 
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getEvent}
          tintColor={Colors.link}
        />
      }
      contentContainerStyle={{paddingTop: Layout.window.height / 4}}
    >
      <Card>
        <View style={styles.cardContent}>
          {
            !loading &&
              <React.Fragment>
                <View style={styles.titleRow}>
                  <View style={styles.title}>
                    <Typography variant='body' color='gray' numberOfLines={1} ellipsizeMode='tail'>{categoriesNames}</Typography>
                    <Typography variant='headline' color='white'>{title}</Typography>
                  </View>
                  <FavoriteContainer disableSpacing eventId={_id} />
                </View>
                <View style={styles.dateContainer}>
                  <Typography

                    variant='body'
                    color='gray'

                  >
                    {dateRange}
                  </Typography>
                </View>

                <DescriptionDisplay description={description} />
                <View style={styles.mapContainer}>
                  {!loading && latitude && longitude && <MapComponent
                    onPress={openMap}
                    latitude={latitude}
                    longitude={longitude}
                    title={`${title} - ${address.name}`}
                  />}

                </View>
                <Typography variant='caption' color='gray'>{`${address.name} ${address.postalCode} ${address.city}`}</Typography>
              </React.Fragment>
          }
        </View >
      </Card>
      <View style={{marginTop: Layout.spacing * 3}}>
        <SimilarEventsContainer />
      </View>
    </ScrollView>
    {reportLoading && <LoadingOverlay /> }
  </View>

)
EventDetailComponent.defaultProps = {
  address: {},
}
const styles = {
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: Layout.spacing * 2.5,
  },
  imageStyle: {
    maxWidth: Layout.window.width,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -90,
    right: 0,
    bottom: (Platform.OS === 'ios' ? '60%' : '50%'),
    left: 0,
  },
  containerStyle: {
    position: 'absolute',
    top: -90,
    right: 0,
    bottom: (Platform.OS === 'ios' ? '60%' : '50%'),
    left: 0,
  },
  cardContent: {
    padding: Layout.spacing * 2,
  },
  dateContainer: {
    paddingVertical: Layout.spacing * 1.5,
  },
  mapContainer: {
    width: '100%',

    height: Layout.window.height / 6,
    marginTop: Layout.spacing * 2,
    marginBottom: Layout.spacing,
  },
  titleRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginRight: Layout.spacing,
  },
  title: {
    width: '90%',
  },
}

export default EventDetailComponent
