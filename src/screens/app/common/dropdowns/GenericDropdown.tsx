import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Color, FontSize } from '../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth, sizes } from '../../../../utils/size';
import FONTS from '../../../../utils/fonts';
import { fontH4, fontH5 } from '../../../../utils/themeUtils';
import Icon from 'react-native-vector-icons/Feather';
import { getMedicalSvg } from '@assets/medicalIcons';
import { commonStyles } from '../../../../utils/styles/commonStyles';

interface Props {
  entries: any[];
  defaultValue?: any;
  value: any;
  setValue?: (item: any) => void;
  setValueRaw?: (item: any) => void;
  placeholder?: string;
  label?: string;
  renderItem?: any;
  isArray?: boolean;
  leftIcon?: string;
}

const GenericDropdown: React.FC<Props> = ({
  entries,
  value,
  setValue,
  setValueRaw,
  placeholder,
  label,
  leftIcon,
  renderItem,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={entries}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder || t('search:selectItem') : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          if (setValue) {
            setValue(item.value);
          }
          if (setValueRaw) {
            setValueRaw(item);
          }
          setIsFocus(false);
        }}
        renderLeftIcon={() => {
          if (value?.obj?.icon) {
            return (
              <View style={commonStyles.ml5}>
                {getMedicalSvg(value?.obj?.icon)}
              </View>
            );
          } else {
            return (
              <Icon
                style={styles.icon}
                color={isFocus ? Color.main : Color.accent}
                name={leftIcon ? leftIcon : 'check'}
                size={20}
              />
            );
          }
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default GenericDropdown;

const styles = StyleSheet.create({
  container: {},
  dropdown: {
    height: scaleHeight(50),
    borderColor: Color.border,
    borderWidth: scaleWidth(1),
    borderRadius: scaleWidth(10),
    width: '100%',
    color: Color.inputPlaceholder,
    backgroundColor: Color.white,
  },
  icon: {
    marginRight: scaleWidth(5),
    marginLeft: scaleWidth(10),
  },
  placeholderStyle: {
    fontSize: FontSize.fontH4,
    marginLeft: scaleWidth(12),
    color: Color.inputPlaceholder,
  },
  selectedTextStyle: {
    fontSize: FontSize.fontH4,
    marginLeft: scaleWidth(12),
    color: Color.accent,
  },
  label: {
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: fontH5,
    color: Color.inputLabel,
    marginBottom: scaleHeight(5),
  },
  iconStyle: {
    width: scaleWidth(20),
    height: scaleHeight(20),
    marginEnd: scaleWidth(22),
  },
  inputSearchStyle: {
    height: scaleHeight(40),
    fontSize: fontH4,
  },
});
