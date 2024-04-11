import React from 'react';
import GenericDropdown from '@screens/app/common/dropdowns/GenericDropdown';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import {NAME_PREFIXES} from "../../../../utils/domainEntities";

interface Props {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  placeholderKey?: string;
}

const DoctorPrefixDropdown: React.FC<Props> = ({
  value,
  setValue,
  placeholderKey,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Text style={commonStyles.inputLabel}>{t('common:prefix')}</Text>
      <GenericDropdown
        value={value}
        setValueRaw={setValue}
        entries={NAME_PREFIXES}
        leftIcon={'user'}
        placeholder={t(placeholderKey || 'common:select')}
      />
    </>
  );
};

export default DoctorPrefixDropdown;
