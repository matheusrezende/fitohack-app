/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-16 07:08:10
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 07:09:32
 */
import React from 'react'
import LinkButton from '../LinkButton/LinkButton';
import Spinner from '../Spinner/Spinner';

export default ({loading, submit}) => {
  if (loading) {
    return <Spinner />

  }
  return <LinkButton onPress={submit} label='Fertig' />
  
}
