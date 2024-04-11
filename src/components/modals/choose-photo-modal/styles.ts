import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import { Color } from '../../../utils/GlobalStyles';

export const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '30%',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 40,
  },
  modalView: {
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(18),
    backgroundColor: Color.white,
    shadowColor: '#000',
    width: '100%',
    borderTopLeftRadius: scaleWidth(24),
    borderTopRightRadius: scaleWidth(24),
    height: '27%',
  },
  mainText: {
    marginVertical: scaleHeight(24),
    fontSize: scaleHeight(18),
    fontFamily: FONTS.URBANIST.Bold,
  },
  tableView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(25),
    paddingRight: scaleWidth(10),
  },
  tableText: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
  },
  closeRequest: {
    height: '73%',
    width: '100%',
  },
});
