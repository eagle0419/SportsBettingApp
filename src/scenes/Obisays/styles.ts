import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '@Theme';

export const deviceWidth = Dimensions.get('window').width;
export const scale = deviceWidth / 390;

export default StyleSheet.create({
  background: {
    backgroundColor: Colors.whiteGreen
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.green,
    height: 65 * scale,
    borderColor: 'transparent',
    paddingHorizontal: 20 * scale
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backIcon: {
    fontSize: 28 * scale,
    color: 'white'
  },
  headerText: {
    fontSize: 20 * scale,
    fontFamily: Fonts.regular,
    color: 'white',
    marginLeft: 10 * scale
  },
  headerSmallText: {
    fontSize: 15 * scale,
    fontFamily: Fonts.regular,
    color: 'white'
  },
  contentView: {
    position: 'relative',
    flexGrow: 1,
    paddingBottom: 20 * scale
  },
  obisayList: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
    paddingLeft: 20 * scale,
    paddingRight: 35 * scale,
    paddingVertical: 20 * scale,
    marginTop: -1
  },
  listTitleText: {
    fontSize: 20 * scale,
    fontFamily: Fonts.regular
  },
  rightArrowIcon: {
    fontSize: 25 * scale,
    color: Colors.green
  },
  wordballon: {
    paddingTop: 10 * scale,
    width: deviceWidth,
    height: 82 * scale
  },
  obiLogo: {
    width: 186 * scale,
    height: 190 * scale,
    alignSelf: 'center',
    marginTop: -25 * scale,
    marginRight: -18 * scale
  },
  descView: {
    paddingHorizontal: 20 * scale,
    paddingVertical: 15 * scale
  },
  descDefaultText: {
    fontSize: 15 * scale,
    fontFamily: Fonts.regular,
    lineHeight: 25 * scale
  },
  descBoldText: {
    fontSize: 15 * scale,
    fontFamily: Fonts.black
  },
  commentBox: {
    marginVertical: 20 * scale,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageBox: {
    position: 'absolute',
    width: deviceWidth - 170 * scale,
    left: 35 * scale,
    top: 16 * scale
  },
  obiComment: {
    position: 'relative'
  },
  commentBoldText: {
    fontSize: 15 * scale,
    fontFamily: Fonts.black,
    color: 'white',
    lineHeight: 22 * scale
  },
  commentBoldText1: {
    fontSize: 15 * scale,
    fontFamily: Fonts.black,
    color: 'white',
    lineHeight: 18 * scale
  }
});