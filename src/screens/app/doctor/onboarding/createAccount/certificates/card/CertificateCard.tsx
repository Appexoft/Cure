import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../../../utils/size';
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { convertToDate } from '../../../../../../../utils/fhir/fhirTypes';
import { IProfileCredential } from '../../../../../../../utils/domainEntities';
import { DocumentLinkDto } from '../../../../../../../utils/entityUtils';

interface Props {
  entry: IProfileCredential;
  deleteEntry: (entry: IProfileCredential) => {};
  editEntry: (entry: IProfileCredential) => {};
  key: number;
}

const CertificateCard: React.FC<Props> = ({
  entry,
  deleteEntry,
  editEntry,
  key,
}) => {
  const { t } = useTranslation();

  const deleteFn = (item: IProfileCredential) => {
    if (deleteEntry) {
      deleteEntry(item);
    }
  };
  const convertStringToDate = (date) => {
    const test = new Date(date);
    return convertToDate(Math.floor(test.getTime() / 1000));
  };

  return (
    <ScrollView style={{ width: '100%' }}>
      <View style={styles.cardContainer}>
        <View style={styles.infoField}>
          <View style={styles.fieldHeader}>
            <Icon size={15} name="grid" />
            <Text style={styles.headerText}>
              {t('header:applyAsDoctor:type')}
            </Text>
          </View>
          <Text>{entry?.credentialType}</Text>
        </View>

        <View style={styles.infoField}>
          <View style={styles.fieldHeader}>
            <Icon size={15} name="file" />
            <Text style={styles.headerText}>{t('common:name')}</Text>
          </View>
          <Text>{entry?.nameText}</Text>
        </View>

        <View style={styles.infoField}>
          <View style={styles.fieldHeader}>
            <Icon size={15} name="briefcase" />
            <Text style={styles.headerText}>
              {t('header:applyAsDoctor:certificationsComp:issuingOrg')}
            </Text>
          </View>
          <Text>{entry?.issueOrganization}</Text>
        </View>

        <View style={styles.infoField}>
          <View style={styles.fieldHeader}>
            <Icon size={15} name="book-open" />
            <Text style={styles.headerText}>
              {t('header:applyAsDoctor:certificationsComp:fieldOfStudy')}
            </Text>
          </View>
          <Text>{entry?.field}</Text>
        </View>

        <View style={styles.infoField}>
          <View style={styles.fieldHeader}>
            <Icon size={15} name="calendar" />
            <Text style={styles.headerText}>{t('common:issueDate')}</Text>
          </View>
          <Text>
            {entry.startPeriod ? convertStringToDate(entry.startPeriod) : ''}
          </Text>
        </View>

        <View style={styles.infoField}>
          <View style={styles.fieldHeader}>
            <Icon size={15} name="calendar" />
            <Text style={styles.headerText}>{t('common:expireDate')}</Text>
          </View>
          <Text>
            {entry.endPeriod ? convertStringToDate(entry.endPeriod) : ''}
          </Text>
        </View>

        <View style={styles.infoField}>
          <View style={styles.fieldHeader}>
            <Icon size={15} name="check" />
            <Text style={styles.headerText}>
              {t('header:applyAsDoctor:certificationsComp:docs')}
            </Text>
          </View>
          {entry &&
            entry.docs &&
            entry.docs.length > 0 &&
            entry.docs.map((item: DocumentLinkDto, index: number) => (
              <Image
                style={{
                  resizeMode: 'cover',
                  borderRadius: 10,
                  marginTop: scaleHeight(5),
                  height: scaleHeight(150),
                  width: scaleHeight(150),
                }}
                source={{ uri: item?.imageUrl }}
                // source={require('@assets/WorkLocation/hospital-picture.png')}
              />
            ))}

          <Text>{entry.credentialUrl}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.btnViewStyle}>
            <ButtonPrimary
              onPress={() => deleteFn(entry)}
              style={{ backgroundColor: 'white' }}
              titleStyle={{ textTransform: 'capitalize', color: 'black' }}
              title={t('common:remove')}
            />
          </View>
          <View style={styles.btnViewStyle}>
            <ButtonPrimary
              onPress={() => editEntry(entry)}
              titleStyle={styles.btnSave}
              title={t('common:edit')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CertificateCard;

const styles = ScaledSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: '95%',
    paddingVertical: scaleHeight(20),
    paddingHorizontal: scaleWidth(20),
    borderRadius: scaleWidth(15),
    marginBottom: scaleHeight(20),
  },
  infoField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(15),
  },
  fieldHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: scaleWidth(10),
  },
  btnViewStyle: {
    justifyContent: 'flex-end',
    flex: 1,
    marginTop: scaleHeight(5),
    marginRight: scaleWidth(10),
    marginLeft: scaleWidth(10),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});
