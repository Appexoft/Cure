import CustomSearchIcon from '@assets/svgs/icon-svg/CustomSearchIcon';
import SearchIcon from '@assets/svgs/icon-svg/SearchIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, TextInput } from 'react-native';
import { Color } from '../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../utils/size';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  value?: string;
  setValue?: any;
  custom?: boolean;
  finishEditing: (data: string) => void;
}

export const SearchField: React.FC<Props> = ({
  value,
  setValue,
  custom,
  finishEditing,
}) => {
  const { t } = useTranslation('common');

  const [textValue, setTextValue] = React.useState('');
  const timeout = React.useRef(null);

  const onChangeHandler = (data: string) => {
    clearTimeout(timeout.current);
    setTextValue(data);
    timeout.current = setTimeout(() => {
      if (finishEditing) {
        finishEditing(data);
      }
      if (setValue) {
        setValue(data);
      }
    }, 500);
  };

  return (
    <View style={styles.searchWrapper}>
      <TextInput
        value={textValue}
        onChangeText={onChangeHandler}
        placeholder={t('header:searchAnything')}
        style={styles.searchInputStyle}
      />
      {textValue && textValue.length > 0 ? (
        <Icon
          name={'x'}
          size={22}
          color={Color.gray_200}
          onPress={() => {
            setTextValue('');
            onChangeHandler('');
          }}
        />
      ) : (
        <>
          {custom ? (
            <CustomSearchIcon />
          ) : (
            <Icon
              name={'search'}
              size={22}
              color={Color.gray_200}
              onPress={() => {
                onChangeHandler(textValue);
              }}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    width: '95%',
    height: scaleHeight(50),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    backgroundColor: Color.white,
    borderRadius: scaleWidth(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputStyle: {
    width: '85%',
    color: Color.accent,
    height: scaleHeight(50),
    marginLeft: scaleWidth(15),
  },
});
