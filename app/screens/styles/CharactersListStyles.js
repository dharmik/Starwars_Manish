import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts, scale, ApplicationStyles} from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    flex: 1,
    backgroundColor: Colors.clear,
  },
  headerContainer: {
    width: Metrics.screenWidth,
    height: scale(80),
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.border,
  },
  headerSubContainer: {
    width: Metrics.screenWidth,
    height: scale(80),
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 0,
    borderBottomColor: Colors.border,
  },
  headerText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
    color: Colors.black,
    textTransform: 'capitalize',
  },
  headerSearchView: {
    alignSelf: 'center',
  },
  searchIcon: {
    width: scale(25),
    height: scale(25),
  },
  listView: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  searchContainer: {
    width: Metrics.screenWidth,
    height: scale(80),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderBottomColor: Colors.border,
  },
  searchInput: {
    width: Metrics.screenWidth * 0.9,
  },
  closeIcon: {
    width: scale(15),
    height: scale(15),
    alignSelf: 'flex-end',
  },
  itemContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    padding: scale(15),
    borderColor: Colors.border,
    borderRadius: scale(10),
    elevation: 3,
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
  },
  characterLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
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
  characterMiddleView: {
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.medium,
    color: Colors.black,
  },
  subTitleText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.medium,
    color: Colors.darkGray,
  },
  imgDetail: {
    width: 20,
    height: 20,
    backgroundColor: Colors.transparent,
  },
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    textAlign: 'center',
    color: Colors.lightgray,
  },
});
