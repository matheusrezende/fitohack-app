/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-15 08:47:41
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 09:48:30
 */
import {LinearGradient} from 'expo'
import {View, ImageBackground, ScrollView, Alert} from 'react-native'
import React from 'react'

import Button from '../../components/Button/Button';
import Colors from '../../constants/Colors';
import Divider from '../../components/Divider/Divider';
import EventTopImage from '../../assets/icons/event-top.png'
import IconButton from '../../components/IconButton/IconButton';
import IconLabelRow from '../../components/IconLabelRow/IconLabelRow';
import Layout from '../../constants/Layout';
import Typography from '../../components/Typography/Typography';

/* eslint-disable */
const EventSuccess = ({
  newEvent, goToHome, goToMyEvents, askUserForSaving, event,
}) => (
  <View style={styles.container}>
    <ImageBackground
      source={EventTopImage}
      style={styles.imageStyle}
    />
    <LinearGradient
      style={styles.containerStyle}
      colors={Colors.darkGradient}
      start={[0, 0]}
      end={[0, 0.3]}
    />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle} >
      <View style={styles.roundCircleContainer}>
        <View style={styles.roundCircle} >
          <IconButton icon='success' />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Typography variant='headline' color='white'>Fantastisch!</Typography>
          <View style={styles.eventDescription}>
            <Typography textAlign='center'>
              Du has das Event <Typography variant='title'>"{event.title}" </Typography>erfolgreich hinzugefügt. Jetzt kann es los gehen!
            </Typography> 
          </View>
          <Button label='Home' gradient fullWidth onPress={goToHome} />
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerWidth}>
            <Divider />
          </View>
          <Typography>ODER</Typography>
          <View style={styles.dividerWidth}>
            <Divider />
          </View>
        </View>
        <IconLabelRow icon='calendarGradient' label='Event in meinen Kalender eintragen' onPress={askUserForSaving} />
        <IconLabelRow icon='share' label='Event teilen' onPress={() => Alert.alert('Not implemented!')} />
        <IconLabelRow icon='plus' onPress={newEvent} label='Weiteres Event erstellen' />
        <IconLabelRow icon='rightArrow' onPress={goToMyEvents} label='Zu meinen Events' />
      </View>
    </ScrollView>
  </View>
)

EventSuccess.defaultProps = {
  event: {}
}

const styles = {
  dividerContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Layout.spacing * 2, marginBottom: Layout.spacing * 4,
  },
  dividerWidth: {
    width: '35%',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    marginTop: Layout.spacing * 6,
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Layout.spacing * 3,
  },
  eventDescription: {
    marginTop: Layout.spacing * 2,
    marginHorizontal: Layout.spacing * 2,
    marginBottom: Layout.spacing * 4,
  },
  textContainer: {
    marginTop: Layout.spacing * 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Layout.spacing * 2,
  },
  contentContainerStyle: {
    marginBottom: Layout.spacing * 20,
    paddingTop: Layout.spacing * 5,
  },
  roundCircleContainer: {
    position: 'absolute',
    top: Layout.spacing * 5,
    zIndex: 10000,
    width: Layout.window.width,
    alignItems: 'center',
  },
  roundCircle: {
    height: Layout.spacing * 12,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: Colors.grayBackground,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: Layout.window.width,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -90,
    right: 0,
    bottom: '60%',
    left: 0,
  },
  containerStyle: {
    position: 'absolute',
    top: -90,
    right: 0,
    bottom: '60%',
    left: 0,
  },
}

export default EventSuccess
