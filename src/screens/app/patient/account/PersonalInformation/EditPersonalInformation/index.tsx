import React, {memo, useState} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Color, Margin, Sizes} from '../../../../../../utils/GlobalStyles';
import TextInputCustom from '@components/input/TextInputCustom';
import {scaleHeight, scaleWidth} from '../../../../../../utils/size';
import {useTranslation} from 'react-i18next';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import {Auth} from 'aws-amplify';
import useAuth from '@screens/auth/authContext/useAuth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FONTS from '../../../../../../utils/fonts';
import {fontH5} from '../../../../../../utils/themeUtils';
import ROUTES from '../../../../../../utils/routes';
import DatePickerInput from '@components/datePicker';
import GenderSelection from '@screens/app/common/GenderSelection';
import {Gender} from '../../../../../../utils/domainEntities';

interface EditPersonalInformationProps {
  navigation: any;
}

const EditPersonalInformation: React.FC<EditPersonalInformationProps> = memo(
  ({ navigation }) => {
    const { handleUpdatePersonalInfo, patient, userEntity, idToken } =
      useAuth();
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState<string>(
      patient?.nameGiven || '',
    );
    const [middleName, setMiddleName] = useState<string>('');
    const [lastName, setLastName] = useState<string>(patient?.nameFamily || '');
    const [gender, setGender] = useState<Gender>(patient?.gender || Gender.MALE);
    const [unixBirthDate, setUnixBirthDate] = useState<number | undefined>();
    const [birthday, setBirthday] = useState(
      new Date(patient.birthDate * 1000) || new Date(),
    );
    const [isDatePickerOpen, setIsDatePickerOpen] = useState<
      boolean | undefined
    >();
    const [loading, setLoading] = useState<boolean>(false);

    async function updateUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const data = {
          email: user?.attributes.email,
          given_name: firstName,
          family_name: lastName,
          gender,
          name: `${firstName} ${lastName}`,
        };
        await Auth.updateUserAttributes(user, data);
        handleUpdatePersonalInfo(firstName, lastName, gender, unixBirthDate);
        navigation.navigate(ROUTES.Patient_Personal_Information);
      } catch (err) {
        console.error('Error updating user:', err);
      }
    }

    console.log('userEntity', userEntity);
    console.log('patient', patient);

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          extraHeight={scaleHeight(100)}
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.container}>
          <View style={[styles.container, { alignItems: 'center' }]}>
            <TextInputCustom
              label={t('account:personalInformation:firstName')}
              placeholder={t('account:personalInformation:firstName')}
              isEditable={true}
              value={firstName}
              iconRight="edit-3"
              isMultiline
              onRawChangedText={(data) => {
                setFirstName(data);
              }}
              onChangedText={(data) => {
                setFirstName(data);
              }}
            />

            <TextInputCustom
              label={t('account:personalInformation:middleName')}
              placeholder={t('account:personalInformation:middleName')}
              isEditable={true}
              value={middleName}
              isMultiline
              iconRight="edit-3"
              onRawChangedText={(data) => {
                setMiddleName(data);
              }}
              onChangedText={(data) => {
                setMiddleName(data);
              }}
            />

            <TextInputCustom
              label={t('account:personalInformation:lastName')}
              placeholder={t('account:personalInformation:lastName')}
              isEditable={true}
              value={lastName}
              isMultiline
              iconRight="edit-3"
              onRawChangedText={(data) => {
                setLastName(data);
              }}
              onChangedText={(data) => {
                setLastName(data);
              }}
            />

            <GenderSelection value={gender} setValue={setGender} />

            <DatePickerInput
              label="account:personalInformation:birthday"
              placeholder="account:personalInformation:birthday"
              isOpen={isDatePickerOpen}
              setIsOpen={setIsDatePickerOpen}
              setUnixDate={setUnixBirthDate}
              setSelectedDate={setBirthday}
              selectedDate={birthday}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            titleStyle={styles.btnSave}
            title={t('common:save')}
            onPress={updateUser}
            isLoading={loading}
          />
        </View>
      </View>
    );
  },
);
export default EditPersonalInformation;

const styles = ScaledSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.pageBackground,
    paddingTop: scaleHeight(10),
  },
  radioButtonsGroup: {
    width: Sizes.input_size,
    marginBottom: scaleHeight(5),
    marginTop: scaleHeight(Margin.between_entries),
  },
  radioButtonsText: {
    lineHeight: 15,
    fontWeight: '400',
    color: Color.inputLabel,
    fontSize: fontH5,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Medium,
  },
  radioButtons: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
