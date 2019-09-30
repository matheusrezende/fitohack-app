/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 18:18:24
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-06 21:33:45
 */
import React from 'react'
import _ from 'lodash'
import {View, StyleSheet} from 'react-native'
import EventListLabelComponent from '../../../components/EventListLabel/EventListLabel.component';
import RenderHandler from './RenderHandler';
import Layout from '../../../constants/Layout';

export default ({
  label, onPress, hideAll, events, ...props
}) => !_.isEmpty(events) &&
  <React.Fragment>
    <EventListLabelComponent hideAll={hideAll} label={label} onPress={onPress} />
    <View style={styles.container}>
      <RenderHandler events={events} {...props} />
    </View>
  </React.Fragment>
  
const styles = StyleSheet.create({
  container: {
    paddingTop: Layout.spacing,
    paddingBottom: Layout.spacing * 2,
  },
})
