import * as React from 'react';
import { useMemo } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {
  Margin,
  FontSize,
  Color,
  Border,
  Padding,
  BorderRadius,
} from '../../../../utils/GlobalStyles';
import Fonts from '../../../../utils/fonts';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { useTranslation } from 'react-i18next';
import { fontH4, fontH6 } from '../../../../utils/themeUtils';
import { IAddress } from '../../../../utils/domainEntities';
import { AddressLine } from '@components/location/AddressLine';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import openMap from 'react-native-open-maps';

type AddressListEntryType = {
  title: string;
  address: IAddress;
  showAddress?: boolean;
  showDistanceAway?: boolean;
};

const AddressListEntry = ({
  title,
  showAddress,
  showDistanceAway,
  address,
}: AddressListEntryType) => {
  const { t } = useTranslation('common');

  return (
    <View style={[styles.contents]}>
      <View style={styles.content}>
        <View style={[styles.nameAndDistanceRow]}>
          <Text style={styles.cardTitle}>{title}</Text>
          {showDistanceAway && (
            <Text style={[styles.locationDistanceLabel]}>
              {'1 ' + t('common:kmAway')}
            </Text>
          )}
        </View>
        <Text
          style={[
            styles.address,
            styles.mt4,
            styles.locationDistanceLabelTypo,
          ]}>
        </Text>
        {showAddress && (
          <AddressLine
            address={address}
            showShortAddress={true}
            showDistanceAway={false}
          />
        )}
        <View style={[styles.button, commonStyles.mt10]}>
          <ButtonPrimary
            title={t('common:directions')}
            iconLeft={'map'}
            onPress={() => {
              openMap({latitude: address?.lat, longitude: address?.lon });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    borderRadius: BorderRadius.card,
    backgroundColor: Color.white,
    borderStyle: 'solid',
    borderColor: Color.border,
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    width: '100%',
    padding: Padding.p_xs,
  },
  nameAndDistanceRow: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: fontH4,
    lineHeight: 24,
    color: Color.accent,
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Bold,
  },
  locationDistanceLabel: {
    color: Color.main,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: fontH6,
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },
  button: {
    height: scaleHeight(40),
  },

  mt4: {
    marginTop: Margin.m_5xs,
  },
  nameAndDistanceRowFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationDistanceLabelTypo: {
    fontWeight: '500',
    lineHeight: 20,
    fontSize: FontSize.fontH6,
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },
  locationPosition: {
    color: Color.darkslateblue_200,
    fontFamily: Fonts.URBANIST.Regular,
    lineHeight: 16,
    marginTop: -8,
    top: '50%',
    position: 'absolute',
    textAlign: 'left',
  },

  address: {
    color: Color.dimgray_400,
  },
  streetRiverMainson: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  newYork: {
    margin: Margin.m_9xs,
  },
  address1: {
    lineHeight: 16,
    fontFamily: Fonts.URBANIST.Regular,
    color: Color.darkgray_100,
    display: 'none',
    fontSize: FontSize.fontH6,
    textAlign: 'left',
  },
  location: {
    left: 24,
    fontSize: FontSize.size_2xs,
  },
  dot: {
    marginTop: -1,
    left: 125,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.lightslategray,
    width: 3,
    height: 3,
    top: '50%',
    position: 'absolute',
    display: 'none',
  },
  distance: {
    left: 136,
    fontSize: FontSize.defaultRegularFootnote_size,
    display: 'none',
  },
  icLocation16: {
    width: 12,
    height: 12,
  },
  fillIcon: {
    width: 9,
    height: 11,
  },
  componentslocationsmall: {
    width: 182,
    height: 16,
    overflow: 'hidden',
  },
  autoAddedFrame: {
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
});

export default AddressListEntry;
