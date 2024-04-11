import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { BorderRadius, Color, FontSize } from '../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../utils/size';
import { useTranslation } from 'react-i18next';
import FONTS from '../../utils/fonts';
import Icon from 'react-native-vector-icons/Feather';
import ChangeEmailModal from '@components/modals/change-patient-communicate-modal/ChangeEmailModal';
import ChangePhoneModal from '@components/modals/change-patient-communicate-modal/ChangePhoneModal';
import useAuth from '@screens/auth/authContext/useAuth';

const CommunicationInfoCard = () => {
  const { t } = useTranslation();

  const { userEntity } = useAuth();
  const { email, phoneNumber } = userEntity;

  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [phoneModalVisible, setPhoneModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.label}>{t('account:menu:communication')}</Text>
      </View>
      <View style={styles.info}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.infoLabel}>
            {t('account:communicationInformation:email')}
          </Text>
          <Icon
            name="edit-3"
            size={20}
            onPress={() => setEmailModalVisible(true)}
          />
        </View>
        <Text style={styles.infoValue}>{email ? email : '-----'}</Text>
      </View>
      <View style={styles.info}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.infoLabel}>
            {t('account:communicationInformation:phoneNumber')}
          </Text>
          <Icon
            name="edit-3"
            size={20}
            onPress={() => setPhoneModalVisible(true)}
          />
        </View>
        <Text style={styles.infoValue}>
          {phoneNumber ? phoneNumber : '-----'}
        </Text>
      </View>

      <ChangeEmailModal
        visible={emailModalVisible}
        setVisible={setEmailModalVisible}
      />

      <ChangePhoneModal
        visible={phoneModalVisible}
        setVisible={setPhoneModalVisible}
      />
    </View>
  );
};

export default CommunicationInfoCard;

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
