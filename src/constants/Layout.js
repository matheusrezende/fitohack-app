import {Dimensions} from 'react-native';
import {normalize} from '../helpers/normalize';

const {width, height} = Dimensions.get('window');

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  spacing: normalize(6),
};
