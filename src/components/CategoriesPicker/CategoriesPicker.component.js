import React from 'react'
import {View} from 'react-native'
import TilePicker from '../TilePicker/TilePicker';
import Typography from '../Typography/Typography';

export default ({categories}) => (
  <View>
    <Typography variant='headline'>Kategorien</Typography>
    <TilePicker options={categories} />
  </View>
)
