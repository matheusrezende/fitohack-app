import React from 'react'
import {View} from 'react-native'
import Tile from '../Tile/Tile';

const TilePicker = ({options}) => (
  <View style={styles.tilesContainer}>
    {options.map((item, index) => (
      <Tile key={index} {...item} />
    ))}
  </View>
)

TilePicker.defaultProps = {
  options: [],
}
const styles = {
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },

}
export default TilePicker
