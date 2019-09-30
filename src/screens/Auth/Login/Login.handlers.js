import {SubmissionError} from 'redux-form';

import {AUTH} from '../../../constants/StorageKeys';
import {saveToStorage} from '../../../helpers/storageHelper';

export const onFormSubmit = ({login, navigation}) => (value) => login(value)
  .then((response) => {
    saveToStorage(AUTH, response)
    navigation.navigate('App')
  })
  .catch(() => {
    const errors = {
      email: 'Wrong Credentials!',
      password: 'Wrong Credentials!',
    }
    throw new SubmissionError(errors)
  })


export const signInWithoutAuthentication = ({setNoAuth, navigation}) => () => {
  setNoAuth(true)
  navigation.navigate('App')
}

