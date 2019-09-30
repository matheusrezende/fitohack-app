/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 08:11:30
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-13 08:12:39
 */
import React from 'react'
import {compose, withStateHandlers} from 'recompose';
import {Typography} from '../../components';

const DescriptionComponent = ({description, showMore, changeNumberOflines}) => {
  if (showMore) {
    return (
      <Typography
        variant='body'
      >{description}
      </Typography>
    )
  }

  return (
    <Typography
      variant='body'
    >{`${description.substr(0, 100)}...`} <Typography onPress={changeNumberOflines} color='link'>mehr</Typography>
    </Typography>
  )
}


DescriptionComponent.defaultProps = {
  description: '',
}

export default compose(withStateHandlers({showMore: false}, { // Handle description number of lines
  changeNumberOflines: () => () => ({
    showMore: true,
  }),
}))(DescriptionComponent)
