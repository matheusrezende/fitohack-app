/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 11:51:00
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 13:51:53
 */
import {ScrollView, StyleSheet, View} from 'react-native';
import HTMLView from 'react-native-htmlview'
import React from 'react'

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import legalInformation from '../../constants/LegalInformation';

const LegalInformation = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <ScrollView>
        <HTMLView value={legalInformation} stylesheet={htmlViewStyles} />
      </ScrollView>
    </View>
  </View>
)

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: Layout.spacing * 8,
    paddingHorizontal: Layout.spacing * 2,
  },
  content: {
    flex: 1,
    padding: Layout.spacing * 2,
    borderWidth: 2,
    borderRadius: 10,
  },
}
/* eslint-disable */
const htmlViewStyles = StyleSheet.create({
  h1: {
    color: 'white',
    margin: 0,
  },
  h2: {
    color: 'white',
    margin: 0,
  },
  span: {
    color: 'white',
    margin: 0,
  },
  li: {
    color: 'white',
    margin: 0,
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});

/* eslint-enable */

export default LegalInformation
