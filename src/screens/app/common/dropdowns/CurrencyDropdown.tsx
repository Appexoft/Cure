import React from 'react';
import GenericDropdown from '@screens/app/common/dropdowns/GenericDropdown';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import { CURRENCIES } from '../../../../utils/domainEntities';

interface Props {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  placeholderKey?: string;
}

const CurrencyDropdown: React.FC<Props> = ({
  value,
  setValue,
  placeholderKey,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Text style={commonStyles.inputLabel}>{t('common:currency')}</Text>
      <GenericDropdown
        value={value}
        setValue={setValue}
        entries={CURRENCIES}
        placeholder={t(placeholderKey || 'common:selectCurrencyDropdown')}
      />
    </>
  );
};

export default CurrencyDropdown;
