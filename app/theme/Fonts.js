import {Platform} from 'react-native';

const type = {
  bold: Platform.OS === 'android' ? 'roboto_bold' : 'Roboto-Bold',
  regular: Platform.OS === 'android' ? 'roboto_regular' : 'Roboto-Regular',
  medium: Platform.OS === 'android' ? 'roboto_medium' : 'Roboto-Medium',
  light: Platform.OS === 'android' ? 'roboto_light' : 'Roboto-Light',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 28,
  h5: 24,
  h6: 20,
  input: 18,
  regular: 17,
  semiRegular: 16,
  medium: 14,
  semiMedium: 13,
  small: 12,
  tiny: 10,
  label: 16,
  inputIcon: 22,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  label: {
    fontFamily: type.base,
    fontSize: size.label,
  },
};

export default {
  type,
  size,
  style,
};