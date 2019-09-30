import {createSwitchNavigator} from 'react-navigation';
import AuthNavigator from './AuthNavigator'
import RootNavigator from './AppNavigator'
import AuthLoadingScreen from '../screens/Auth/AuthLoading/AuthLoading.container';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
