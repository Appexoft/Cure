import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { fontH3, fontH4, fontH5 } from '../../../../../../utils/themeUtils';
import { useTranslation } from 'react-i18next';
import TextInputCustom from '@components/input/TextInputCustom';
import PhoneInput from 'react-native-phone-input';
import {
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../../../utils/GlobalStyles';
import { Dropdown } from 'react-native-element-dropdown';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import DoctorPrefixDropdown from '@screens/app/common/dropdowns/DoctorPrefixDropdown';
import LanguageDropdown from '@screens/app/common/dropdowns/LanguageDropdown';
import GenderSelection from '@screens/app/common/GenderSelection';
import { Gender } from '../../../../../../utils/domainEntities';

interface Props {
  data: any;
  setData: any;
  currentStep: number;
  stepLength: number;
}

const DoctorPersonalDetail: React.FC<Props> = ({
  currentStep,
  stepLength,
  data,
  setData,
}) => {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <WizzardTitleAndStep
        title={t('header:applyAsDoctor:personalDetailsLabel')}
        currentStep={currentStep}
        stepLength={stepLength}
      />

      <View
        style={{
          alignItems: 'center',
          marginVertical: scaleHeight(15),
        }}>
        <View style={{ width: '100%' }}>
          <DoctorPrefixDropdown
            value={data?.personalDetails?.prefix}
            setValue={(item) => {
              setData({
                ...data,
                personalDetails: {
                  ...data?.personalDetails,
                  prefix: item,
                },
              });
            }}
            placeholderKey={'common:choosePrefix'}
          />
        </View>

        <TextInputCustom
          label={t('account:personalInformation:firstName')}
          placeholder={t('account:personalInformation:firstName')}
          isEditable={true}
          value={data?.personalDetails.firstName}
          iconRight="edit-3"
          isMultiline
          onChangedText={(firstName) => {
            setData({
              ...data,
              personalDetails: {
                ...data?.personalDetails,
                firstName: firstName,
              },
            });
          }}
        />
        <TextInputCustom
          label={t('account:personalInformation:lastName')}
          placeholder={t('account:personalInformation:lastName')}
          isEditable={true}
          value={data?.personalDetails.lastName}
          iconRight="edit-3"
          isMultiline
          onChangedText={(lastName) => {
            setData({
              ...data,
              personalDetails: {
                ...data?.personalDetails,
                lastName: lastName,
              },
            });
          }}
        />

        <GenderSelection
          value={data?.personalDetails.gender}
          setValue={(gender: Gender) => {
            setData({
              ...data,
              personalDetails: {
                ...data?.personalDetails,
                gender: gender,
              },
            });
          }}
        />
        <View style={{ width: '100%', marginTop: scaleHeight(12) }}>
          <Text>{t('account:communicationInformation:phoneNumber')}</Text>
          <PhoneInput
            style={styles.phoneInput}
            initialCountry={'us'} 
            initialValue={data?.personalDetails.phoneNumber}
            autoFormat
            onChangePhoneNumber={(phone) =>
              setData({
                ...data,
                personalDetails: {
                  ...data?.personalDetails,
                  phoneNumber: '+' + phone.replace(/\D/g, ''),
                },
              })
            }
            textProps={{
              placeholder: 'Enter a phone number...',
            }}
          />
        </View>
        <TextInputCustom
          label={t('account:personalInformation:yearsOfExperience')}
          placeholder={t('account:personalInformation:yearsOfExperience')}
          isEditable={true}
          value={data?.personalDetails.yearsOfExperience}
          iconRight="edit-3"
          isMultiline
          onChangedText={(yearsOfExperience) => {
            setData({
              ...data,
              personalDetails: {
                ...data?.personalDetails,
                yearsOfExperience: yearsOfExperience,
              },
            });
          }}
        />
        <TextInputCustom
          label={t('services:description')}
          placeholder={t('common:detailsAboutMe')}
          isEditable={true}
          value={data?.personalDetails.description}
          iconRight="edit-3"
          isMultiline
          style={{ height: 100, marginBottom: scaleHeight(100) }}
          onChangedText={(description) => {
            setData({
              ...data,
              personalDetails: {
                ...data?.personalDetails,
                description: description,
              },
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default DoctorPersonalDetail;

const styles = StyleSheet.create({
  container: {
    height: '60%',
  },

  headerLabel: {
    fontSize: fontH3,
    fontWeight: '600',
  },

  stepLabel: {
    fontSize: fontH5,
    marginTop: scaleHeight(5),
    color: '#83CDFA',
  },
  phoneInput: {
    marginTop: scaleHeight(5),
    borderWidth: 1,
    borderRadius: scaleWidth(14),
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(14),
    borderColor: Color.border,
    backgroundColor: Color.white,
  },

  dropdown: {
    height: scaleHeight(50),
    borderColor: Color.border,
    backgroundColor: Color.white,
    borderWidth: 0.5,
    borderRadius: BorderRadius.medium,
    paddingHorizontal: Padding.p_xs,
    marginTop: Margin.m_xs,
  },
  placeholderStyle: {
    fontSize: FontSize.fontH4,
    fontWeight: '300',
    color: Color.inputPlaceholder,
  },
  selectedTextStyle: {
    fontSize: FontSize.fontH4,
    fontWeight: '300',
  },
  iconStyle: {
    width: scaleWidth(20),
    height: scaleWidth(20),
  },
  inputSearchStyle: {
    fontSize: FontSize.fontH4,
    borderRadius: BorderRadius.large,
    paddingLeft: scaleWidth(10),
    backgroundColor: Color.white,
  },
});
