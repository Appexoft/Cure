import React, { memo } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from '../../../../utils/GlobalStyles';
import useAuth from '@screens/auth/authContext/useAuth';
import { useTranslation } from 'react-i18next';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { HeaderSwitchAccount } from '@components/header/header-switch-account';
import SelectAccountModal from '@components/modals/select-account-modal';
import { SheetManager } from 'react-native-actions-sheet';
import { ACTION_SHEET_SWITCH_ACCOUNT } from '../../../../utils/domainEntities';

export const HomePage = memo(({ navigation, i18n }) => {
  const [isSelectModalOpen, setIsSelectModalOpen] = React.useState(false);
  const { isLoggedIn, patient } = useAuth();
  const { t } = useTranslation();

  return (
    <View>
      <HeaderSwitchAccount
        title={t('header:hospitalHome')}
        leftContent
        onLeftPress={() => {
          SheetManager.hide(ACTION_SHEET_SWITCH_ACCOUNT);
          SheetManager.show(ACTION_SHEET_SWITCH_ACCOUNT);
        }}
      />
      <View style={styles.contents} />
      <StatusBar barStyle="default" />
      {isSelectModalOpen && (
        <SelectAccountModal
          isModalOpen={isSelectModalOpen}
          close={() => setIsSelectModalOpen(false)}
        />
      )}
    </View>
  );
});

export default HomePage;

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  mt16: {
    marginTop: Margin.m_2xl,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  doctorNameLayout: {
    width: scaleWidth(360),
    alignItems: 'center',
    marginTop: scaleHeight(10),
  },
  contents1FlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.fontH4,
    fontFamily: FontFamily.textH612pxRegular,
  },
  kmTypo: {
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
    fontFamily: FontFamily.textH612pxRegular,
  },
  basePosition: {
    left: 0,
    width: 375,
    position: 'absolute',
  },
  searchField: {
    alignItems: 'center',
    flexDirection: 'row',
    width: scaleWidth(360),
    marginTop: scaleHeight(Margin.between_statusBar_content),
  },
  title: {
    fontSize: FontSize.textH219pxMedium_size,
    lineHeight: 24,
    color: Color.systemColorsBackgroundBlackPrimary1,
    textAlign: 'left',
    fontFamily: FontFamily.textH612pxRegular,
    fontWeight: '500',
  },
  text: {
    textAlign: 'center',
    color: Color.darkslategray_300,
    fontWeight: '500',
    lineHeight: 21,
    fontSize: FontSize.fontH4,
  },
  additionalButton: {
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_md,
    paddingBottom: Padding.p_xl,
    flexDirection: 'row',
  },
  nearbyDoctors1: {
    width: 359,
    alignItems: 'center',
  },
  photoDoctorNameChild: {
    borderRadius: Border.br_xs,
    borderStyle: 'solid',
    borderColor: '#efeff6',
    borderWidth: 1,
    width: 56,
    height: 56,
    backgroundColor: Color.white,
  },
  drAdamAnderson: {
    color: Color.systemColoursLabelColourPrimaryLight,
    textAlign: 'left',
  },
  dentist: {
    color: Color.silver_100,
  },
  photoDoctorName: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  km: {
    color: Color.darkslategray_300,
  },
  doctorName: {
    alignItems: 'center',
  },
  nearbyDoctors: {
    display: 'none',
  },
  contents: {
    width: '92%',
    marginHorizontal: scaleWidth(15),
  },
});
