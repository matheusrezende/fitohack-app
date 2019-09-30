/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-20 07:20:44
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-08-20 07:20:44
 */
import {compose, withHandlers} from 'recompose';

import SearchModalComponent from './SearchModal.component';
import withKeyboardStatus from '../../hocs/withKeyboardStatus';


export default compose(
  withKeyboardStatus,
  withHandlers({
    onClose: ({navigation}) => () => {
      navigation.goBack()
    },
    openModal: ({navigation}) => (params) => () => navigation.navigate('SearchModal', params),

  }),
)(SearchModalComponent)
