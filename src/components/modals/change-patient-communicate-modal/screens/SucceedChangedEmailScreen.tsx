import React, { useEffect, useState } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import { Color, FontSize, Margin, Sizes } from '../../../../utils/GlobalStyles';
import fonts from '../../../../utils/fonts';
import { useTranslation } from 'react-i18next';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import ButtonPrimary from '@components/btns/ButtonPrimary';

const SuccedChangedEmail = ({ setModalType, setVisible }) => {
  const { t } = useTranslation();

  const handleCloseModal = () => {
    setModalType('changeInfo');
    setVisible(false);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <Image
          resizeMode="cover"
          source={require('../../../../assets/ChangeEmail/ChangeEmail.png')}
        />
        <Text style={styles.headText}>
          {t('account:communicationInformation:changeEmailInfo:changeEmail')}
        </Text>
        <Text style={styles.subHeadText}>
          {t(
            'account:communicationInformation:changeEmailInfo:changeEmailText3',
          )}
        </Text>

        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            titleStyle={styles.btnSave}
            title={t('common:save')}
            onPress={() => handleCloseModal()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: Sizes.modal_width,
    height: Sizes.modal_height,
    backgroundColor: Color.white,
    paddingTop: scaleHeight(70),
    borderRadius: scaleWidth(10),
    paddingHorizontal: scaleWidth(30),
    alignItems: 'center',
  },
  headText: {
    marginTop: scaleHeight(Margin.m_6xl),
    fontFamily: fonts.URBANIST.Regular,
    color: Color.text,
    fontWeight: '600',
    fontSize: FontSize.headingModalTitle_size,
  },
  subHeadText: {
    marginTop: scaleHeight(Margin.m_10),
    marginBottom: scaleHeight(Margin.m_10),
    fontFamily: fonts.URBANIST.Regular,
    color: Color.text,
    fontWeight: '600',
    fontSize: FontSize.fontH5,
    textAlign: 'center',
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: scaleHeight(50),
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});

export default SuccedChangedEmail;
