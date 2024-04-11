import React, { useEffect, useState } from 'react';
import GenericDropdown from '@screens/app/common/dropdowns/GenericDropdown';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import {
  convertToMultiSelect,
  ICodeableConcept,
} from '../../../../utils/domainEntities';
import { useFetchMedicalFields } from '@screens/app/patient/search/filters/useFetchCodeableConcept';
import { getMedicalSvg } from '@assets/medicalIcons';

interface Props {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  placeholderKey?: string;
}

const MedicalFieldDropdown: React.FC<Props> = ({
  value,
  setValue,
  placeholderKey,
}) => {
  const { t } = useTranslation();
  const [medicalFields, setMedicalFields] = useState([]);
  const { data } = useFetchMedicalFields();
  useEffect(() => {
    if (data && data.length > 0) {
      let items = convertToMultiSelect(data, (entry: ICodeableConcept) => {
        return entry.display1;
      });
      setMedicalFields(items);
    }
  }, [data]);

  const renderCategory = (item: any) => {
    return (
      <View style={[commonStyles.categoryItem, commonStyles.directionColumn]}>
        <View style={commonStyles.categoryItemIcon}>
          {item?.obj?.icon && getMedicalSvg(item?.obj?.icon)}
        </View>
        <Text style={commonStyles.categoryItemTitle}>{item.name}</Text>
      </View>
    );
  };

  return (
    <>
      <GenericDropdown
        value={value}
        setValue={(item) => {}}
        setValueRaw={(item) => {
          setValue(item);
        }}
        renderItem={renderCategory}
        entries={medicalFields}
        placeholder={t(placeholderKey || 'common:select')}
        label={t('common:medicalField')}
        leftIcon={'bookmark'} // todo fix this... make sure its a nice medical icon
      />
    </>
  );
};

export default MedicalFieldDropdown;
