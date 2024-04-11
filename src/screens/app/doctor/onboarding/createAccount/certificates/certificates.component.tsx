import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { fontH3, fontH5 } from '../../../../../../utils/themeUtils';
import { useTranslation } from 'react-i18next';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import DoctorCertificateCard from '@screens/app/doctor/onboarding/createAccount/certificates/card/CertificateCard';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import { SheetManager } from 'react-native-actions-sheet';
import {
  ACTION_SHEET_ADD_CERTIFICATE,
  CredentialType,
  EntityType,
  IPractitioner,
  IProfileCredential,
} from '../../../../../../utils/domainEntities';

interface Props {
  data: any;
  practitioner: IPractitioner;
  items: IProfileCredential[];
  fetch: any;
  deleteItem: any;
  setData: any;
  currentStep: number;
  updateSuccess: boolean;
  stepLength: number;
}

const DoctorCertificate: React.FC<Props> = ({
  currentStep,
  stepLength,
  practitioner,
  data,
  setData,
  items,
  updateSuccess,
  fetch,
  deleteItem
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (practitioner && practitioner.id && updateSuccess) {
      fetch({
        pageIndex: 0,
        pageSize: 100, 
        sortBy: [],
        filters: [
          {
            id: 'credentialType',
            value: CredentialType.DIPLOMA,
            values: [],
          },
        ],
        byEntity: {
          entityType: EntityType.PRACTITIONER_ENTITY,
          id: practitioner.id,
        }, 
      });
      SheetManager.hide(ACTION_SHEET_ADD_CERTIFICATE);
    }
  }, [updateSuccess, fetch, practitioner]);

  return (
    <ScrollView style={styles.container}>
      <WizzardTitleAndStep
        title={t('header:applyAsDoctor:certificates')}
        currentStep={currentStep}
        stepLength={stepLength}
      />

      <View style={[styles.contentContainer]}>
        {items && items.length > 0 ? (
          items.map((education: IProfileCredential, idx: number) => (
            <DoctorCertificateCard
              key={idx}
              entry={education}
              deleteEntry={(item: IProfileCredential) => {
                if (deleteItem) {
                  deleteItem(item);
                }
              }}
              editEntry={(item: IProfileCredential) => {
                SheetManager.show(ACTION_SHEET_ADD_CERTIFICATE, {
                  payload: { practitioner: practitioner, entity: item },
                });
              }}
              data={data}
              setData={setData}
            />
          ))
        ) : (
          //   todo replace this wiht empty icon
          <View>
            <Image
              resizeMode="cover"
              source={require('@assets/emptyCertificates/SadMood.png')}
            />
            <Text style={styles.infoText}>{t('search:emptyCommon:title')}</Text>
          </View>
        )}

        {!data.education.length && (
          <View style={styles.btnViewStyle}>
            <ButtonPrimary
              onPress={() => {
                SheetManager.show(ACTION_SHEET_ADD_CERTIFICATE, {
                  payload: { practitioner: practitioner },
                });
              }}
              titleStyle={styles.btnSave}
              title={t('common:addNew')}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default DoctorCertificate;

const styles = StyleSheet.create({
  container: {
  },

  headerLabel: {
    fontSize: fontH3,
    fontWeight: '600',
  },

  contentContainer: {
    paddingTop: scaleHeight(10),
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
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginTop: scaleHeight(30),
    marginBottom: scaleHeight(30),
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});
