import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../../utils/size';
import {
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Padding,
  Sizes,
} from '../../../../../../../utils/GlobalStyles';
import TextInputCustom from '@components/input/TextInputCustom';
import DatePicker from 'react-native-date-picker';
import { convertToDate } from '../../../../../../../utils/fhir/fhirTypes';
import { useTranslation } from 'react-i18next';
import fonts from '../../../../../../../utils/fonts';
import ModalHeader from '@components/modals/modalHeader';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import {
  CredentialType,
  DegreeType,
  IPractitioner,
  IProfileCredentialDto,
} from '../../../../../../../utils/domainEntities';
import DatePickerInput from '@components/datePicker';
import PhotoUploadInput from '@screens/app/common/media/photoUpload/PhotoUploadInput';
import {
  ImageEntityType,
  ImageType,
} from '../../../../../../../utils/entityUtils';

interface Props {
  practitioner: IPractitioner;
  entity: IProfileCredentialDto;

  addPractitionerCertificates: any;
  updatePractitionerCertificates: any;
  updateSuccess: boolean;
  loading: boolean;
  error?: string;
}

function AddCertificateComponent(props: Props) {
  const {
    practitioner,
    entity,
    addPractitionerCertificates,
    updatePractitionerCertificates,
    updateSuccess,
    loading,
    error,
  } = props;
  const { t } = useTranslation();

  const getEntityField = (field: string) => {
    return entity && entity[field] ? entity[field] : '';
  };

  const getEntityDateField = (field: string) => {
    let dateAsString: string = entity && entity[field] ? entity[field] : null;
    if (dateAsString) {
      return new Date(dateAsString);
    }
    return new Date();
  };

  const [name, setName] = useState(getEntityField('nameText'));
  const [fieldOfStudy, setFieldOfStudy] = useState(getEntityField('field'));

  const [issuingOrganisation, setIssuingOrganisation] = useState(
    getEntityField('issueOrganization'),
  );

  const [startDate, setStartDate] = useState(getEntityDateField('startPeriod'));
  const [endDate, setEndDate] = useState(getEntityDateField('endPeriod'));
  const [unixEducationDate, setUnixEducationDate] = useState();
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [docs, setDocs] = useState([]);

  const onSave = () => {
    let item: IProfileCredentialDto = {
      id: entity?.id,
      active: true,
      nameText: name,
      issueOrganization: issuingOrganisation,
      credentialType: CredentialType.DIPLOMA,
      field: fieldOfStudy,
      startPeriod: startDate,
      endPeriod: endDate,
      docs: docs,

      practitionerId: practitioner?.id,
      organizationId: null,
      lastModifiedDate: entity?.lastModifiedDate ?? new Date(),
      createdDate: entity?.createdDate ?? new Date(),
    };
    if (entity && entity.id) {
      updatePractitionerCertificates(item);
    } else {
      addPractitionerCertificates(item);
    }
  };

  const isDataFiled = () => {
    return (
      !!name &&
      !!name &&
      !!issuingOrganisation &&
      !!fieldOfStudy &&
      !!startDate &&
      !!endDate &&
      !!unixEducationDate
    );
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <ModalHeader
        onPress={() => console.log('closing')}
        hideCloseIcon={true}
        title={t('header:applyAsDoctor:certificateDetails:title')}
        subtitle={t('header:applyAsDoctor:certificateDetails:subTitle')}
      />
      <ScrollView>
        <TextInputCustom
          label={t('common:name')}
          placeholder={t('common:name')}
          modalInputWidth
          isEditable={true}
          value={name}
          iconRight="home"
          isMultiline
          onRawChangedText={(crt) => {
            setName(crt);
          }}
          onChangedText={(crt) => {
            setName(crt);
          }}
        />

        <TextInputCustom
          label={t('header:applyAsDoctor:educationComp:issuingOrg')}
          placeholder={t('header:applyAsDoctor:educationComp:issuingOrg')}
          modalInputWidth
          isEditable={true}
          value={issuingOrganisation}
          iconRight="award"
          isMultiline
          onRawChangedText={(crt) => {
            setIssuingOrganisation(crt);
          }}
          onChangedText={(crt) => {
            setIssuingOrganisation(crt);
          }}
        />

        <TextInputCustom
          label={t('header:applyAsDoctor:educationComp:fieldOfStudy')}
          placeholder={t('header:applyAsDoctor:educationComp:fieldOfStudy')}
          modalInputWidth
          isEditable={true}
          value={fieldOfStudy}
          iconRight="book-open"
          isMultiline
          onRawChangedText={(crt) => {
            setFieldOfStudy(crt);
          }}
          onChangedText={(crt) => {
            setFieldOfStudy(crt);
          }}
        />

        <DatePickerInput
          label={t('common:issueDate')}
          placeholder={t('common:issueDate')}
          isOpen={openStartDate}
          setIsOpen={setOpenStartDate}
          setUnixDate={setUnixEducationDate}
          setSelectedDate={setStartDate}
          selectedDate={startDate}
          iconRight="calendar"
        />

        <DatePickerInput
          label={t('common:expireDate')}
          placeholder={t('common:expireDate')}
          isOpen={openEndDate}
          setIsOpen={setOpenEndDate}
          setUnixDate={setUnixEducationDate}
          setSelectedDate={setEndDate}
          selectedDate={endDate}
          iconRight="calendar"
        />

        <View style={styles.docUploadContainer}>
          <PhotoUploadInput
            photos={docs}
            setPhotos={(items: any) => {
              setDocs(items);
            }}
            title={t('services:attachProof')}
            subtitle={t('services:proofExplanation')}
            entityId={entity?.id}
            imageType={ImageType.PHOTO_MEDIUM_MOBILE}
            imageEntityType={ImageEntityType.CREDENTIALS}
            hidePreview={false}
            skipUpload={true}
          />
        </View>
      </ScrollView>

      <View style={styles.btnViewStyle}>
        <ButtonPrimary
          onPress={() => {
            onSave();
          }}
          isLoading={loading}
          titleStyle={styles.btnSave}
          title={t('common:save')}
          disabled={!isDataFiled()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeIcon: {
    position: 'absolute',
    top: scaleHeight(0),
    right: scaleWidth(0),
  },
  docUploadContainer: {
    height: scaleHeight(220),
    marginTop: scaleHeight(10),
  },
  bigModalContainer: {
    width: Sizes.modal_width,
    height: Sizes.big_modal_height,
    backgroundColor: Color.white,
    paddingTop: scaleHeight(40),
    borderRadius: scaleWidth(10),
    paddingHorizontal: scaleWidth(30),
    alignItems: 'center',
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
    marginTop: scaleHeight(10),
  },
  btnSave: {
    textTransform: 'capitalize',
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

export default AddCertificateComponent;
