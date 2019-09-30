import {Alert} from 'react-native'
import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

import _ from 'lodash'

import {authSelector} from '../reducers/user/auth';
import {noAuthSelector} from '../reducers/user/noAuth';


const mapStateToProps = (state) => ({
  user: authSelector(state),
  noAuth: noAuthSelector(state),
})

export default compose(
  withNavigation,
  connect(mapStateToProps),
  withHandlers({
    onAction: ({
      user, noAuth, onActionCall, navigation,
    }) => (params) => {
      if (!_.isEmpty(user) && !user.verified) {
        return Alert.alert(
          'Bestätigung Emailadresse',
          'Wir haben dir eine Email gesendet. Bitte bestätige den Link, damit du alle Funktionen nutzen kannst.',
        )
      }

      if (_.isEmpty(user) && noAuth) {
        return Alert.alert('Authentifizierung erforderlich', 'Um diese Funktion verwenden zu können, müssen Sie sich authentifizieren.', [
          {
            text: 'Cancel',
            onPress: () => console.log('cancelced'),
          },
          {
            text: 'Benutzerkonto erstellen',
            onPress: () => navigation.navigate('Auth'),
          },
        ])
      }
      
      return onActionCall(params)
    },
  }),
)
