/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-02 12:53:17
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 13:29:46
 */
import {createDrawerNavigator} from 'react-navigation'
import MainNavigator from './MainNavigator';
import SearchContainer from '../screens/Search/Search.container';
import MyEventsContainer from '../screens/Events/MyEvents.container';
import MapViewContainer from '../screens/MapView/MapView.container';
import DrawerContainer from '../components/Drawer/Drawer.container';
import {normalize} from '../helpers/normalize';
import ProfileContainer from '../screens/Profile/Profile.container';
import LegalInformation from '../screens/LegalInformation/LegalInformation.component';

export default createDrawerNavigator({
  Main: {
    screen: MainNavigator,
  },
  Search: {
    screen: SearchContainer,
  },
  Map: {
    screen: MapViewContainer,
  },
  MyEvents: {
    screen: MyEventsContainer,
  },
  Profile: {
    screen: ProfileContainer,
  },
  Info: {
    screen: LegalInformation,
  },
}, {
  drawerWidth: normalize(230),
  contentComponent: DrawerContainer,
})
