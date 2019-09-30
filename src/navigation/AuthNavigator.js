import {createStackNavigator} from 'react-navigation'
import LoginScreen from '../screens/Auth/Login/Login.container';
import SignupScreen from '../screens/Auth/Signup/Signup.container';
import Colors from '../constants/Colors';
import RecoverPasswordContainer from '../screens/Auth/RecoverPassword/RecoverPassword.container';

export default createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  RecoverPassword: RecoverPasswordContainer,
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: Colors.background,
      elevation: 0,
      borderBottomWidth: 0,

    },
    headerTintColor: '#fff',
  },
})
