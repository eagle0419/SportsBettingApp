import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '@Theme';

const deviceWidth = Dimensions.get('window').width;
export const scale = deviceWidth / 390;

export default StyleSheet.create({
  modalContainer: {
    position: 'relative',
    backgroundColor: 'white',
    paddingHorizontal: 20 * scale,
    paddingVertical: 40 * scale,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10 * scale,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  modalCloseIcon: {
    fontSize: 35 * scale,
    position: 'absolute',
    top: 15 * scale,
    right: 15 * scale,
    color: Colors.darkGrey
  },
  modalBtn: {
    alignSelf: 'center',
    marginTop: 10 * scale,
    marginHorizontal: 5 * scale,
    backgroundColor: Colors.black,
    paddingHorizontal: 30 * scale,
    paddingVertical: 10 * scale,
    borderRadius: 20 * scale
  },
  cancelText: {
    fontFamily: Fonts.regular,
    color: 'white',
    fontSize: 19 * scale
  },
  bodyText: {
    textAlign: 'center',
    marginVertical: 15 * scale,
    fontFamily: Fonts.regular,
    fontSize: 15 * scale,
    lineHeight: 22 * scale,
    fontStyle: 'italic'
  },
  spinnerTextStyle: {
    color: 'white'
  }
});
