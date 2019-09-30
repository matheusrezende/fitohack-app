/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-09 17:58:02
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-08-09 17:58:02
 */
import _ from 'lodash'
import {branch, renderComponent} from 'recompose'
import LoadingEventList from './LoadingEventList';
import EventList from './EventList';
import EmptyEventList from './EmptyEventList';

const EventListHandler = branch(
  ({events}) => _.isEmpty(events),
  renderComponent(EmptyEventList),
  renderComponent(EventList),
)()

export default branch(
  ({loading}) => !!loading,
  renderComponent(LoadingEventList),
  renderComponent(EventListHandler),
)()
