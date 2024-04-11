import React, { useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { commonStyles } from '../../../utils/styles/commonStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import { Color, Sizes } from '../../../utils/GlobalStyles';
import FONTS from '../../../utils/fonts';
import useAuth from '@screens/auth/authContext/useAuth';
import { getNameInitialsFromFhir } from '../../../utils/fhir/fhirTypes';
import Icon from 'react-native-vector-icons/Octicons';
import { InterfaceType } from '../../../utils/entityUtils';

interface Props {
  title?: string;
  leftContent?: boolean;
  onLeftPress: () => void;
  rightIconName?: string;
  onRightPress?: () => void;
}

export const HeaderSwitchAccount: React.FC<Props> = ({
  title,
  leftContent,
  rightIconName,
  onRightPress,
  onLeftPress,
}) => {
  // @ts-ignore
  const { patient, crtInterface } = useAuth();

  const getHeaderColor = useCallback((interf: InterfaceType) => {
    switch (interf) {
      case InterfaceType.PATIENT:
        return commonStyles.colorHeaderPatient;
      case InterfaceType.DOCTOR:
        return commonStyles.colorHeaderDoctor;
      case InterfaceType.HOSPITAL:
        return commonStyles.colorHeaderHospital;
      default:
        console.error('Interface type [' + interf + '] not handled');
    }
    return commonStyles.colorHeaderPatient;
  }, []);

  // TODO handle scenario where this patient is NOT doctor? He should see a field "Enroll as doctor", "Enroll as Hospital"

  return (
    <View style={[styles.header, getHeaderColor(crtInterface)]}>
      <SafeAreaView />
      <View style={styles.content}>
        {leftContent ? (
          <TouchableOpacity onPress={onLeftPress} style={styles.leftButton}>
            <View style={styles.initials}>
              <Text>
                {patient
                  ? getNameInitialsFromFhir(
                      patient.nameGiven,
                      patient.nameGiven,
                    )
                  : ''}
              </Text>
            </View>
            <Icon
              name="arrow-switch"
              size={Sizes.icon_header}
              style={{ marginLeft: scaleWidth(2) }}
              color={Color.white}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onLeftPress} style={styles.leftButton}>
            <View style={styles.leftButton}>
              <Icon
                name="arrow-switch"
                size={Sizes.icon_header}
                color={Color.white}
                style={{ marginLeft: scaleWidth(2) }}
              />
            </View>
          </TouchableOpacity>
        )}
        <Text style={commonStyles.customHeaderTitle}>{title}</Text>
        {rightIconName && onRightPress ? (
          <TouchableOpacity
            onPress={onRightPress}
            style={styles.leftButton}>
            <View style={styles.leftButton}>
              <Icon
                name={rightIconName}
                size={Sizes.icon_header}
                color={Color.white}
                style={{ marginRight: scaleWidth(2) }}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyState} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: scaleHeight(105),
    backgroundColor: Color.headerBg,
    borderBottomLeftRadius: scaleWidth(15),
    borderBottomRightRadius: scaleWidth(15),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: scaleWidth(10),
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  initials: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scaleWidth(5),
  },
  title: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(17),
    color: Color.white,
  },
  emptyState: {
    width: scaleWidth(55),
    height: scaleHeight(36),
  },
});
