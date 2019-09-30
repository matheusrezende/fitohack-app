/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 08:22:34
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-08-17 08:22:34
 */
import React, {PureComponent} from 'react'
import {Platform, Keyboard} from 'react-native'

const withKeyboardStatus = (WrappedComponent) => class extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      keyboardOn: false,
    }
  }
  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        this.setState({keyboardOn: true});
      },
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        this.setState({keyboardOn: false});
      },
    );
  }
  
  componentWillUnmount() {
    this.keyboardWillShowSub && this.keyboardWillShowSub.remove(); //eslint-disable-line
    this.keyboardWillHideSub && this.keyboardWillHideSub.remove(); //eslint-disable-line
  }
  

  render() {
    return <WrappedComponent {...this.props} {...this.state} />
  }
}

export default withKeyboardStatus
