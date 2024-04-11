import React, { useRef, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { sizes } from '../../../../utils/size';
import TextInputCustom from '@components/input/TextInputCustom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { validateValue } from '../../../../utils/validations/FormValidations';
import { useTranslation } from 'react-i18next';
import {doctorCommonStyles} from "@screens/app/common/styles";
import {commonStyles} from "../../../../utils/styles/commonStyles";

export const ADDRESS_STREET_NUMBER = 'street_number';
export const ADDRESS_STREET = 'street_number';
export const ADDRESS_CITY = 'locality';
export const ADDRESS_CITY_2 = 'administrative_area_level_2';
export const ADDRESS_PROVINCE = 'administrative_area_level_1';
export const ADDRESS_COUNTRY = 'country';
export const ADDRESS_POSTAL_CODE = 'postal_code';

const AddressPicker = () => {
  const ref = useRef();

  const { t, i18n } = useTranslation();

  const [address, setAddress] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [apt, setApt] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  const includes = (arr, data) => {
    arr.forEach((it) => {
      if (it === data) {
        return true;
      }
    });
    return false;
  };

  return (
    <>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder="Search"
        autoFillOnNotFound={true}
        currentLocation={true}
        currentLocationLabel="Use current location"
        debounce={100}
        enableHighAccuracyLocation={true}
        fetchDetails={true}
        listViewDisplayed={true}
        keyboardShouldPersistTaps="handled"
        minLength={2}
        nearbyPlacesAPI={'GooglePlacesSearch'}
        enablePoweredByContainer={true}
        onPress={(data, details) => {
          setCountry('thisss');
          setCity('Georgee');
          if (data) {
            setAddress(data.description);
          }
          if (details) {
            details.address_components.forEach((it) => {
              if (includes(it.types, ADDRESS_STREET_NUMBER)) {
                setStreetNumber(it.long_name);
              }
              if (it.types.includes(ADDRESS_STREET)) {
                setStreet(it.long_name);
              }
              if (
                it.types.includes(ADDRESS_CITY) ||
                it.types.includes(ADDRESS_CITY_2)
              ) {
                setCity(it.long_name);
              }
              if (includes(it.types, ADDRESS_PROVINCE)) {
                setProvince(it.long_name);
              }
              if (includes(it.types, ADDRESS_COUNTRY)) {
                setCountry(it.long_name);
                setCountryCode(it.short_name);
              }
              if (includes(it.types, ADDRESS_POSTAL_CODE)) {
                setPostalCode(it.long_name);
              }
            });

            if (
              details.geometry &&
              details.geometry.location &&
              details.geometry.location.lat &&
              details.geometry.location.lng
            ) {
              setLat(details.geometry.location.lat);
              setLong(details.geometry.location.lng);
            }
            console.log(lat);
          }
        }}
        onFail={(err) => {
          console.log(err);
        }}
        onNotFound={() => {
          console.log('not found');
        }}
        onTimeout={() => {
          console.log('timeout');
        }}
        query={{
          key: 'AIzaSyC0FL9Pxpr-_C8-ZV6IuNCee5Apx2vU6dk', // process.env.PLACES_API_KEY
          language: 'en',
        }}
        styles={{
          container: {
            flex: 1,
            marginHorizontal: sizes.marginHorizontal,
          },
        }}
      />
      <TextInputCustom
        style={doctorCommonStyles.txtInput1}
        svg={<Icon name="map-marker" size={16} style={commonStyles.icon} />}
        placeholder={t('common:addressComp:address')}
        validate={(text) => {
          return validateValue(text, 1);
        }}
        value={address}
        onChangedText={(data) => setAddress(data)}
        validationMsg={t('validation:invalid')}
      />
      <TextInputCustom
        style={doctorCommonStyles.txtInput1}
        svg={<Icon name="home" size={16} style={commonStyles.icon} />}
        placeholder={t('common:addressComp:apt')}
        validate={(text) => {
          return validateValue(text, 1);
        }}
        value={apt}
        onChangedText={(data) => setApt(data)}
        validationMsg={t('validation:invalid')}
      />
      <TextInputCustom
        style={doctorCommonStyles.txtInput1}
        svg={<Icon name="city" size={16} style={commonStyles.icon} />}
        placeholder={t('common:addressComp:city')}
        validate={(text) => {
          return validateValue(text, 1);
        }}
        value={city}
        onChangedText={(data) => setCity(data)}
        validationMsg={t('validation:invalid')}
      />
      <TextInputCustom
        style={doctorCommonStyles.txtInput1}
        svg={<Icon name="map" size={16} style={commonStyles.icon} />}
        placeholder={t('common:addressComp:province')}
        validate={(text) => {
          return validateValue(text, 1);
        }}
        value={province}
        onChangedText={(data) => setProvince(data)}
        validationMsg={t('validation:invalid')}
      />
      <TextInputCustom
        style={doctorCommonStyles.txtInput1}
        svg={<Icon name="numeric" size={16} style={commonStyles.icon} />}
        placeholder={t('common:addressComp:postalCode')}
        validate={(text) => {
          return validateValue(text, 1);
        }}
        value={postalCode}
        onChangedText={(data) => setPostalCode(data)}
        validationMsg={t('validation:invalid')}
      />
      <TextInputCustom
        style={doctorCommonStyles.txtInput1}
        svg={<Icon name="earth" size={16} style={commonStyles.icon} />}
        placeholder={t('common:addressComp:country')}
        validate={(text) => {
          return validateValue(text, 1);
        }}
        value={country}
        onChangedText={(data) => setCountry(data)}
        validationMsg={t('validation:invalid')}
      />
    </>
  );
};

export default AddressPicker;
