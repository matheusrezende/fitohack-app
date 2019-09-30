/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-05 14:57:48
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-20 07:16:02
 */
import {compose, withHandlers} from 'recompose';
import {connectActionSheet} from '@expo/react-native-action-sheet';
import {ImagePicker, Permissions} from 'expo'
import ImagePickerComponent from './ImagePicker.component';


const OPTIONS = ['Select from camera row', 'Take a picture', 'Cancel']

const IMAGE_OPTIONS = {
  mediaTypes: 'Images',
  allowsEditing: true,
  aspect: [1, 1],
  quality: 0.6,
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

export default compose(
  connectActionSheet,
  withHandlers({
    openPickerActionSheet: ({showActionSheetWithOptions, input: {onChange}}) => () => {
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
              .then((item) => onChange(`data:image/jpg;base64,${item.base64}`))
            break
          }
          case 1: {
            openCamera()
              .then((item) => onChange(`data:image/jpg;base64,${item.base64}`))
            break
          }
          default: {
            console.log('Canceled')
          }
        }
      })
    },
  }),
)(ImagePickerComponent)
