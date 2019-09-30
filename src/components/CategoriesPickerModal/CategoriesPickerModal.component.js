import React from 'react'
import {View} from 'react-native'
import Typography from '../Typography/Typography';
import IconButton from '../IconButton/IconButton';
import Layout from '../../constants/Layout';

const CategoriesPickerModal = ({categories, selected, onSelectChange}) => categories.map((item, index) => (
  <View style={styles.row} key={index}>
    <Typography variant='title'>{item.title}</Typography>
    <IconButton
      icon={selected.includes(item._id) ? 'checked' : 'unChecked'}
      onPress={onSelectChange(item._id)}
    />
  </View>
))

CategoriesPickerModal.defaultProps = {
  categories: [],
}


const styles = {
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Layout.spacing * 5,
    marginVertical: Layout.spacing,
    marginTop: Layout.spacing * 2,
  },
}
export default CategoriesPickerModal
