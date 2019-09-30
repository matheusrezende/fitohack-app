/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-05 17:25:09
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-20 07:22:07
 */
import {View, ScrollView, Keyboard} from 'react-native'
import {reduxForm} from 'redux-form'
import React from 'react'

import {Typography} from '../../components';
import {asyncValidate} from '../NewEvent/NewEvent.container';
import Colors from '../../constants/Colors';
import IconButton from '../../components/IconButton/IconButton';
import Layout from '../../constants/Layout';
import LinkButton from '../../components/LinkButton/LinkButton';

const FormModal = ({
  onClose, navigation, keyboardOn,
}) => (
  <View style={styles.container} onPress={Keyboard.dismiss}>
    <View style={styles.buttonsRow} onPress={Keyboard.dismiss}>
      <IconButton icon='close' onPress={navigation.getParam('clear')} />
      <LinkButton disableSpacing onPress={onClose} label='Fertig' />
    </View>

    <View onPress={Keyboard.dismiss} style={{...styles.formContainer, ...(keyboardOn ? {maxHeight: Layout.spacing * 25} : {})}}>
      <Typography variant='headline'>{navigation.getParam('title', '')}</Typography>
      <ScrollView contentContainerStyle={styles.scrollViewStyle} showsVerticalScrollIndicator={false}>
        {navigation.getParam('component', null)}
      </ScrollView>
    </View>
  </View>
)

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Layout.spacing * 8,
    padding: Layout.spacing * 2,
  },
  formContainer: {
    marginTop: Layout.spacing * 10,
  },
  scrollViewStyle: {
    width: '97%',
    paddingBottom: Layout.spacing * 10,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}

export default reduxForm({
  form: 'newEvent',
  destroyOnUnmount: false,
  asyncValidate,
  asyncChangeFields: ['addressString'],
})(FormModal)
