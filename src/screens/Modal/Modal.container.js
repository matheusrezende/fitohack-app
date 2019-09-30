/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-20 07:20:44
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-08-20 07:20:44
 */
import {compose, withHandlers} from 'recompose';

import ModalComponent from './Modal.component';
import withKeyboardStatus from '../../hocs/withKeyboardStatus';


export default compose(
  withKeyboardStatus,
  withHandlers({
    onClose: ({navigation}) => () => {
      navigation.goBack()
    },
  }),
)(ModalComponent)
