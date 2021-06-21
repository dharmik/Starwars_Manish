import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts, ApplicationStyles, scale} from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    flex: 1,
    backgroundColor: Colors.clear,
  },
  headerContainer: {
    //width: Metrics.screenWidth,
    height: scale(80),
    //paddingVertical: 10,
    paddingHorizontal: scale(20),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerText: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
    color: Colors.black,
    textTransform: 'capitalize',
    marginLeft: scale(10),
  },
  imgBack: {
    width: scale(20),
    height: scale(20),
  },
  detailContainer: {
    marginTop: scale(10),
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    marginHorizontal: scale(10),
    backgroundColor: Colors.transparent,
    elevation: 3,
  },
  imgTop: {
    height: Metrics.screenHeight * 0.35,
    backgroundColor: Colors.lightGrey,
    borderColor: Colors.border,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    elevation: 3,
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  imgDot: {
    width: scale(10),
    height: scale(10),
    alignSelf: 'center',
  },
  movieTitleText: {
    marginTop: scale(10),
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.medium,
    color: Colors.black,
    marginHorizontal: scale(20),
  },
  spaceShipTitleText: {
    marginTop: scale(10),
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.medium,
    color: Colors.black,
    marginHorizontal: scale(20),
    paddingVertical: scale(10),
  },
  detailView: {
    paddingLeft: scale(20),
    marginLeft: scale(20),
  },
  moviesSubView: {
    flexDirection: 'row',
    marginTop: scale(5),
  },
  spaceShipView: {
    paddingLeft: scale(20),
    marginLeft: scale(20),
    marginBottom: scale(20),
  },
  speciesSubView: {
    flexDirection: 'row',
    marginTop: scale(5),
  },
  movieText: {
    fontSize: Fonts.size.medium,
    color: Colors.darkGray,
    marginLeft: scale(10),
  },
  spaceShipText: {
    fontSize: Fonts.size.medium,
    color: Colors.darkGray,
    marginLeft: scale(10),
  },
  itemContainer: {
    marginTop: 20,
    padding: scale(20),
    // marginHorizontal: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    borderBottomColor: Colors.border,
    borderRadius: scale(10),
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  imgCharacter: {
    width: scale(50),
    height: scale(50),
    marginRight: scale(10),
    borderRadius: scale(25),
    borderColor: Colors.clear,
    borderWidth: 1,
    backgroundColor: Colors.gray,
  },
  nameText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.input,
    fontWeight: 'bold',
    color: Colors.black,
    textTransform: 'capitalize',
  },
  speciesText: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    color: Colors.black,
  },
  characterMiddleView: {
    justifyContent: 'center',
  },
  seperator: {
    marginTop: scale(15),
    height: scale(1),
    backgroundColor: Colors.border,
    marginHorizontal: scale(20),
  },
});