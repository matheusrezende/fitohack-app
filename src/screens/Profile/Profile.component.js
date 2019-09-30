/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 06:35:28
 * @Last Modified by: matheus.rezende
 * @Last Modified time: 2018-12-24 08:43:53
 */
import {
  Image,
  ImageBackground,
  Platform,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react'

import {Typography, Spinner, Button} from '../../components';
import BackButton from '../../components/BackButton/BackButton';
import CameraButtonContainer from './CameraButton/CameraButton.container';
import Colors from '../../constants/Colors';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import EventTopImage from '../../assets/icons/event-top.png'
import Icons from '../../constants/Icons';
import Layout from '../../constants/Layout';
import ProfileDataRow from './ProfileDataRow.component';
import SettingsButtonContainer from './Settings/SettingsButton.container';

const Profile = ({
  verifySuccess, verified, picture, username, numberOfFavorites, loadingProfilePicture, email, navigation, verifyAccount, verifyLoading, loading, onRefresh,
}) => (
  <View style={styles.container}>
    <ImageBackground
      source={picture ? {uri: picture, cache: 'force-cache'} : EventTopImage}
      style={styles.imageStyle}
    />
    <LinearGradient
      style={styles.containerStyle}
      colors={Colors.darkGradient}
      start={[0, 0]}
      end={[0, 0.5]}
    />
    { Platform.OS === 'android' &&
      <CustomHeader
        leftButton={<BackButton
          onPress={() => navigation.goBack()}
        />}
        rightButton={
          <SettingsButtonContainer />
        }
        title={<Typography variant='drawer'>Profile</Typography>}
      /> }
    {
      loadingProfilePicture &&
        <View
          style={styles.loadingContainer}
        >
          <Spinner />
        </View>
    }
    <ScrollView
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={loading} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.cameraContainer}>
        <CameraButtonContainer />
      </View>
      <View style={styles.roundCircleContainer}>
        <Image style={styles.roundCircle} cache source={picture ? {uri: picture, cache: 'force-cache'} : Icons.profile} />
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Typography variant='headline' color='white'>{username}</Typography>
        </View>
        <View style={styles.dataContainer}>
          <ProfileDataRow label='Username' value={`@${username}`} />
          <ProfileDataRow label='Verified' value={verified ? 'Yes' : 'No'} />
          <ProfileDataRow label='Number of Events Favorited' value={numberOfFavorites} />
          <ProfileDataRow label='Email' value={email} />
          <ProfileDataRow label='Password' value='********' />
        </View>
        {!verified && <Button label='Verify Account' gradient fullWidth onPress={verifyAccount} />}
        <View style={styles.spinnerContainer}>
          {verifyLoading && <Spinner />}
          {!verified && verifySuccess && <Typography variant='caption' textAlign='center'>An email was sent to your inbox in order to verify your account.</Typography>}
        </View>
      </View>
    </ScrollView>
  </View>
)

const styles = {
  spinnerContainer: {
    marginTop: Layout.spacing * 2,
    width: '100%',
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  imageStyle: {
    maxWidth: Layout.window.width,
    aspectRatio: 1,
    backgroundColor: Colors.grayBackground,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -90,
    right: 0,
    bottom: '60%',
    left: 0,
  },
  containerStyle: {
    position: 'absolute',
    top: (Platform.OS === 'ios' ? -90 : 0),
    right: 0,
    bottom: (Platform.OS === 'ios' ? '60%' : '50%'),
    left: 0,
  },
  contentContainerStyle: {
    paddingBottom: Layout.spacing * 5,
    paddingTop: Layout.spacing * 5,
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
  content: {
    marginTop: Layout.spacing * 15,
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Layout.spacing * 3,
  },
  textContainer: {
    marginTop: Layout.spacing * 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Layout.spacing * 2,
  },
  cameraContainer: {
    position: 'absolute',
    right: 0,
    top: Layout.spacing * 15,
    zIndex: 20000,
  },
  dataContainer: {
    marginTop: Layout.spacing * 5,
  },
  loadingContainer: {
    position: 'absolute', top: Layout.spacing * 8, right: '48%', left: '48%',
    
  },
}
export default Profile
