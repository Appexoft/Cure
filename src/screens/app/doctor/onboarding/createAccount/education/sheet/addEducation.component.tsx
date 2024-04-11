import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../../utils/size';
import { Dropdown } from 'react-native-element-dropdown';
import {
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Padding,
  Sizes,
} from '../../../../../../../utils/GlobalStyles';
import TextInputCustom from '@components/input/TextInputCustom';
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

  addPractitionerEducation: any;
  updatePractitionerEducation: any;
  updateSuccess: boolean;
  loading: boolean;
  error?: string;
}

function AddEducationComponent(props: Props) {
  const {
    practitioner,
    entity,
    addPractitionerEducation,
    updatePractitionerEducation,
    updateSuccess,
    loading,
    error,
  } = props;
  const { t } = useTranslation();

  const DEGREE_TYPES = [
    { label: t('common:degreeType:PHD'), value: DegreeType.PHD },
    { label: t('common:degreeType:MASTER'), value: DegreeType.MASTER },
    { label: t('common:degreeType:BACHELOR'), value: DegreeType.BACHELOR },
    {
      label: t('common:degreeType:HIGH_SCHOOL'),
      value: DegreeType.HIGH_SCHOOL,
    },
    { label: t('common:degreeType:ASSOCIATE'), value: DegreeType.ASSOCIATE },
  ];
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

  const getEntityDegreeField = (field: string) => {
    console.log('Entity', entity);
    return entity && entity[field] ? entity[field] : DegreeType.PHD;
  };

  const [isFocus, setIsFocus] = useState(false);

  const [school, setSchool] = useState(getEntityField('nameText'));
  const [degree, setDegree] = useState(getEntityDegreeField('degreeType'));
  const [fieldOfStudy, setFieldOfStudy] = useState(getEntityField('field'));
  const [startDate, setStartDate] = useState(getEntityDateField('startPeriod'));
  const [endDate, setEndDate] = useState(getEntityDateField('endPeriod'));
  const [unixEducationDate, setUnixEducationDate] = useState();
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [docs, setDocs] = useState([]);

  const onSaveEducation = () => {
    let item: IProfileCredentialDto = {
      id: entity?.id,
      active: true,
      nameText: school,
      credentialType: CredentialType.EDUCATION,
      degreeType: degree,
      position: degree,
      field: fieldOfStudy,
      startPeriod: startDate,
      endPeriod: endDate,
      practitionerId: practitioner?.id,
      organizationId: null,
      docs: docs,
      lastModifiedDate: entity?.lastModifiedDate ?? new Date(),
      createdDate: entity?.createdDate ?? new Date(),
    };
    if (entity && entity.id) {
      updatePractitionerEducation(item);
    } else {
      addPractitionerEducation(item);
    }
  };

  const isDataFiled = () => {
    return (
      !!school &&
      !!degree &&
      !!fieldOfStudy &&
      !!startDate &&
      !!unixEducationDate
    );
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <ModalHeader
        onPress={() => console.log('closing')}
        hideCloseIcon={true}
        title={t('header:applyAsDoctor:educationDetails:title')}
        subtitle={t('header:applyAsDoctor:educationDetails:subTitle')}
      />

      <ScrollView>
        <View style={{ width: '90%', marginTop: scaleHeight(20) }}>
          <Text>{t('header:applyAsDoctor:educationComp:degree')}</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={DEGREE_TYPES}
            containerStyle={{
              borderRadius: 16,
              backgroundColor: Color.border,
              marginTop: 8,
              overflow: 'hidden',
            }}
            itemContainerStyle={{ backgroundColor: Color.white }}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={degree ? degree : t('common:degreeType:PHD')}
            searchPlaceholder={t('common:search')}
            value={degree}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setDegree(item?.value);
              setIsFocus(false);
            }}
          />
        </View>

        <TextInputCustom
          label={t('header:applyAsDoctor:educationComp:school')}
          placeholder={t(
            'header:applyAsDoctor:educationDetails:schoolExampleLabel',
          )}
          modalInputWidth
          isEditable={true}
          marginTop={true}
          value={school}
          iconRight="home"
          isMultiline
          onRawChangedText={(school) => {
            setSchool(school);
          }}
          onChangedText={(school) => {
            setSchool(school);
          }}
        />

        <TextInputCustom
          label={t('header:applyAsDoctor:educationComp:fieldOfStudy')}
          placeholder={t(
            'header:applyAsDoctor:educationDetails:fieldOfStudyExampleLabel',
          )}
          modalInputWidth
          isEditable={true}
          marginTop={true}
          value={fieldOfStudy}
          iconRight="book-open"
          isMultiline
          onRawChangedText={(fieldOfStudy) => {
            setFieldOfStudy(fieldOfStudy);
          }}
          onChangedText={(fieldOfStudy) => {
            setFieldOfStudy(fieldOfStudy);
          }}
        />

        <DatePickerInput
          label={t('common:startDate')}
          placeholder="dd/mm/yyyy"
          isOpen={openStartDate}
          setIsOpen={setOpenStartDate}
          setUnixDate={setUnixEducationDate}
          setSelectedDate={setStartDate}
          selectedDate={startDate}
          iconRight="calendar"
        />

        <DatePickerInput
          label={t('common:endDate')}
          placeholder="dd/mm/yyyy"
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
            onSaveEducation();
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
  docUploadContainer: {
    height: scaleHeight(220),
    marginTop: scaleHeight(10),
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

export default AddEducationComponent;
