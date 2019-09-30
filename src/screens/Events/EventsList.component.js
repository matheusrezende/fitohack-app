/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 07:08:23
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-10 07:13:33
 */
import React from 'react'
import {View, StyleSheet} from 'react-native'
import EventCardList from '../../components/EventCardList/EventCardList.component';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

export default ({events, loading, getData}) => (
  <View style={styles.container}>
    <EventCardList events={events} onRefresh={getData} refreshing={loading} />
  </View>
)


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: Layout.spacing * 2,
    flex: 1,
  },
})
