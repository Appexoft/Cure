import React, { memo, useEffect } from 'react';
import ROUTES from '../../../../utils/routes';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from '../../../../utils/GlobalStyles';
import useAuth from '@screens/auth/authContext/useAuth';
import HomeAppointments from '@screens/app/doctor/home/components/homeAppointments/index';
import { useTranslation } from 'react-i18next';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { HeaderSwitchAccount } from '@components/header/header-switch-account';
import SelectAccountModal from '@components/modals/select-account-modal';
import { SheetManager } from 'react-native-actions-sheet';
import {
  ACTION_SHEET_SWITCH_ACCOUNT,
  IAppointment,
  IPractitioner,
} from '../../../../utils/domainEntities';
import NavigationService from '@navigation/common/NavigationService';
import { commonStyles } from '../../../../utils/styles/commonStyles';

interface Props {
  practitioner: IPractitioner;

  fetchPractitioner: any;
  appointments: IAppointment[];
  appointmentsTotalItems: number;
  fetchAppointments: any;

  updateSuccess: boolean;
  loading: boolean;
  error: string;
}

export const HomePage = memo((props: Props) => {
  const {
    practitioner,
    fetchPractitioner,
  } = props;
  const { t } = useTranslation();
  const { userEntity } = useAuth();

  const [isSelectModalOpen, setIsSelectModalOpen] = React.useState(false);

  useEffect(() => {
    if (userEntity && userEntity.id) {
      fetchPractitioner(userEntity.id);
    }
  }, [fetchPractitioner, userEntity]);

  return (
    <View>
      <HeaderSwitchAccount
        title={t('header:doctorHome')}
        leftContent
        onLeftPress={() => {
          SheetManager.hide(ACTION_SHEET_SWITCH_ACCOUNT);
          SheetManager.show(ACTION_SHEET_SWITCH_ACCOUNT);
        }}
      />
      <View style={styles.contents}>
        <HomeAppointments
          handleViewAll={() =>
            NavigationService.navigate(ROUTES.Patient_Appointments, [])
          }
        />
        {practitioner && practitioner.id && !practitioner.onboardingDone && (
          <TouchableOpacity
            style={[
              commonStyles.directionColumn,
              commonStyles.card,
              commonStyles.cardWarning,
              commonStyles.mt10,
            ]}
            onPress={NavigationService.navigate(
              ROUTES.Doctor_Onboard_Status,
              [],
            )}>
            <Text> Onboarding has not yet been done. Check status </Text>
          </TouchableOpacity>
        )}
      </View>
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
