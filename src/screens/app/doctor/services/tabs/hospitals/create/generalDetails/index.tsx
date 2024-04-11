import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import TextInputCustom from '@components/input/TextInputCustom';
import PhoneInput from 'react-native-phone-input';
import {
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../../../../../utils/GlobalStyles';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import OrgTypeDropdown from '@screens/app/common/dropdowns/OrgTypeDropdown';
import OrgSizeDropdown from '@screens/app/common/dropdowns/OrgSizeDropdown';
import MedicalFieldDropdown from '@screens/app/common/dropdowns/MedicalFieldDropdown';
import { scaleHeight, scaleWidth } from '../../../../../../../../utils/size';
import { fontH3, fontH5 } from '../../../../../../../../utils/themeUtils';

interface Props {
  data: any;
  setData: any;
  currentStep: number;
  stepLength: number;
}

const HospitalGeneralDetails: React.FC<Props> = ({
  currentStep,
  stepLength,
  data,
  setData,
}) => {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <WizzardTitleAndStep
        title={t('header:applyAsOrg:details')}
        currentStep={currentStep}
        stepLength={stepLength}
      />

      <View
        style={{
          alignItems: 'center',
          marginVertical: scaleHeight(15),
        }}>
        <TextInputCustom
          label={t('common:name')}
          placeholder={t('common:name')}
          isEditable={true}
          value={data.name}
          iconRight="edit-3"
          isMultiline
          onChangedText={(name) => {
            setData({
              ...data,
              name: name,
            });
          }}
        />

        <View style={{ width: '100%', marginTop: scaleHeight(10) }}>
          <OrgTypeDropdown
            value={data.type}
            setValue={(value) => {
              setData({
                ...data,
                type: value,
              });
            }}
          />
        </View>

        <View style={{ width: '100%', marginTop: scaleHeight(10) }}>
          <OrgSizeDropdown
            value={data.size}
            setValue={(value) => {
              setData({
                ...data,
                size: value,
              });
            }}
          />
        </View>

        <View
          style={{
            width: '100%',
            marginTop: scaleHeight(10),
            marginBottom: scaleHeight(5),
          }}>
          <MedicalFieldDropdown
            value={data.medicalField}
            setValue={(item) => {
              setData({
                ...data,
                medicalField: item,
              });
            }}
            placeholderKey={'common:select'}
          />
        </View>

        <View
          style={{
            width: '100%',
            marginTop: scaleHeight(5),
          }}>
          <TextInputCustom
            label={t('account:communicationInformation:email')}
            placeholder={t('account:communicationInformation:email')}
            isEditable={true}
            value={data.email}
            iconRight="edit-3"
            isMultiline
            onChangedText={(email) => {
              setData({
                ...data,
                email: email,
              });
            }}
          />
        </View>

        <View style={{ width: '100%', marginTop: scaleHeight(5) }}>
          <Text>{t('account:communicationInformation:phoneNumber')}</Text>
          <PhoneInput
            style={styles.phoneInput}
            initialCountry={'us'} // use current locale? or user locale? userEntity?.locale?.toLowerCase() ||
            initialValue={data.phoneNumber}
            autoFormat
            onChangePhoneNumber={(phone) =>
              setData({
                ...data,
                phoneNumber: '+' + phone.replace(/\D/g, ''),
              })
            }
            textProps={{
              placeholder: 'Enter a phone number...',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HospitalGeneralDetails;

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
