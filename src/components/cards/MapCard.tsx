import LocationArrowIcon from '@assets/svgs/icon-svg/LocationArrowIcon';
import MapIcon from '@assets/svgs/icon-svg/MapIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, FontSize } from '../../utils/GlobalStyles';
import { getAddressesAsString } from '../../utils/fhir/fhirTypes';
import fonts from '../../utils/fonts';
import { getWidthByPercent, scaleHeight, scaleWidth } from '../../utils/size';

interface IProps {
  resource: any;
  onOpenMap: any;
}

const MapCard: React.FC<IProps> = ({ resource, onOpenMap }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.rowGeneric}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.svgView}>
          <MapIcon />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.locationText}>
            {getAddressesAsString(resource?.practitioner?.mainAddress, false)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.locationBtn}
        onPress={() => {
          if (
            resource?.practitioner?.mainAddress?.lat &&
            resource?.practitioner?.mainAddress?.lon
          ) {
            onOpenMap(
              resource?.practitioner?.mainAddress?.lat,
              resource?.practitioner?.mainAddress?.lon,
            );
          }
        }}>
        <Text style={styles.btnText}>{t('account:buttons:directions')}</Text>
        <LocationArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

export default MapCard;

const styles = ScaledSheet.create({
  rowGeneric: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    marginTop: scaleHeight(8),
    marginHorizontal: scaleWidth(15),
    paddingVertical: scaleHeight(8),
    paddingHorizontal: scaleWidth(8),
    borderRadius: scaleWidth(16),
    alignItems: 'center',
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    justifyContent: 'space-between',
  },
  svgView: {
    backgroundColor: Color.pastel1,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dateContainer: {
    marginLeft: scaleWidth(10),
    height: scaleWidth(48),
    justifyContent: 'space-around',
    paddingVertical: scaleHeight(5),
  },
  locationText: {
    fontFamily: fonts.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.darkslateblue_200,
    width: getWidthByPercent(40),
  },
  locationBtn: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleHeight(32),
    width: scaleWidth(100),
  },
  btnText: {
    fontFamily: fonts.URBANIST.Bold,
    fontSize: FontSize.fontH6,
    color: Color.white,
    marginRight: scaleWidth(8),
  },
});
