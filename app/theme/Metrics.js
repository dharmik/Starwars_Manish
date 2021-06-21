import {Dimensions, Platform} from 'react-native';
import {Colors} from './';

const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const platformSpecificHeight = (androidSize, iosSize = null) =>
  Platform.OS === 'android'
    ? verticalScale(androidSize)
    : verticalScale(iosSize);

// Used via Metrics.baseMargin
const Metrics = {
  zero: 0,
  baseMargin: verticalScale(10),
  doubleBaseMargin: verticalScale(20),
  tripleBaseMargin: verticalScale(60),
  smallMargin: verticalScale(5),
  textFieldRadius: 6,
  borderLineWidth: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? verticalScale(64) : verticalScale(54),
  scanerPreviewHeight: verticalScale(400),
  buttonRadius: 3,
  buttonMaxRadius: 5,
  viewMaxRadius: 30,
  modelRadius: 40,
  buttonHeight: verticalScale(50),
  icons: {
    tiny: scale(16),
    small: scale(20),
    medium: scale(30),
    large: scale(45),
    xl: scale(50),
  },
  images: {
    small: scale(20),
    medium: scale(40),
    large: scale(60),
    logo: scale(200),
    mediumlarge: verticalScale(100),
    extralarge: verticalScale(300),
  },
  headerShadow: {
    shadowColor: Colors.gray,
    shadowOffset: {width: 1, height: 2.5},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  size: {
    xs: 3,
    s: 7,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 25,
  },
  bottomSheet: {
    height: verticalScale(200),
  },
};
export {scale, verticalScale, moderateScale, Metrics, platformSpecificHeight};
