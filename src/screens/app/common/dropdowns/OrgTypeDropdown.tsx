import React from 'react';
import GenericDropdown from '@screens/app/common/dropdowns/GenericDropdown';
import { useTranslation } from 'react-i18next';
import { HOSPITAL_TYPES } from '../../../../utils/domainEntities';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import { Text } from 'react-native';

interface Props {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const OrgTypeDropdown: React.FC<Props> = ({ value, setValue }) => {
  const { t } = useTranslation();

  return (
    <>
      <Text style={[commonStyles.inputLabel, commonStyles.mb5]}>
        {t('common:type')}
      </Text>
      <GenericDropdown
        value={value}
        setValue={setValue}
        entries={HOSPITAL_TYPES}
        placeholder={t('common:type')}
      />
    </>
  );
};

export default OrgTypeDropdown;
