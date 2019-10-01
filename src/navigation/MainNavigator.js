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
import Colors from '../constants/Colors';
import EventSuccess from '../screens/EventSuccess';
import Home from '../screens/Home';
import MapViewContainer from '../screens/MapView/MapView.container';
import ModalContainer from '../screens/Modal/Modal.container';
import MyEventsContainer from '../screens/Events/MyEvents.container';
import NewEvent from '../screens/NewEvent';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import SearchByCategoryContainer from '../screens/Events/SearchByCategory.container';
import EventDetailModalComponent from '../screens/EventDetailModal/EventDetailModal.component';


const main = createStackNavigator({
  Home,
  Search,
  NewEvent,
  EventSuccess,
  Profile,
  MyEvents: {
    screen: MyEventsContainer,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton
        onPress={() => navigation.goBack()}
      />,
      headerTitle: 'My Events',
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
    Map: {
      screen: MapViewContainer,
    },
    EventDetailModal: {
      screen: EventDetailModalComponent,
      navigationOptions: {
        gestureResponseDistance: {vertical: 1000}, // default is 135 },
      },
    },
  },
  {
    mode: 'modal',
    
    headerMode: 'none',
    transparentCard: true,
    cardStyle: {opacity: 1},
  },
)
