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
import cycling from '../../assets/categories/cycling.png';
import run from '../../assets/categories/run.png';
import skating from '../../assets/categories/skate.png';
import team_sport from '../../assets/categories/team_sport.png';
import workout from '../../assets/categories/workout.png';
import yoga from '../../assets/categories/yoga.png';

const images = {
  cycling,
  skating,
  'team\ sport': team_sport,
  workout,
  yoga,
  run,
};

export default ({
  event, joinEvent, user,
}) => {
  console.log(user, user._id)
  console.log(event.participants.map((item) => item._id))
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
          <Tile shouldNavigatew tileStyle={{height: 50, width: 50}} title={event.categories[0].title} icon={images[event.categories[0].title.toLowerCase()]} />
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
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            data={event.participants}
            renderItem={({item}) => {
              console.log('participants', item)
              return <Image style={styles.participants} cache source={{uri: item.picture}} />
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.paddingVertical}>
          {
            event.author._id === user._id || event.participants.map((item) => item._id).includes(user._id) ?
              null :
              <Button gradient label='JOIN' onPress={() => joinEvent(event._id)} />
          }
        </View>
      </View>
    </View>
  )
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
  divider: {
    height: 10, width: 10,
  },

  paddingVertical: {
    paddingVertical: 10,
  },
}
