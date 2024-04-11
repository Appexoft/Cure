import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { fontH3, fontH5 } from '../../../../../../utils/themeUtils';
import { useTranslation } from 'react-i18next';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import ROUTES from '../../../../../../utils/routes';
import { useDispatch } from 'react-redux';
import {Color} from "../../../../../../utils/GlobalStyles";
import SvgDoctorOk from "@assets/svgs/ok/SvgDoctorOk";

const DoctorCongratulationScreen = ({ navigation, isFull }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleTakeHome = () => {
    // dispatch(onSuccess());
    navigation.navigate(ROUTES.Doctor_BottomTab);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <SvgDoctorOk width={200} height={200} />
        <Text style={styles.infoText}>{t('common:congratulations')}</Text>
        <Text style={{ textAlign: 'center', marginTop: scaleHeight(20) }}>
          {t('header:applyAsDoctor:congratulationsSubText')}
        </Text>
      </View>
      <View style={styles.btnViewStyle}>
        <ButtonPrimary
          onPress={handleTakeHome}
          titleStyle={styles.btnSave}
          title={t('common:takeHomeBtn')}
        />
      </View>
    </ScrollView>
  );
};

export default DoctorCongratulationScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleWidth(30),
    paddingVertical: scaleHeight(20),
  },

  headerLabel: {
    fontSize: fontH3,
    fontWeight: '600',
  },

  contentContainer: {
    marginTop: scaleHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoText: {
    fontSize: fontH3,
    marginTop: scaleHeight(30),
  },

  stepLabel: {
    fontSize: fontH5,
    marginTop: scaleHeight(5),
    color: Color.main,
  },

  documentTypeBox: {
    marginTop: scaleHeight(20),
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginTop: scaleHeight(30),
    marginBottom: scaleHeight(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});
