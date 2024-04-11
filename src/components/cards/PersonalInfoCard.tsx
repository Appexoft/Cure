import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { BorderRadius, Color, FontSize, Sizes } from '../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../utils/size';
import ROUTES from '../../utils/routes';
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import FONTS from '../../utils/fonts';
import { convertToDate } from '../../utils/fhir/fhirTypes';
import useAuth from '@screens/auth/authContext/useAuth';
import { fontH2, fontH3, fontH4 } from '../../utils/themeUtils';

interface Props {
  navigation: any;
}

const PersonalInfoCard = (props: Props) => {
  const { t } = useTranslation();

  const { patient } = useAuth();

  const { birthDate, nameGiven, nameFamily, gender } = patient;


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.label}>{t('account:menu:personalInfo')}</Text>
        <Icon
          name="edit-3"
          size={Sizes.icon_bottom_bar}
          color={Color.accent}
          onPress={() => {
            props.navigation.navigate(ROUTES.Patient_Personal_Information_Edit);
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoLabel}>
          {t('account:personalInformation:firstName')}
        </Text>
        <Text style={styles.infoValue}>{nameGiven ? nameGiven : '-----'}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoLabel}>
          {t('account:personalInformation:middleName')}
        </Text>
        <Text style={styles.infoValue}>-----</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoLabel}>
          {t('account:personalInformation:lastName')}
        </Text>
        <Text style={styles.infoValue}>
          {nameFamily ? nameFamily : '-----'}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoLabel}>
          {t('account:personalInformation:gender')}
        </Text>
        <Text style={styles.infoValue}>{gender ?? '-----'}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoLabel}>
          {t('account:personalInformation:birthday')}
        </Text>
        <Text style={styles.infoValue}>
          {convertToDate(birthDate) ?? '-----'}
        </Text>
      </View>
    </View>
  );
};

export default PersonalInfoCard;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.white,
    borderRadius: scaleWidth(BorderRadius.card),
    paddingTop: scaleHeight(10),
    paddingHorizontal: scaleWidth(10),
  },
  label: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: fontH3,
    lineHeight: scaleHeight(25),
    color: Color.accent,
    marginBottom: scaleHeight(10),
  },
  info: {
    paddingVertical: scaleWidth(10),
  },
  infoLabel: {
    fontFamily: FONTS.URBANIST.Regular,
    color: Color.text,
    fontWeight: '600',
    fontSize: FontSize.fontH4,
  },
  infoValue: {
    fontFamily: FONTS.URBANIST.Regular,
    color: Color.text,
    fontSize: FontSize.fontH3,
    paddingTop: scaleHeight(5),
    marginLeft: scaleWidth(5),
  },
});
