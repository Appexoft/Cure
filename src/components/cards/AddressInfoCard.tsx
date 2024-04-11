import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { BorderRadius, Color, FontSize } from '../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../utils/size';
import ROUTES from '../../utils/routes';
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import FONTS from '../../utils/fonts';
import { useRoute } from '@react-navigation/native';

interface Props {
  navigation: any;
}

const AddressInfoCard = (props: Props) => {
  const { t } = useTranslation();

  const route = useRoute();
  const { updatedAddress } = route.params || {};
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.label}>{t('account:menu:address')}</Text>
        <Icon
          name="edit-3"
          size={20}
          onPress={() =>
            props.navigation.navigate(ROUTES.Patient_Address_Information_Edit)
          }
        />
      </View>

      <View style={{ marginBottom: scaleHeight(10) }}>
        <Text style={styles.infoLabel}>{t('account:menu:address')}</Text>
        <View>
          <Text style={styles.infoValue}>{updatedAddress}</Text>
        </View>
      </View>
    </View>
  );
};

export default AddressInfoCard;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.white,
    borderRadius: scaleWidth(BorderRadius.card),
    paddingTop: scaleHeight(10),
    paddingHorizontal: scaleWidth(10),
    marginTop: scaleHeight(10),
  },
  label: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(20),
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
