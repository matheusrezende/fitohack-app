/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 07:08:23
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-14 09:12:57
 */
import React from 'react'
import _ from 'lodash'
import {View, StyleSheet} from 'react-native'
import EventCardList from '../../components/EventCardList/EventCardList.component';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import EventListLabelComponent from '../../components/EventListLabel/EventListLabel.component';
import {Typography} from '../../components';

export default ({
  events,
  loading,
  label,
  getData,
}) => (
  <View style={styles.container}>
    <EventListLabelComponent hideAll label={label} />
    <View style={styles.listContainer}>
      {!loading && _.isEmpty(events) ?
        <Typography variant='caption'>No events found.</Typography> :
        <EventCardList events={events} onRefresh={getData} refreshing={loading} />
      }
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: Layout.spacing * 2,
    flex: 1,
  },
  listContainer: {
    marginTop: Layout.spacing,
  },
})
