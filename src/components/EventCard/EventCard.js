import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import Card from '../Card/Card';
import placeholder from '../../assets/images/placeholder.jpg'
import Layout from '../../constants/Layout';
import Typography from '../Typography/Typography';
import FavoriteContainer from '../Favorite/Favorite.container';

const EventCard = ({
  title,
  startingDay,
  startingDayOfTheWeek,
  month,
  _id,
  picture,
  cardStyle,
  onPress,
  beginning,
  address,
  ending,
  timezone, author,
  categoriesNames,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Card style={{...styles.card, ...cardStyle}}>
      <View style={{...styles.column}}>
        <View style={{...styles.maxWidth}}>
          <View style={styles.infoColumn}>
            <View style={styles.dateRow} >
              <Typography variant='date'>{startingDay}</Typography>
              <View style={styles.dateTypographyContainer}>
                <Typography variant='caption'>{month}</Typography>
                <Typography variant='caption' color='gray'>{startingDayOfTheWeek}</Typography>
              </View>
            </View>
            <View>
              <Typography variant='caption' color='gray' numberOfLines={1}>{categoriesNames}</Typography>
              <View style={{marginTop: Layout.spacing / 2}}>
                <Typography variant='title' numberOfLines={2} ellipsizeMode='middle'>
                  {title}
                </Typography>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <Image source={picture ? {uri: picture, cache: 'force-cache'} : placeholder} style={{...styles.maxWidth, ...styles.image}} />
        <FavoriteContainer
          eventId={_id} event={{
            beginning, address, title, ending, timezone, author,
          }} disableSpacing
        />
      </View>
    </Card>
  </TouchableOpacity>
)

const styles = {
  card: {
    width: '100%',
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoColumn: {
    flex: 1,
    marginHorizontal: Layout.spacing * 2,
    marginTop: Layout.spacing * 2,
    marginBottom: Layout.spacing * 2.5,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  maxWidth: {
    height: '100%',
    width: '100%',
  },
  image: {
    opacity: 0.8,
    position: 'absolute',
  },
  dateRow: {
    flexDirection: 'row',
  },
  dateTypographyContainer: {
    marginLeft: Layout.spacing / 2,
    justifyContent: 'space-around',
    paddingVertical: Layout.spacing / 2,
  },
}
export default EventCard
