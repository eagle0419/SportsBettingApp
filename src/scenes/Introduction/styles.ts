import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors, Fonts } from '@Theme';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const scale = deviceWidth / 390;

export default StyleSheet.create({
  background: {
    backgroundColor: Colors.lightGrey
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.green,
    height: 100 * scale,
    borderColor: 'transparent'
  },
  headerView: {
    paddingHorizontal: 12 * scale,
    paddingVertical: 10 * scale,
    position: 'relative'
  },
  subHeader: {
    backgroundColor: Colors.black,
    paddingVertical: 15 * scale,
    paddingHorizontal: 20 * scale
  },
  subHeaderText: {
    color: Colors.white,
    fontSize: 25 * scale,
    textTransform: 'uppercase',
    fontFamily: Fonts.black
  },
  subHeaderThinText: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 25 * scale,
    textTransform: 'uppercase'
  },

  headerSubTitle: {
    color: Colors.white,
    fontSize: 18 * scale,
    textTransform: 'uppercase',
    fontFamily: Fonts.black
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 35 * scale,
    fontFamily: Fonts.regular,
    marginTop: 5 * scale
  },
  closeIcon: {
    fontSize: 26 * scale,
    position: 'absolute',
    top: 5 * scale,
    right: 12 * scale,
    color: Colors.white
  },
  controlBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15 * scale,
    right: 0 * scale
  },
  controlIcon: {
    fontSize: 24 * scale,
    color: Colors.white,
    marginHorizontal: 8 * scale
  },
  contentView: {
    position: 'relative',
    flexGrow: 1
  },
  quickStartContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20 * scale,
    paddingVertical: 25 * scale,
    borderBottomColor: Colors.darkGrey,
    borderBottomWidth: 0.5 * scale
  },
  quickStartText: {
    fontSize: 20 * scale,
    color: Colors.black,
    lineHeight: 30 * scale,
    fontFamily: Fonts.regular
  },
  content: {
    paddingHorizontal: 20 * scale
  },
  barRatingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10 * scale
  },
  barRatingDotView: {
    marginTop: 10 * scale,
    marginBottom: 0 * scale
  },
  barRatingTextView: {
    marginLeft: 20 * scale
  },
  obisaysView: {
    marginTop: 25 * scale,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50 * scale
  },
  obisaysContent: {
    backgroundColor: Colors.green,
    borderLeftWidth: 10 * scale,
    borderLeftColor: 'black',
    padding: 20 * scale,
    flex: 1
  },
  whiteBoldText: {
    fontSize: 14 * scale,
    color: Colors.white,
    fontFamily: Fonts.black
  },
  gamesImage: {
    width: '100%',
    height: 290 * scale
  },
  gamesContent: {
    marginTop: 30 * scale
  },
  gameDescription: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'flex-start',
    paddingLeft: 20 * scale,
    marginTop: 10 * scale
  },
  greenCircle: {
    position: 'absolute',
    fontSize: 5 * scale,
    color: Colors.green,
    top: 6 * scale,
    left: 0
  },
  gameText: {
    fontSize: 14 * scale,
    color: Colors.black,
    fontFamily: Fonts.light
  },
  body: {
    flexDirection: 'row',
    marginTop: 10 * scale
  },
  firstView: {
    width: deviceWidth * 0.55
  },
  imageView: {
    width: '100%',
    height: deviceWidth
  },
  imageView1: {
    width: '100%',
    height: deviceWidth / 2
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  normalText: {
    fontSize: 14 * scale,
    color: Colors.black,
    fontFamily: Fonts.light,
    lineHeight: 23 * scale
  },
  blackBolderText: {
    fontSize: 14 * scale,
    color: Colors.black,
    fontFamily: Fonts.black
  },
  blackBoldText: {
    fontSize: 14 * scale,
    color: Colors.black,
    fontFamily: Fonts.black
  },
  greenBoldText: {
    fontSize: 14 * scale,
    color: Colors.green,
    fontFamily: Fonts.black
  },
  secondView: {
    width: deviceWidth * 0.45,
    paddingRight: 20 * scale
  },
  mainIcon: {
    marginVertical: 20 * scale
  },
  mt20: {
    marginTop: 20 * scale
  },
  showCheck: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10 * scale,
    paddingHorizontal: 12 * scale,
    alignItems: 'center'
  },
  messageText: {
    fontSize: 14 * scale,
    color: Colors.green,
    fontFamily: Fonts.bold,
    marginLeft: 20 * scale
  }
});
