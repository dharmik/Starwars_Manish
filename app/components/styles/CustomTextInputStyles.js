import {StyleSheet} from 'react-native';
import {Colors, Fonts, scale, verticalScale} from '../../theme';

const styles = StyleSheet.create({
  textInput: {
    flexGrow: 1,
    flexShrink: 1,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.text,
    color: Colors.black,
  },
  inputContainer: {
    width: scale(290),
    height: verticalScale(45),
    marginTop: verticalScale(15),
    paddingHorizontal: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(6),
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    backgroundColor: Colors.inputBg,
  },
  textSeparator: {
    width: 2,
    height: verticalScale(20),
    marginHorizontal: scale(8),
    alignItems: 'center',
    backgroundColor: Colors.darkGray,
  },
  rightICon: {
    height: verticalScale(35),
    padding: scale(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
