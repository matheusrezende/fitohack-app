import {View} from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import DrawerRow from '../DrawerRow/DrawerRow.component';
import Layout from '../../constants/Layout';


const Drawer = ({navigate, logout}) => (
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
          
          <DrawerRow label='Profile' icon='profile' onPress={navigate('Profile')} />
        </View>
        <View style={styles.itemsColumn}>
          <DrawerRow label='Logout' icon='logout' onPress={logout} />
          
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
  },
}
export default Drawer
