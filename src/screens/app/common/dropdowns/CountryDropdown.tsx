import React from 'react';
import GenericDropdown from '@screens/app/common/dropdowns/GenericDropdown';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import { COUNTRIES } from '../../../../utils/domainEntities';

interface Props {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  placeholderKey?: string;
}

const CountryDropdown: React.FC<Props> = ({
  value,
  setValue,
  placeholderKey,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Text style={commonStyles.inputLabel}>
        {t('common:addressComp:country')}
      </Text>
      <GenericDropdown
        value={value}
        setValue={setValue}
        entries={COUNTRIES}
        placeholder={t(placeholderKey || 'common:selectCountryDropdown')}
      />
    </>
  );
};

export default CountryDropdown;
