/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-03 19:30:39
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-09 18:16:45
 */
import React from 'react'
import EventCardList from '../../../components/EventCardList/EventCardList.component';

const EventList = ({events}) => (
  <EventCardList
    horizontal
    events={events}
  />
)

export default EventList
