import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../utils/GlobalStyles';
import { widthScreen } from '../../utils/dimensions';
import { scaleHeight, scaleWidth } from '../../utils/size';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    width: widthScreen * 0.9,
    alignSelf: 'center',
    height: 100,
    shadowColor: Color.silverChalice,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rightWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  centerWrapper: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: 8,
  },
  imageStyles: {
    width: scaleWidth(50),
    height: scaleWidth(50),
    borderRadius: scaleWidth(8),
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: scaleHeight(25),
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 16,
  },
  priceText: {
    color: Color.third,
    fontWeight: 'bold',
  },
});
