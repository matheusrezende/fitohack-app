import {View} from 'react-native'
import React from 'react'

import Colors from '../../constants/Colors';
import DrawerRow from '../DrawerRow/DrawerRow.component';
import Layout from '../../constants/Layout';
import Typography from '../Typography/Typography';
import appJSON from '../../../app.json'
import {LinearGradient} from 'expo-linear-gradient';

const Drawer = ({navigate, logout, onAction}) => (
  <View style={styles.container}>
    <LinearGradient
      colors={Colors.gradient}
      start={[0.5, 0]}
      end={[0.5, 1]}
      style={styles.gradient}
    >
      <View style={styles.contentContainer}>
        <View style={styles.itemsColumn}>
          <DrawerRow active label='Home' icon='home' onPress={navigate('Home')} />
          <DrawerRow label='Map' icon='drawerMap' onPress={navigate('Map')} />
          <DrawerRow label='Favorites' icon='heartWhite' onPress={() => onAction('Favorites')} />
          <DrawerRow label='My Events' icon='calendarWhiteDrawer' onPress={() => onAction('MyEvents')} />
          <DrawerRow label='Profile' icon='profile' onPress={navigate('Profile')} />
        </View>
        <View style={styles.itemsColumn}>
          <DrawerRow label='Einstellungen' icon='info' onPress={navigate('Info')} />
          <DrawerRow label='Logout' icon='logout' onPress={logout} />
          <View style={styles.versionContainer}>
            <Typography variant='body' color='white'>Version: {appJSON.expo.version}</Typography>
          </View>
        </View>
      </View>
    </LinearGradient>
  </View>
)

const styles = {
  versionContainer: {
    marginLeft: Layout.spacing * 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemsColumn: {
    width: '100%',
  },
  contentContainer: {
    paddingVertical: Layout.spacing * 8,
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1, backgroundColor: Colors.background,
  },
  gradient: {
    height: '100%',
  }
}
export default Drawer
