import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgLocation from '@assets/svgs/SvgLocation';
import { Color, Padding } from '../../utils/GlobalStyles';
import { scaleWidth } from '../../utils/size';
import { commonStyles } from '../../utils/styles/commonStyles';
import { fhirR4 } from '@smile-cdr/fhirts';
import { getAddressesAsString } from '../../utils/fhir/fhirTypes';
import { getWrapperStyles } from '../../utils/entityUtils';
import { fontH6 } from '../../utils/themeUtils';
import Fonts from '../../utils/fonts';
import { useTranslation } from 'react-i18next';
import { IAddress } from '../../utils/domainEntities';

type Props = {
  address?: IAddress;
  addressString?: string;
  showDistanceAway?: boolean;
  showShortAddress?: boolean;
  style?: any;
};

export const AddressLine: React.FC<Props> = React.memo(
  ({ address, addressString, showDistanceAway, showShortAddress, style }) => {
    const { t } = useTranslation('common');
    const [distanceAway, setDistanceAway] = useState(0);

    return (
      <View style={getWrapperStyles(styles.contents, style)}>
        {(address || addressString) && (
          <SvgLocation color={Color.dimgray} style={styles.iconStyles} />
        )}

        <Text style={[styles.addressText, commonStyles.textCardBody]}>
          {address && getAddressesAsString(address, showShortAddress)}
          {addressString ? addressString : ''}
        </Text>
        {showDistanceAway && (
          <View style={styles.distanceContainer}>
            <Text style={[styles.label, styles.distanceLabel]}>
              {distanceAway + ' ' + t('common:kmAway')}
            </Text>
          </View>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  contents: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  addressText: {
    lineHeight: 15,
    paddingRight: scaleWidth(5),
    marginLeft: scaleWidth(2),
    textTransform: 'capitalize',
  },
  iconStyles: {
    marginRight: 2,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  label: {
    padding: Padding.p_8xs,
    flexDirection: 'row',
    lineHeight: 15,
    fontSize: fontH6,
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },
  distanceLabel: {
    color: Color.main,
    width: scaleWidth(50),
  },
});
