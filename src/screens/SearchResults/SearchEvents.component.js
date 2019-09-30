/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-14 07:38:58
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 16:34:32
 */
import React from 'react'
import _ from 'lodash'
import {View, ScrollView, ImageBackground} from 'react-native'
import Colors from '../../constants/Colors';
import EventListLabelComponent from '../../components/EventListLabel/EventListLabel.component';
import Layout from '../../constants/Layout';
import EventCardList from '../../components/EventCardList/EventCardList.component';
import {Typography, Button} from '../../components';
import EventTopImage from '../../assets/icons/event-top.png'
import IconButton from '../../components/IconButton/IconButton';

const SearchEvents = ({events, openMap, newEvent}) => (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {_.map(events, (value, key) => (
          <React.Fragment key={key}>
            <EventListLabelComponent label={key} />
            <View style={styles.eventsContainer}>
              <EventCardList events={value} horizontal />
            </View>
          </React.Fragment>
        ))}
      </View>

      <ImageBackground style={styles.footerStyle} source={EventTopImage}>
        <Typography variant='heading' color='grayBackground'>Event nicht gefunden?</Typography>
        <Typography variant='body' color='grayBackground'>Erstelle dein eigenes öffentliches Event.</Typography>
        <Button label='Anmelden' onPress={newEvent} labelColor='grayBackground' style={styles.footerButtonStyle} />
      </ImageBackground>
    </ScrollView>
    <View style={styles.mapIcon}>
      <IconButton icon='mapIcon' size={50} onPress={openMap} />
    </View>
  </View>
)

const styles = {
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingTop: Layout.spacing * 2,
  },
  content: {
    paddingHorizontal: Layout.spacing * 2,
  },

  mapIcon: {
    position: 'absolute',
    zIndex: 300,
    right: Layout.spacing * 4,
    bottom: Layout.spacing * 6,
  },
  eventsContainer: {
    paddingBottom: Layout.spacing,
    paddingTop: Layout.spacing,
  },
  footerStyle: {
    padding: Layout.spacing * 4, height: Layout.window.height / 3.5, justifyContent: 'space-between',
  },
  footerButtonStyle: {
    borderColor: Colors.grayBackground, borderWidth: 2, width: '50%',
  },
}
export default SearchEvents
