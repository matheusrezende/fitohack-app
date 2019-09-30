/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-18 10:12:33
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 15:58:26
*/
import {createStackNavigator} from 'react-navigation'
import React from 'react'

import {normalize} from '../helpers/normalize';
import BackButton from '../components/BackButton/BackButton';
import ChangePassword from '../screens/ChangePassword';
import Colors from '../constants/Colors';
import EventDetail from '../screens/EventDetail';
import EventDetailMapContainer from '../screens/EventDetailMap/EventDetailMap.container';
import EventSuccess from '../screens/EventSuccess';
import FavoritesContainer from '../screens/Events/FavoriteEvents.container';
import Home from '../screens/Home';
import LegalInformation from '../screens/LegalInformation/LegalInformation.component';
import MapViewContainer from '../screens/MapView/MapView.container';
import ModalContainer from '../screens/Modal/Modal.container';
import MyEventsContainer from '../screens/Events/MyEvents.container';
import NearEventsContainer from '../screens/Events/NearEvents.container';
import NewEvent from '../screens/NewEvent';
import Profile from '../screens/Profile';
import ReportEvent from '../screens/ReportEvent';
import Search from '../screens/Search';
import SearchByCategoryContainer from '../screens/Events/SearchByCategory.container';
import SearchEventsContainer from '../screens/SearchResults/SearchEvents.container';
import SearchModalContainer from '../screens/SearchModal/SearchModal.container';
import UpcomingEventsContainer from '../screens/Events/UpcomingEvents.container';
import UpdateEvent from '../screens/UpdateEvent';

const main = createStackNavigator({
  Home,
  Search,
  NewEvent,
  EventSuccess,
  Profile,
  ChangePassword,
  EventDetail,
  ReportEvent,
  UpdateEvent,
  Info: {
    screen: LegalInformation,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton
        onPress={() => navigation.goBack()}
      />,
      headerTitle: 'Einstellungen',
    }),
  },
  SearchResults: {
    screen: SearchEventsContainer,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton
        onPress={() => navigation.goBack()}
      />,
      headerTitle: 'Results',
    }),
  },
  MyEvents: {
    screen: MyEventsContainer,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton
        onPress={() => navigation.goBack()}
      />,
      headerTitle: 'My Events',
    }),
  },
  Favorites: {
    screen: FavoritesContainer,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton
        onPress={() => navigation.goBack()}
      />,
      headerTitle: 'Favorites',
    }),
  },
  NearEvents: {
    screen: NearEventsContainer,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton
        onPress={() => navigation.goBack()}
      />,
      headerTitle: 'Events in der Nähe',
    }),
  },
  UpcomingEvents: {
    screen: UpcomingEventsContainer,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton
        onPress={() => navigation.goBack()}
      />,
      headerTitle: 'Anstehende Events',
    }),
  },
  SearchByCategoryEvents: {
    screen: SearchByCategoryContainer,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton
        onPress={() => navigation.goBack()}
      />,
    }),
  },
  
  
}, {
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: Colors.background,
      elevation: 0,
      borderBottomWidth: 0,
      
    },
    headerTitleStyle: {
      fontFamily: 'lato-regular',
      fontSize: normalize(18),
    },
    headerTintColor: '#fff',
  }),
  
})

export default createStackNavigator(
  {
  
    Main: {
      screen: main,
    },
    Modal: {
      screen: ModalContainer,
    },
    MapModal: {
      screen: EventDetailMapContainer,
    },
    SearchModal: {
      screen: SearchModalContainer,
    },
    Map: {
      screen: MapViewContainer,
    },
  
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)
