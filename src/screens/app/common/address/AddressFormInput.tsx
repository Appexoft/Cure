import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import TextInputCustom from '@components/input/TextInputCustom';
import { fontH3 } from '../../../../utils/themeUtils';
import {
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';
import CountryDropdown from '@screens/app/common/dropdowns/CountryDropdown';

interface Props {
  data: any;
  setData: (crt: any) => void;
}
export const AddressFormInput = memo((props: Props) => {
  const { data, setData } = props;
  const { t } = useTranslation();
  const [dataSent, setDataSent] = useState(false);

  const [address, setAddress] = useState({
    street: data?.street || '',
    number: data?.number || '',
    additionalDetails: data?.additionalDetails || '',
    city: data?.city || '',
    postalCode: data?.postalCode || '',
    state: data?.state || '',
    country: data?.country || '',
    countryCode: data?.countryCode || '',
    lat: data?.lat || '',
    lon: data?.lon || '',
  });

  const isValidationPassed = () => {
    return (
      !!address.street &&
      !!address.city &&
      !!address.postalCode &&
      !!address.state &&
      !!address.country
    );
  };

  useEffect(() => {
    if (isValidationPassed()) {
      if (!dataSent) {
        setData(address);
        setDataSent(true);
      }
    } else if (dataSent) {
      setDataSent(false);
    }
  }, [address, dataSent, isValidationPassed, setData]);

  const includes = (arr: string[], item: string) => {
    for (let i = 0; i < arr.length; i++) {
      let it = arr[i];
      if (it?.toString()?.toLowerCase() === item?.toString()?.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <View style={styles.blockContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInputCustom
            onChangedText={(text) =>
              setAddress({
                ...address,
                street: text,
              })
            }
            onRawChangedText={(text) =>
              setAddress({
                ...address,
                street: text,
              })
            }
            value={address.street}
            iconRight="edit-3"
            label={t('common:streetAndNumber')}
            placeholder={t('common:streetAndNumber')}
            isMultiline
          />
        </View>

        <TextInputCustom
          label="Additional details"
          placeholder="Additional details"
          isMultiline
          value={address.additionalDetails}
          iconRight="edit-3"
          onChangedText={(text) =>
            setAddress({
              ...address,
              additionalDetails: text,
            })
          }
          onRawChangedText={(text) =>
            setAddress({
              ...address,
              additionalDetails: text,
            })
          }
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInputCustom
            onChangedText={(text) =>
              setAddress({
                ...address,
                city: text,
              })
            }
            onRawChangedText={(text) =>
              setAddress({
                ...address,
                city: text,
              })
            }
            halfWidth
            value={address.city}
            iconRight="edit-3"
            label={t('common:city')}
            placeholder={t('common:city')}
            isMultiline
          />

          <TextInputCustom
            halfWidth
            value={address.postalCode}
            label={t('common:postalCode')}
            placeholder={t('common:postalCode')}
            iconRight="edit-3"
            isMultiline
            onChangedText={(text) =>
              setAddress({
                ...address,
                postalCode: text,
              })
            }
            onRawChangedText={(text) =>
              setAddress({
                ...address,
                postalCode: text,
              })
            }
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInputCustom
            onChangedText={(text) =>
              setAddress({
                ...address,
                state: text,
              })
            }
            onRawChangedText={(text) =>
              setAddress({
                ...address,
                state: text,
              })
            }
            value={address.state}
            iconRight="edit-3"
            label={t('common:state')}
            placeholder={t('common:state')}
            isMultiline
          />
        </View>
        <View style={{ width: '100%', marginTop: scaleHeight(10) }}>
          <CountryDropdown
            value={address.country}
            setValue={(value) =>
              setAddress({
                ...address,
                country: value,
              })
            }
            placeholderKey={'common:country'}
          />
        </View>
      </View>
    </View>
  );
});

export default AddressFormInput;

const styles = StyleSheet.create({
  container: {},

  blockContainer: {
    marginVertical: scaleHeight(20),
  },

  textHeader: {
    fontSize: fontH3,
    fontWeight: '500',
  },

  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: scaleHeight(30),
    marginTop: scaleHeight(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },

  phoneInput: {
    marginTop: scaleHeight(5),
    borderWidth: 1,
    borderRadius: scaleWidth(14),
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(14),
    borderColor: Color.border,
    backgroundColor: Color.white,
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
