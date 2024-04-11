import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import { Color, Sizes } from '../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';
import FONTS from '../../../utils/fonts';
import useAuth from '@screens/auth/authContext/useAuth';
import { InterfaceType } from '../../../utils/entityUtils';
import ROUTES from '../../../utils/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '@navigation/common/NavigationService';
import { ACTION_SHEET_SWITCH_ACCOUNT } from '../../../utils/domainEntities';

function SwitchAccountSheet(props: SheetProps<{}>) {
  const { t } = useTranslation();
  const { crtInterface, setCrtInterface, userEntity, practitioner } = useAuth();

  const hide = () => {
    SheetManager.hide(ACTION_SHEET_SWITCH_ACCOUNT);
  };

  const switchToPatient = useCallback(() => {
    setCrtInterface(InterfaceType.PATIENT);
    hide();
    NavigationService.navigate(ROUTES.Patient_BottomTab, []);
  }, [setCrtInterface]);

  const switchToDoctor = useCallback(() => {
    setCrtInterface(InterfaceType.DOCTOR);
    hide();
    NavigationService.navigate(ROUTES.Doctor_BottomTab, []);
  }, [setCrtInterface]);

  const createDoctor = useCallback(() => {
    hide();
    NavigationService.navigate(ROUTES.Doctor_Onboarding, []);
  }, []);

  const switchToHospital = useCallback(() => {
    // todo checks if onboarding is done?
    setCrtInterface(InterfaceType.HOSPITAL);
    hide();
    NavigationService.navigate(ROUTES.Hospital_BottomTab, []);
  }, [setCrtInterface]);

  return (
    <ActionSheet
      closable={true}
      backgroundInteractionEnabled={false}
      gesturesEnabled={true}
      headerAlwaysVisible={true}
      closeOnTouchBackdrop={true}
      useBottomSafeAreaPadding
      id={props.sheetId}>
      <View style={styles.centeredView}>
        <Text style={styles.mainText}>Account</Text>
        {(crtInterface === InterfaceType.DOCTOR ||
          crtInterface === InterfaceType.HOSPITAL) && (
          <TouchableOpacity onPress={switchToPatient} style={styles.tableView}>
            <Text style={styles.tableText}>
              {t('account:switcher:switchPatient')}
            </Text>
            <Icon
              name="account"
              size={Sizes.icon_bottom_bar}
              color={Color.accent}
            />
          </TouchableOpacity>
        )}
        {(crtInterface === InterfaceType.PATIENT ||
          crtInterface === InterfaceType.HOSPITAL) &&
          (practitioner && practitioner?.id ? (
            <TouchableOpacity onPress={switchToDoctor} style={styles.tableView}>
              <Text style={styles.tableText}>
                {t('account:switcher:switchDoctor')}
              </Text>
              <Icon
                name="stethoscope"
                size={Sizes.icon_bottom_bar}
                color={Color.accent}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={createDoctor} style={styles.tableView}>
              <Text style={styles.tableText}>
                {t('account:switcher:createDoctor')}
              </Text>
              <Icon
                name="stethoscope"
                size={Sizes.icon_bottom_bar}
                color={Color.accent}
              />
            </TouchableOpacity>
          ))}
        {(crtInterface === InterfaceType.PATIENT ||
          crtInterface === InterfaceType.DOCTOR) && (
          //      todo create onboarding for doctor?
          <TouchableOpacity onPress={switchToHospital} style={styles.tableView}>
            <Text style={styles.tableText}>
              {t('account:switcher:switchHospital')}
            </Text>
            <Icon
              name="hospital-building"
              size={Sizes.icon_bottom_bar}
              color={Color.accent}
            />
          </TouchableOpacity>
        )}
      </View>
    </ActionSheet>
  );
}

export const styles = StyleSheet.create({
  centeredView: {
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(15),
    backgroundColor: Color.white,
    shadowColor: '#000',
    borderTopLeftRadius: scaleWidth(24),
    borderTopRightRadius: scaleWidth(24),
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
});

export default SwitchAccountSheet;
