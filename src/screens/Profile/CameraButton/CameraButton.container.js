/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-05 14:57:48
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 16:33:20
 */
import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux'
import {connectActionSheet} from '@expo/react-native-action-sheet';
import {bindActionCreators} from 'redux';
import {ImagePicker, Permissions} from 'expo'
import CameraButton from './CameraButton.component';
import {updateProfilePicture} from '../../../actions/user';
import {profileSelector} from '../../../reducers/user/profile';


const OPTIONS = ['Select from camera row', 'Take a picture', 'Cancel']

const IMAGE_OPTIONS = {
  mediaTypes: 'Images',
  allowsEditing: true,
  aspect: [1, 1],
  quality: 1,
  base64: true,
}


const openCameraRow = async () => { // eslint-disable-line
  const cameraRow = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  const camera = await Permissions.askAsync(Permissions.CAMERA)
    
  if (cameraRow.status === 'granted' && camera.status === 'granted') {
    return ImagePicker.launchImageLibraryAsync(IMAGE_OPTIONS)
  }
}
const openCamera = async () => { // eslint-disable-line
  const cameraRow = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  const camera = await Permissions.askAsync(Permissions.CAMERA)
    
  if (cameraRow.status === 'granted' && camera.status === 'granted') {
    return ImagePicker.launchCameraAsync(IMAGE_OPTIONS)

  }
}

const mapStateToProps = (state) => ({
  userId: profileSelector(state)._id,
})

const mapDispatchToProps = (dispatch) => ({
  updatePicture: bindActionCreators(updateProfilePicture, dispatch),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  connectActionSheet,
  withHandlers({
    onChange: ({updatePicture, userId}) => (picture) => updatePicture(userId, {picture}),
  }),
  withHandlers({
    openPickerActionSheet: ({showActionSheetWithOptions, onChange}) => () => {
      const options = OPTIONS;
      const destructiveButtonIndex = 2;
      const cancelButtonIndex = 2;
      showActionSheetWithOptions({
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      }, (buttonIndex) => {
        switch (buttonIndex) {
          case 0: {
            openCameraRow()
              .then((item) => onChange(item.base64))
            break
          }
          case 1: {
            openCamera()
              .then((item) => onChange(item.base64))
            break
          }
          default: {
            console.log('Canceled')
          }
        }
      })
    },
  }),
)(CameraButton)
