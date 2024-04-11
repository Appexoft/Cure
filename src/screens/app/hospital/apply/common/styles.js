import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import { fontH2 } from '../../../../../utils/themeUtils';

export const commonStyles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    paddingTop: scaleHeight(32),
  },
  input: {
    marginTop: scaleHeight(40),
  },
  txtInput1: {
    marginTop: scaleHeight(20),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(20),
  },
  title: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: fontH2,
  },
});
