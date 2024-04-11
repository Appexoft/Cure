import React, {
  memo,
  useRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import TextInputCustom from '@components/input/TextInputCustom';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import useAuth from '@screens/auth/authContext/useAuth';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import MapView, {
  Marker,
  LatLng,
  PROVIDER_GOOGLE,
  Region,
} from 'react-native-maps';
import axios from 'axios';
import LocationArrow from '@assets/svgs/icon-svg/LocationArrow';
import ROUTES from '../../../../../../utils/routes';
import EditAddressModals from './EditAddressModal';

interface MarkerItem {
  coordinate: LatLng;
}
interface AddressDetails {
  street: string;
  number: string;
  additionalDetails: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
  formattedAddress?: string;
}

export const ADDRESS_STREET_NUMBER = 'street_number';
export const ADDRESS_STREET = 'route';
export const ADDRESS_CITY = 'locality';
export const ADDRESS_CITY_2 = 'administrative_area_level_2';
export const ADDRESS_PROVINCE = 'administrative_area_level_1';
export const ADDRESS_COUNTRY = 'country';
export const ADDRESS_POSTAL_CODE = 'postal_code';

const EditAdressInformation = memo(({ navigation }) => {
  const { handleUpdateAddress, userEntity } = useAuth();
  const { name, id } = userEntity;
  const [isDataChanged, setDataChanged] = useState(false);
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentAddress, setCurrentAddress] = useState('');
  const [markers, setMarkers] = useState<MarkerItem[]>([]);
  const [{ lat, long }, setCurrentPosition] = useState({
    lat: 0,
    long: 0,
  });

  const region: Region = useMemo(
    () => ({
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }),
    [lat, long],
  );

  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({
          lat: latitude,
          long: longitude,
        });
        mapRef.current?.animateToRegion(region);
      },
      (error) => {
        console.error('Error getting location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 1 },
    );
  }, []);

  useEffect(() => {
    mapRef.current?.animateToRegion(region);
  }, [lat, long, region]);

  const handleAutofocus = () => {
    mapRef.current?.animateToRegion(region);
    setCurrentAddress('');
    setSelectedLocation({ latitude: lat, longitude: long });
    setMarkers([{ coordinate: { latitude: lat, longitude: long } }]);
    updateMapLocation({ latitude: lat, longitude: long });
  };

  const handleMapPress = (event: { nativeEvent: { coordinate: any } }) => {
    const { coordinate } = event.nativeEvent;
    setSelectedLocation(coordinate);
    reverseGeocode(coordinate);
    setMarkers([{ coordinate }]);
    updateMapLocation(coordinate);
  };

  const reverseGeocode = useCallback(
    async (coordinate: { latitude: any; longitude: any }) => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate.latitude},${coordinate.longitude}&key=AIzaSyC0FL9Pxpr-_C8-ZV6IuNCee5Apx2vU6dk`,
        );

        if (response.data.results.length > 0) {
          const formattedAddress = response.data.results[0].formatted_address;
          setAddress(formattedAddress);
          setCurrentAddress(formattedAddress); // Оновити поточну адресу
        }
      } catch (error) {
        console.error('Error fetching reverse geocoding data:', error);
      }
    },
    [],
  );

  useEffect(() => {
    if (selectedLocation) {
      reverseGeocode(selectedLocation);
    }
  }, [selectedLocation, reverseGeocode]);

  const renderMarkers = () => {
    return markers.map((marker, index) => (
      <Marker
        key={index}
        coordinate={marker.coordinate}
        title="Selected Location"
        pinColor={'#03A9F4'}
      />
    ));
  };

  const updateMapLocation = useCallback(
    (coordinate: { latitude: any; longitude: any }) => {
      reverseGeocode(coordinate);

      setMarkers([{ coordinate }]);
      const updateAddressDetails = async () => {
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate.latitude}, ${coordinate.longitude}&key=AIzaSyC0FL9Pxpr-_C8-ZV6IuNCee5Apx2vU6dk`,
          );

          if (response.data.results.length > 0) {
            const addressDetails = getAddressDetailsFromGeocode(
              response.data.results[0],
            );

            setAddress(addressDetails.formattedAddress);
            setStreet(addressDetails.street);
            setNumber(addressDetails.number);
            setAdditionalDetails(addressDetails.additionalDetails);
            setCity(addressDetails.city);
            setPostalCode(addressDetails.postalCode);
            setState(addressDetails.state);
            setCountry(addressDetails.country);
          }
        } catch (error) {
          console.error('Error fetching reverse geocoding data:', error);
        }
      };

      updateAddressDetails();
    },
    [reverseGeocode],
  );

  const updateAddressDetails = useCallback(
    (data: { description: React.SetStateAction<string> }, details: any) => {
      if (data) {
        setAddress(data.description);
      }

      if (details) {
        const addressDetails = getAddressDetailsFromGeocode(details);
        updateTextInputFields(addressDetails);
      }
    },
    [getAddressDetailsFromGeocode, updateTextInputFields],
  );

  const TextInputCustomWithDefault = useCallback(
    ({ onChangedText, ...rest }) => (
      <TextInputCustom
        {...rest}
        onChangedText={(text) => {
          onChangedText(text);
          setDataChanged(true);
        }}
      />
    ),
    [],
  );

  useEffect(() => {
    if (isDataChanged) {
      setDataChanged(false);
    }
  }, [isDataChanged]);

  const updateAddressFromAutocomplete = useCallback(
    (
      data: any,
      details: { geometry: { location: { lat: any; lng: any } } },
    ) => {
      updateAddressDetails(data, details);

      if (
        details.geometry &&
        details.geometry.location &&
        details.geometry.location.lat &&
        details.geometry.location.lng
      ) {
        const selectedCoordinate = {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        };
        setSelectedLocation(selectedCoordinate);
        mapRef.current.animateToRegion({
          ...selectedCoordinate,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        setMarkers([{ coordinate: selectedCoordinate }]);
        updateMapLocation(selectedCoordinate);
      }
    },
    [updateAddressDetails, updateMapLocation],
  );

  const getAddressDetailsFromGeocode = useCallback(
    (details: { address_components: { types: any }[] }) => {
      const addressDetails: AddressDetails = {
        street: '',
        number: '',
        additionalDetails: '',
        city: '',
        postalCode: '',
        state: '',
        country: '',
      };

      details.address_components.forEach(
        (component: { types: any; long_name: string }) => {
          if (includes(component.types, ADDRESS_STREET_NUMBER)) {
            addressDetails.number = component.long_name;
          } else if (includes(component.types, ADDRESS_STREET)) {
            addressDetails.street = component.long_name;
          } else if (includes(component.types, ADDRESS_CITY)) {
            addressDetails.city = component.long_name;
          } else if (includes(component.types, ADDRESS_PROVINCE)) {
            addressDetails.state = component.long_name;
          } else if (includes(component.types, ADDRESS_COUNTRY)) {
            addressDetails.country = component.long_name;
          } else if (includes(component.types, ADDRESS_POSTAL_CODE)) {
            addressDetails.postalCode = component.long_name;
          }
        },
      );

      return addressDetails;
    },
    [includes],
  );

  const updateTextInputFields = useCallback(
    (addressDetails: {
      street: React.SetStateAction<string>;
      number: React.SetStateAction<string>;
      additionalDetails: React.SetStateAction<string>;
      city: React.SetStateAction<string>;
      postalCode: React.SetStateAction<string>;
      state: React.SetStateAction<string>;
      country: React.SetStateAction<string>;
    }) => {
      setStreet(addressDetails.street);
      setNumber(addressDetails.number);
      setAdditionalDetails(addressDetails.additionalDetails);
      setCity(addressDetails.city);
      setPostalCode(addressDetails.postalCode);
      setState(addressDetails.state);
      setCountry(addressDetails.country);
    },
    [],
  );

  const includes = useCallback((arr: string | any[], data: any) => {
    return arr.includes(data);
  }, []);

  const updateUserAddress = async () => {
    const updatedAddress = `${street} ${number},${additionalDetails}, ${city}, ${state} ${postalCode}, ${country}`;
    setCurrentAddress(updatedAddress);
  };

  const updateAndNavigateBack = async () => {
    const data = {
      name,
      type: 'USER',
      streetName: street,
      number,
      additionalDetails,
      postalCode,
      city,
      country,
      countryCode: 'RO',
      userId: id,
      default: true,
      lat,
      long,
    };

    await handleUpdateAddress(data);

    navigation.navigate(ROUTES.Patient_Personal_Information, {
      updatedAddress: `${street} ${number}, ${city}, ${state} ${postalCode}, ${country}, ${additionalDetails}`,
    });
  };
  const mapStyles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        onPress={handleMapPress}
        style={styles.mapContainer}
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={mapStyles}
        userLocationAnnotationTitle="Your Location">
        {renderMarkers()}
      </MapView>

      <View style={styles.searchInput}>
        <GooglePlacesAutocomplete
          placeholder="Search city, street, district ..."
          autoFillOnNotFound={true}
          currentLocation={true}
          currentLocationLabel="Use current location"
          enableHighAccuracyLocation={true}
          fetchDetails={true}
          listViewDisplayed={true}
          keyboardShouldPersistTaps="handled"
          minLength={1}
          nearbyPlacesAPI={'GooglePlacesSearch'}
          enablePoweredByContainer={true}
          onPress={updateAddressFromAutocomplete}
          query={{
            key: 'AIzaSyC0FL9Pxpr-_C8-ZV6IuNCee5Apx2vU6dk',
            language: 'en',
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.locationArrowButton}
        onPress={handleAutofocus}>
        <LocationArrow />
      </TouchableOpacity>

      <EditAddressModals
        updateUserAddress={updateUserAddress}
        street={street}
        setStreet={setStreet}
        number={number}
        setNumber={setNumber}
        additionalDetails={additionalDetails}
        setAdditionalDetails={setAdditionalDetails}
        city={city}
        setCity={setCity}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
        state={state}
        setState={setState}
        country={country}
        setCountry={setCountry}
        TextInputCustomWithDefault={TextInputCustomWithDefault}
        currentAddress={currentAddress}
        updateAndNavigateBack={updateAndNavigateBack}
      />
    </View>
  );
});

export default EditAdressInformation;

const styles = ScaledSheet.create({
  mapContainer: {
    flex: 1.1,
  },
  searchInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginHorizontal: 12,
    marginBottom: 12,
    marginTop: 12,
    padding: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#BCBCBD',
    backgroundColor: '#FFF',
    zIndex: 1,
  },
  locationArrowButton: {
    position: 'absolute',
    bottom: scaleHeight(210),
    right: scaleWidth(14),
    backgroundColor: 'transparent',
    borderRadius: scaleWidth(50),
    borderWidth: 1.5,
    borderColor: '#03A9F4',
    padding: 13,
    width: '14%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#FFF',
  },
});
