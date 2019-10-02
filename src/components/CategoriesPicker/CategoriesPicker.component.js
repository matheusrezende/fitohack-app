import React from 'react'
import TilePicker from '../TilePicker/TilePicker';
import Typography from '../Typography/Typography';

export default ({categories, setSelectedCategory, isSelected}) => (
  <React.Fragment>
    <Typography variant='label'>Categories</Typography>
    <TilePicker tyleStyle={{height: '30%', width: '30%'}} options={categories} isSelected={isSelected} setSelected={setSelectedCategory} />
  </React.Fragment>
)
