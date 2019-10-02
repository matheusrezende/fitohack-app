import React from 'react';
import moment from 'moment';
import {View, FlatList, Image} from 'react-native';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import Icons from '../../constants/Icons';
import Typography from '../../components/Typography/Typography';
import Tile from '../../components/Tile/Tile';
import Button from '../../components/Button/Button';
import {DATE_RANGE} from '../../constants/DateFormats';

export default ({navigation}) => {
  const event = navigation.getParam('event');
  console.log(event)
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.header}>
          <View style={styles.descriptionContainer}>
            <Image style={styles.roundCircle} cache source={event.author.picture ? {uri: event.author.picture, cache: 'force-cache'} : Icons.profile} />
            <View style={styles.description}>
              <Typography>{event.title}</Typography>
              <Typography>{event.description}</Typography>
              <Typography>{event.author.username}</Typography>
            </View>
          </View>
          <Tile title={event.categories[0].title} />
        </View>
        <View style={styles.row}>
          <Typography variant='label'>When?</Typography>
          <View style={styles.padding}>
            <Typography >{moment(event.createdAt).format(DATE_RANGE)}</Typography>
          </View>
        </View>
        <View style={styles.row}>
          <Typography variant='label'>Where?</Typography>
          <View style={styles.padding}>
            <Typography>{event.address.name}</Typography>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Typography variant='label'>Participants?</Typography>
          <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{height: 10, width: 10}} />}
            data={event.participants}
            renderItem={({item}) => {
              console.log('participants', item)
              return <Image style={styles.participants} cache source={{uri: item.picture}} />
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Button gradient label='JOIN' />
        </View>
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
    height: Layout.window.height / 2,
    backgroundColor: Colors.grayBackground,
    justifyContent: 'flex-start',
    padding: Layout.spacing * 2,

  },
  header: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
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
  participants: {
    height: Layout.spacing * 10,
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 40,
    borderColor: Colors.white,
    borderWidth: 2,
    backgroundColor: Colors.grayBackground,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  descriptionContainer: {
    flexDirection: 'row',

  },
  description: {
    padding: Layout.spacing * 2,
  },
  row: {
    flexDirection: 'row',
  },
  padding: {
    paddingLeft: Layout.spacing * 3,
  },
}
