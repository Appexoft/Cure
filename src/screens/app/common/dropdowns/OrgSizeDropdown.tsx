import React from 'react';
import GenericDropdown from '@screens/app/common/dropdowns/GenericDropdown';
import { useTranslation } from 'react-i18next';
import { ORGANISATION_SIZE } from '../../../../utils/domainEntities';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import { Text } from 'react-native';

interface Props {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const OrgSizeDropdown: React.FC<Props> = ({ value, setValue }) => {
  const { t } = useTranslation();

  return (
    <>
      <Text style={[commonStyles.inputLabel, commonStyles.mb5]}>
        {t('common:orgSize')}
      </Text>
      <GenericDropdown
        value={value}
        setValue={setValue}
        entries={ORGANISATION_SIZE}
        placeholder={t('common:orgSize')}
      />
    </>
  );
};

export default OrgSizeDropdown;
