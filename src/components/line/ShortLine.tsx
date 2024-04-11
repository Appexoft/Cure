import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Border, Color, Padding } from '../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../utils/size';
import { commonStyles } from '../../utils/styles/commonStyles';
import { getWrapperStyles } from '../../utils/entityUtils';
import Icon from 'react-native-vector-icons/Feather';
import {fontH6, fontH7} from "../../utils/themeUtils";

type Props = {
  icon: string;
  iconColor?: string;
  bgColorStyle?: string;
  text: string;
  secondText?: string;
  secondIcon?: string;
  style?: any;
};

export const ShortLine: React.FC<Props> = React.memo(
  ({ icon, iconColor, text, secondText, secondIcon, bgColorStyle, style }) => {
    return (
      <View
        style={[
          getWrapperStyles(styles.contents, style),
          commonStyles.directionColumn,
        ]}>
        <View style={getWrapperStyles(styles.iconWrapper, bgColorStyle)}>
          <Icon
            name={icon || 'calendar'}
            size={18}
            style={styles.iconStyles}
            color={iconColor || 'white'}
          />
        </View>

        <View style={[styles.textWrapper, commonStyles.directionColumn]}>
          <Text style={[styles.text, commonStyles.textCardBody]}>
            {text || ''}
          </Text>
        </View>

        <View style={[styles.secondTextWrapper, commonStyles.directionColumn]}>
          {secondText && (
            <>
              <Icon
                name={secondIcon || 'clock'}
                size={16}
                color={Color.textDisabled}
              />
              <Text
                style={[
                  styles.secondText,
                  commonStyles.textCardSubtitleSmall,
                  commonStyles.ml5,
                ]}>
                {secondText || ''}
              </Text>
            </>
          )}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  contents: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(5),
  },
  iconWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colourPastel2,
    padding: Padding.p_8xs,
    flexDirection: 'row',
    marginRight: scaleWidth(10),
  },
  textWrapper: {
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginRight: scaleWidth(20),
  },
  secondTextWrapper: {
    textAlign: 'right',
  },
  text: {
    paddingRight: scaleWidth(5),
    textTransform: 'capitalize',
    lineHeight: 14,
    textAlign: 'left',
  },
  secondText: {
    width: scaleWidth(70),
    fontSize: fontH7,
    color: Color.gray_100,
  },
  iconStyles: {
    marginRight: 1,
  },
});
