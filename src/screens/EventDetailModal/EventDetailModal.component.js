import React from 'react';
import {View, Image, Text} from 'react-native';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import Icons from '../../constants/Icons';

export default ({navigation}) => {
  const event = navigation.getParam('event');
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.header}>
          <View style={styles.roundCircleContainer}>
            <Image style={styles.roundCircle} cache source={event.author.picture ? {uri: event.author.picture, cache: 'force-cache'} : Icons.profile} />
          </View>
          <View style={styles.roundCircleContainer}>
            <Image style={styles.roundCircle} cache source={event.author.picture ? {uri: event.author.picture, cache: 'force-cache'} : Icons.profile} />
          </View>
        </View>
        <Text>
        koeeeeeeee
        </Text>
      </View>
    </View>
  );
}
 

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  subcontainer: {
    height: Layout.window.height / 2.5,
    backgroundColor: Colors.grayBackground,
  },
  header: {
    flexDirection: 'row',
    height: 300,
    justifyContent: 'space-between',
  },
  roundCircleContainer: {
    position: 'absolute',
    top: Layout.spacing * 14,
    zIndex: 10000,
    width: Layout.window.width,
    alignItems: 'center',
  },
  roundCircle: {
    height: Layout.spacing * 12,
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 45,
    borderColor: Colors.white,
    borderWidth: 2,
    backgroundColor: Colors.grayBackground,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
}
