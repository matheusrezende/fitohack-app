import {REGEX_EMAIL, REGEX_PASSWORD} from '../constants/Regex';

export const required = (value) => (value == null ? 'Required' : undefined)

export const validateEmail = (email) => {
  if (!email) {
    return 'Email is required.'
  }
  if (!REGEX_EMAIL.test(email)) {
    return 'Invalid Email'
  }
  return undefined
}


export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required.'
  }
  if (password.length < 8) {
    console.log('length')
    return 'Password should have at least 8 characters'
  }

  if (!REGEX_PASSWORD.test(password)) {
    console.log('regex')
    return 'Password should contain at least one letter and one number'
  }
  
  return undefined
}
