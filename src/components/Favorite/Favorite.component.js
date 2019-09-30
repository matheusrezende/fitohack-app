/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 15:45:40
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 07:58:30
 */
import React from 'react'
import {View} from 'react-native'
import IconButton from '../IconButton/IconButton';
import Layout from '../../constants/Layout';
import Spinner from '../Spinner/Spinner';

export default ({
  isFavorite, onAction, loading, disableSpacing,
}) => {
  if (loading) {
    return (
      <View style={!disableSpacing ? styles.container : {}}>
        <Spinner />
      </View>
    )
  }
  return (
    <View style={!disableSpacing ? styles.container : {}}>
      <IconButton onPress={onAction} icon={isFavorite ? 'favorited' : 'unfavorited'} />
    </View>
  )

}


const styles = {
  container: {
    marginRight: Layout.spacing * 2,
  },
}
