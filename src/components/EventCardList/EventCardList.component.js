import React from 'react'
import {FlatList, View, RefreshControl} from 'react-native'
import EventCard from '../EventCard/EventCard.container';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

const EventCardList = ({
  horizontal, events, onRefresh, refreshing,
}) => (
  <View style={styles.list}>
    <FlatList
      refreshControl={!horizontal ? <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.link} /> : undefined}
      horizontal={horizontal}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      data={events}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <EventCard {...item} cardStyle={horizontal && styles.container} />}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
)

EventCardList.defaultProps = {
  events: [],
}

const styles = {
  container: {
    width: Layout.window.width * 0.8,
  },
  divider: {
    width: 10, height: 10,
  },
  list: {
    marginBottom: Layout.spacing * 2,
  },
}
export default EventCardList
