import React from 'react'
import TilePicker from '../TilePicker/TilePicker';
import Typography from '../Typography/Typography';

export default ({categories, setSelectedCategory, isSelected}) => (
  <>
    <Typography variant='label'>Categories</Typography>
    <TilePicker options={categories} isSelected={isSelected} setSelected={setSelectedCategory} />
  </>
)
