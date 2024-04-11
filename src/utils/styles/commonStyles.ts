import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '../fonts';
import { scaleHeight, scaleWidth, sizes } from '../size';
import {
  fontH2,
  fontH3,
  fontH4,
  fontH1,
  fontH5,
  fontH6,
  fontH7,
} from '../themeUtils';
import {
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Padding,
  Sizes,
} from '../GlobalStyles';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { widthScreen } from '../dimensions';

export const commonStyles = ScaledSheet.create({
  avatar: {
    backgroundColor: Color.ghostwhite_200,
    width: 76,
    borderRadius: BorderRadius.small,
    alignSelf: 'stretch',
  },
  textH1: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: fontH1,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textH2: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: fontH2,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textH3: {
    fontFamily: FONTS.URBANIST.Bold,
    fontWeight: '800',
    fontSize: fontH3,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textH4: {
    fontFamily: FONTS.URBANIST.Bold,
    fontWeight: '800',
    fontSize: fontH4,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textH4Light: {
    fontFamily: FONTS.URBANIST.Light,
    fontWeight: '400',
    fontSize: fontH4,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textBodyDefault: {
    color: Color.colourAccent,
  },
  textH5: {
    fontFamily: FONTS.URBANIST.Medium,
    fontWeight: '400',
    fontSize: fontH5,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textH5Bold: {
    fontFamily: FONTS.URBANIST.Bold,
    // fontWeight: '600',
    fontSize: fontH5,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textH6: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: fontH6,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textH6Light: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '400',
    fontSize: fontH6,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textCardTitle: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: fontH5,
    lineHeight: 20,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  textCardSubtitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '400',
    fontSize: fontH5,
    color: Color.textDisabled,
    display: 'flex',
    textAlign: 'left',
  },
  textCardSubtitleSmall: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '400',
    fontSize: fontH7,
    color: Color.textDisabled,
    display: 'flex',
    textAlign: 'left',
  },
  textCardBody: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '400',
    fontSize: fontH6,
    color: Color.accent,
    display: 'flex',
    textAlign: 'left',
  },
  avatarContainer: {
    padding: scaleWidth(10),
  },
  cardAvatar: {
    width: scaleWidth(50),
    height: scaleWidth(50),
    borderRadius: scaleWidth(8),
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: scaleHeight(25),
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 16,
  },
  cardTitle: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: fontH3,
    lineHeight: 20,
    display: 'flex',
    textAlign: 'left',
    color: Color.accent,
  },
  cardTitleLine: {
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.cardTitleBorder,
    paddingBottom: Padding.cardTitle,
    flexDirection: 'row',
    borderColor: '#efeff6',
    borderStyle: 'solid',
  },

  flatList: {
    flex: 1,
    marginBottom: scaleHeight(100),
  },

  inputLabel: {
    lineHeight: 15,
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: fontH5,
    fontWeight: '400',
    color: Color.inputLabel,
  },
  inputField: {
    marginTop: scaleHeight(Margin.between_entries),
  },

  bottomButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(22),
    position: 'absolute',
    bottom: '7%',
  },
  bottomButton: {
    width: widthScreen - 100,
  },

  // Page utilities
  widthDefault: {
    width: widthScreen * 0.9,
  },

  // Text utilties
  textAlignLeft: {
    textAlign: 'left',
    width: '100%',
  },

  // Margins - Left
  ml5: {
    marginLeft: scaleWidth(Margin.m_5),
  },
  ml10: {
    marginLeft: scaleWidth(Margin.m_10),
  },
  ml15: {
    marginLeft: scaleWidth(Margin.m_15),
  },
  ml20: {
    marginLeft: scaleWidth(Margin.m_20),
  },

  // Margins - Right
  mr5: {
    marginRight: scaleWidth(Margin.m_5),
  },
  mr10: {
    marginRight: scaleWidth(Margin.m_10),
  },

  // Margins - Left <> Right
  mlr5: {
    marginLeft: scaleWidth(Margin.m_5),
    marginRight: scaleWidth(Margin.m_5),
  },
  mlr10: {
    marginLeft: scaleWidth(Margin.m_10),
    marginRight: scaleWidth(Margin.m_10),
  },

  // Margins - Top
  mt5: {
    marginTop: scaleWidth(Margin.m_5),
  },
  mt8: {
    marginTop: scaleWidth(Margin.m_8),
  },
  mt10: {
    marginTop: scaleWidth(Margin.m_10),
  },
  mt15: {
    marginTop: scaleWidth(Margin.m_15),
  },

  // Margins - Bottom
  mb5: {
    marginBottom: scaleWidth(Margin.m_5),
  },
  mb10: {
    marginBottom: scaleWidth(Margin.m_10),
  },
  mb15: {
    marginBottom: scaleWidth(Margin.m_15),
  },
  mb20: {
    marginBottom: scaleWidth(Margin.m_20),
  },

  // Margins - Top <> Bottom
  mtb5: {
    marginTop: scaleWidth(Margin.m_5),
    marginBottom: scaleWidth(Margin.m_5),
  },
  mtb10: {
    marginTop: scaleWidth(Margin.m_10),
    marginBottom: scaleWidth(Margin.m_10),
  },

  // Paddings - Bottom
  pb5: {
    marginBottom: scaleWidth(Margin.m_5),
  },
  pb10: {
    marginBottom: scaleWidth(Margin.m_10),
  },
  pb20: {
    marginBottom: scaleWidth(Margin.m_20),
  },

  // Paddings - Top <> Bottom
  ptb5: {
    marginTop: scaleWidth(Margin.m_5),
    marginBottom: scaleWidth(Margin.m_5),
  },
  ptb10: {
    marginTop: scaleWidth(Margin.m_10),
    marginBottom: scaleWidth(Margin.m_10),
  },

  // Paddings - Horizontal
  ph5: {
    paddingHorizontal: scaleWidth(Margin.m_5),
  },
  ph10: {
    paddingHorizontal: scaleWidth(Margin.m_10),
  },

  // Paddings - Vertical
  pv5: {
    paddingVertical: scaleWidth(Margin.m_5),
  },
  pv10: {
    paddingVertical: scaleWidth(Margin.m_10),
  },

  // Page
  pageDefault: {
    // flex: 0,
    backgroundColor: Color.pageBackground,
    // paddingTop: scaleHeight(32),
    overflow: 'hidden',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: 5,
    width: '100%',
  },

  // Dimensions
  widthMax: {
    width: '100%',
  },
  heightMax: {
    height: '100%',
  },

  // Directions
  directionRow: {
    flexDirection: 'column',
  },
  directionColumn: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },

  // Colors
  colorPastel1: {
    backgroundColor: Color.pastel1,
  },
  colorPastel2: {
    backgroundColor: Color.pastel2,
  },
  colorPastel3: {
    backgroundColor: Color.pastel3,
  },
  colorPastel4: {
    backgroundColor: Color.pastel4,
  },
  colorPastel5: {
    backgroundColor: Color.pastel5,
  },
  colorPastel6: {
    backgroundColor: Color.pastel6,
  },
  colorPastel7: {
    backgroundColor: Color.pastel7,
  },
  colorMain: {
    backgroundColor: Color.main,
  },
  colorAccent: {
    backgroundColor: Color.accent,
  },
  colorHeaderPatient: {
    backgroundColor: Color.headerBg,
  },
  colorHeaderDoctor: {
    backgroundColor: Color.headerDoctor,
  },
  colorHeaderHospital: {
    backgroundColor: Color.headerHospital,
  },

  // Buttons
  btnLarge: {
    width: scaleWidth(Sizes.btn_large),
    height: scaleHeight(40),
    flex: 0.1,
    alignSelf: 'center',
    marginTop: scaleHeight(20),
  },

  btnBottom: {
    position: 'absolute',
    alignSelf: 'center',
    width: scaleWidth(Sizes.btn_large),
    height: scaleHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: getBottomSpace() + scaleHeight(50),
  },

  // Icons
  loginIcons: {
    width: scaleWidth(70),
    marginRight: scaleWidth(15),
  },

  validationErrorMsg: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(10),
    paddingTop: scaleHeight(1),
    fontSize: scaleWidth(12),
    color: Color.secondRed,
    width: scaleWidth(270),
  },
  subTitle: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: sizes.fontSizeSubtitle,
    lineHeight: scaleHeight(25),
    color: Color.main,
    marginTop: scaleHeight(25),
    marginBottom: scaleHeight(5),
    marginLeft: scaleWidth(32),
    // textTransform: 'uppercase',
  },
  headerIcon: {
    color: Color.white,
  },
  txtInput1: {
    marginTop: scaleHeight(20),
  },

  categoryItem: {
    alignItems: 'center',
    paddingLeft: scaleWidth(5),
    marginTop: scaleHeight(5),
  },
  categoryItemTitle: {
    marginLeft: scaleWidth(10),
    fontSize: fontH5,
  },
  categoryItemIcon: {
  },

  card: {
    paddingHorizontal: scaleHeight(10),
    paddingVertical: scaleHeight(5),
    borderRadius: scaleWidth(10),
  },

  cardWarning: {
    backgroundColor: Color.yellow,
  },

  container: {
    flex: 1,
    backgroundColor: Color.main,
    paddingTop: scaleHeight(32),
  },
  input: {
    marginTop: scaleHeight(40),
  },
  icon: {
    color: Color.accent,
    backgroundColor: Color.accent,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(20),
  },
  title: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: fontH2,
  },
  customHeaderTitle: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: FontSize.defaultBodyBold_size,
    color: Color.white,
  },
});
