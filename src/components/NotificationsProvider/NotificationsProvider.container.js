import {Notifications} from 'expo';

import {Permissions} from 'expo-permissions';
import React, {PureComponent} from 'react';

const getiOSNotificationPermission = async () => {
  const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

class NotificationsProvider extends PureComponent {
  componentDidMount() {
    getiOSNotificationPermission()
    this.listenForNotifications()
  }

  listenForNotifications = () => {
    Notifications.addListener((notification) => {
      console.log(notification)
    });
  };

  _handleButtonPress = () => {
    const localnotification = {
      title: 'Example Title!',
      body: 'https://cdn1.iconfinder.com/data/icons/curious-shop-1/80/curiosshop-02-512.png',
      image: 'https://cdn1.iconfinder.com/data/icons/curious-shop-1/80/curiosshop-02-512.png',
      localnotification: false,
      android: {
        sound: true,
        icon:
            'https://cdn1.iconfinder.com/data/icons/curious-shop-1/80/curiosshop-02-512.png',
      },
      ios: {
        sound: true,
        image: 'https://cdn1.iconfinder.com/data/icons/curious-shop-1/80/curiosshop-02-512.png',
      },
    };
    let sendAfterFiveSeconds = Date.now();
    sendAfterFiveSeconds += 5000;

    const schedulingOptions = {time: sendAfterFiveSeconds};
    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions,
    );
  };


  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

export default NotificationsProvider
