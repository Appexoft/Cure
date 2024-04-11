/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { fontH3, fontH5 } from '../../../../../../utils/themeUtils';
import { useTranslation } from 'react-i18next';
import { RadioButton } from 'react-native-radio-buttons-group';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import ChoosePhotoModal from '@components/modals/choose-photo-modal';
import {
  ImageEntityType,
  ImageType,
} from '../../../../../../utils/entityUtils';
import useAuth from '@screens/auth/authContext/useAuth';
import { BorderRadius, Color } from '../../../../../../utils/GlobalStyles';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';

interface Props {
  data: any;
  setData: any;
  currentStep: number;
  stepLength: number;
}

const IdentityProof: React.FC<Props> = ({
  currentStep,
  stepLength,
  data,
  setData,
}) => {
  const { t } = useTranslation();
  const { userEntity } = useAuth();
  const [documentType, setDocumentType] = useState<string>('');
  const [proofOfAddress, setProofOfAddress] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshAvatar, setRefreshAvatar] = useState(false);
  const [message, setMessage] = useState(false);
  const [isPassportLoaded, setIsPassportLoaded] = useState(false);

  const successfulUpload = () => {
    setData(true);
    setIsPassportLoaded(true);
    setRefreshAvatar(true),
      setMessage(true),
      setTimeout(() => {
        setMessage(false);
      }, 2000);
  };

  function onPressDocumentButton(e: string) {
    setDocumentType(e);
  }

  function onPressAddressButton(e: string) {
    setProofOfAddress(e);
  }

  const uploadDocumentType = () => {
    setIsModalOpen(true);
  };

  const uploadProofOfAddress = () => {
    setIsModalOpen(true);
  };

  return (
    <ScrollView style={styles.container}>
      {message && (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: Color.main,
            paddingVertical: 10,
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            borderRadius: scaleWidth(10),
          }}>
          <Text style={{ color: 'white' }}>Upload is successuful</Text>
        </View>
      )}

      <WizzardTitleAndStep
        title={t('header:applyAsDoctor:identityProof')}
        currentStep={currentStep}
        stepLength={stepLength}
      />

      <View style={styles.documentTypeBox}>
        <Text style={styles.description}>
          According to{' '}
          <Text style={styles.descriptionBold}> Law 129/2019 </Text>for
          combating money laundering and terrorist financing, Cure.care is a
          reporting entity and has the legal obligation to ensure the{' '}
          <Text style={styles.descriptionBold}>
            remote identification of its customers.
          </Text>
        </Text>
        <Text style={styles.title}>
          {true ? 'Your citizenship' : 'Take a selfie now'}
        </Text>
      </View>
      {!isPassportLoaded ? (
        <View style={{ width: '100%' }}>
          <View style={{ flexDirection: 'row', marginTop: scaleHeight(20) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                id={'Romanian citizen'}
                onPress={onPressDocumentButton}
                selected={documentType === 'Romanian citizen'}
              />
              <Text>{t('account:personalInformation:romanianCitizen')}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                id={'Foreigner'}
                onPress={onPressDocumentButton}
                selected={documentType === 'Foreigner'}
              />
              <Text>{t('account:personalInformation:foreigner')}</Text>
            </View>
          </View>
          <Text style={{ marginTop: scaleHeight(24) }}>
            You should upload your national Id / passport.
          </Text>
          <View style={styles.btnViewStyle}>
            <ButtonPrimary
              style={{ width: '100%', margin: 0 }}
              onPress={uploadDocumentType}
              disabled={!documentType.length}
              titleStyle={styles.btnSave}
              title={
                documentType === 'Romanian citizen'
                  ? t('common:uploadNationalID')
                  : t('common:uploadPassport')
              }
            />
          </View>
        </View>
      ) : (
        <View style={styles.documentTypeBox}>
          <Text
            style={{
              lineHeight: 20,
              marginBottom: scaleHeight(40),
              width: '100%',
              textAlign: 'left',
            }}>
            Make sure your face is well lit and no obstacles (glasses, face
            masks, etc.) are covering it.
          </Text>
          <Image
            style={styles.imgSelfie}
            source={require('@assets/medicalIcons/selfie.png')}
          />
          <View style={styles.btnViewStyle}>
            <ButtonPrimary
              onPress={uploadProofOfAddress}
              disabled={false}
              titleStyle={styles.btnSave}
              title={t('common:takeSelfie')}
            />
          </View>
        </View>
      )}

      <ChoosePhotoModal
        isModalOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        id={userEntity?.id}
        imageType={ImageType.AVATAR_SMALL}
        imageEntityType={ImageEntityType.PATIENT}
        onSuccess={successfulUpload}
      />
    </ScrollView>
  );
};

export default IdentityProof;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  description: {
    fontFamily: 'Urbanist',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'left',
    width: '100%',
  },
  descriptionBold: {
    fontFamily: 'Urbanist',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  title: {
    fontFamily: 'Urbanist',
    fontSize: 16,
    width: '100%',
    fontWeight: '700',
    lineHeight: 18,
    marginTop: scaleHeight(30),
    textAlign: 'left',
  },
  imgSelfie: {
    width: scaleWidth(200),
    height: scaleHeight(234),
  },
  headerLabel: {
    fontSize: fontH3,
    fontWeight: '600',
  },

  contentContainer: {
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
    color: '#83CDFA',
  },

  documentTypeBox: {
    alignItems: 'center',
    width: '100%',
    marginTop: scaleHeight(20),
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: scaleHeight(30),
    marginBottom: scaleHeight(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },

  svgAvatar: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    borderRadius: scaleWidth(BorderRadius.card),
    position: 'absolute',
    right: scaleWidth(24),
    bottom: scaleHeight(21),
    overflow: 'hidden',
  },
});
