import React, { memo, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PersonalInfoCard from '@components/cards/PersonalInfoCard';
import CommunicationInfoCard from '@components/cards/CommunicationInfoCard';
import AddressInfoCard from '@components/cards/AddressInfoCard';

const PersonalInformation = memo(({ navigation }) => {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <PersonalInfoCard navigation={navigation} />
        <CommunicationInfoCard />
        <AddressInfoCard navigation={navigation}/>
        <KeyboardAwareScrollView
          extraHeight={scaleHeight(100)}
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.container}>
          <View style={[styles.container, { alignItems: 'center' }]}></View>
        </KeyboardAwareScrollView>
      </View>
    </ScrollView>
  );
});
export default PersonalInformation;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
    paddingHorizontal: scaleWidth(15),
    paddingTop: scaleHeight(10),
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
