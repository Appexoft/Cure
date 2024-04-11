import React, { useRef, useState } from 'react';
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
import { scaleHeight, scaleWidth } from '../../../../../../../../utils/size';
import { fontH3, fontH5 } from '../../../../../../../../utils/themeUtils';
import useAuth from '@screens/auth/authContext/useAuth';
import { commonStyles } from '../../../../../../../../utils/styles/commonStyles';

interface Props {
  data: any;
  setData: any;
  currentStep: number;
  stepLength: number;
}

const HospitalAdministrator: React.FC<Props> = ({
  currentStep,
  stepLength,
  data,
  setData,
}) => {
  const { t } = useTranslation();
  const { userEntity } = useAuth();
  const [iAmAdminEnabled, setIAmAdminEnabled] = useState(false);
  const [phoneInput, setPhoneInput] = useState(null);

  const onEnableIAmAdmin = (value: boolean) => {
    setIAmAdminEnabled(!iAmAdminEnabled);
    console.log('onEnableIAmAdmin', value);
    console.log('userEntity', userEntity);
    if (value) {
      setData({
        ...data,
        administratorFirstName: userEntity?.firstName,
        administratorLastname: userEntity?.lastName,
        administratorEmail: userEntity?.email,
        administratorPhoneNumber: userEntity?.phoneNumber,
      });
      if (phoneInput !== null) {
        phoneInput?.setValue(userEntity?.phoneNumber);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <WizzardTitleAndStep
        title={t('header:applyAsOrg:adminDetails')}
        currentStep={currentStep}
        stepLength={stepLength}
      />

      <View
        style={{
          alignItems: 'flex-start',
          marginTop: scaleHeight(15),
        }}>
        <View style={commonStyles.mb10}>
        </View>

        <TextInputCustom
          label={t('common:firstName')}
          placeholder={t('common:firstName')}
          isEditable={true}
          value={data.administratorFirstName}
          iconRight="edit-3"
          isMultiline
          onChangedText={(name) => {
            setData({
              ...data,
              administratorFirstName: name,
            });
          }}
        />

        <TextInputCustom
          label={t('common:lastName')}
          placeholder={t('common:lastName')}
          isEditable={true}
          value={data.administratorLastname}
          iconRight="edit-3"
          isMultiline
          onChangedText={(name) => {
            setData({
              ...data,
              administratorLastname: name,
            });
          }}
        />

        <TextInputCustom
          label={t('common:email')}
          placeholder={t('common:email')}
          isEditable={true}
          value={data.administratorEmail}
          iconRight="email"
          isMultiline
          onChangedText={(name) => {
            setData({
              ...data,
              administratorEmail: name,
            });
          }}
        />

        <View style={{ width: '100%', marginTop: scaleHeight(5) }}>
          <Text>{t('account:communicationInformation:phoneNumber')}</Text>
          <PhoneInput
            ref={(ref) => {
              setPhoneInput(ref);
            }}
            style={styles.phoneInput}
            initialCountry={'us'} // use current locale? or user locale? userEntity?.locale?.toLowerCase() ||
            initialValue={data.administratorPhoneNumber}
            autoFormat
            onChangePhoneNumber={(phone) =>
              setData({
                ...data,
                administratorPhoneNumber: '+' + phone.replace(/\D/g, ''),
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

export default HospitalAdministrator;

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
