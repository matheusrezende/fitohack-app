import {ActionSheetProvider} from '@expo/react-native-action-sheet'
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {Asset} from 'expo-asset';

import {PersistGate} from 'redux-persist/integration/react'
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
import React from 'react';

import NotificationsProvider from './components/NotificationsProvider/NotificationsProvider.container'
import RootContainer from './RootContainer';
import store from './config/Store';


const persistor = persistStore(store)
//eslint-disable-next-line
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      /* eslint-disable global-require */
      require('./assets/icons/success.png'),
      require('./assets/icons/warning.png'),
      require('./assets/icons/calendar.png'),
      require('./assets/icons/calendar-white.png'),
      require('./assets/icons/camera.png'),
      require('./assets/icons/mail.png'),
      require('./assets/icons/logo.png'),
      require('./assets/icons/drawerIcon.png'),
      require('./assets/icons/heart-white.png'),
      require('./assets/icons/search.png'),
      require('./assets/icons/heart.png'),
      require('./assets/icons/heart-o.png'),
      require('./assets/icons/alle.png'),
      require('./assets/icons/location.png'),
      require('./assets/icons/drawerMap.png'),
      require('./assets/icons/location-o.png'),
      require('./assets/icons/back.png'),
      require('./assets/icons/arrowRight.png'),
      require('./assets/icons/button.png'),
      require('./assets/icons/close.png'),
      require('./assets/icons/Checked.png'),
      require('./assets/icons/home.png'),
      require('./assets/icons/Unchecked.png'),
      require('./assets/icons/mapDot.png'),
      require('./assets/icons/mark.png'),
      require('./assets/icons/map-marker.png'),
      require('./assets/icons/clock.png'),
      require('./assets/icons/ion-android-share-alt.png'),
      require('./assets/icons/plus.png'),
      require('./assets/icons/right-arrow.png'),
      require('./assets/icons/navigation.png'),
      require('./assets/icons/mapIcon.png'),
      require('./assets/icons/logout.png'),
      require('./assets/icons/profile.png'),
      require('./assets/icons/info.png'),
      require('./assets/icons/camera-gradient.png'),
      require('./assets/icons/settings.png'),
      require('./assets/icons/event-top.png'),
    ]),
    Font.loadAsync({
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      /* eslint-disable */ 
      'lato-light': require('./assets/fonts/Lato-Light.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
      'helvetica-light': require('./assets/fonts/Helvetica-Light.ttf'),
      'helvetica-regular': require('./assets/fonts/Helvetica-Regular.ttf'),
      'helvetica-bold': require('./assets/fonts/Helvetica-Bold.ttf')
      /* eslint-enable */
    }),
  ]);

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };
  
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <ActionSheetProvider>
        <NotificationsProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {Platform.OS === 'ios' && <StatusBar barStyle='light-content' />}
              <RootContainer />
            </PersistGate>
          </Provider>
        </NotificationsProvider>
      </ActionSheetProvider>
    );
    
  }
}
