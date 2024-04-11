import { Image, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {
  BorderRadius,
  Color,
  Margin,
  Sizes,
} from '../../../utils/GlobalStyles';
import { getPageWidth, scaleHeight, scaleWidth } from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import { fontH5 } from '../../../utils/themeUtils';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  title: string;
  subtitle?: string;
  buttonTitle?: string;
  showRefresh?: boolean;
  onRefresh?: any;
  buttonOnPress?: any;
}

const EmptySign = (props: Props) => {
  const {
    title,
    subtitle,
    buttonTitle,
    showRefresh,
    onRefresh,
    buttonOnPress,
  } = props;

  return (
    <View style={styles.contents}>
      <View style={styles.illustrationContainer}>
        {showRefresh ? (
          <Icon
            name={'refresh-ccw'}
            size={60}
            style={[styles.icon]}
            onPress={() => {
              if (onRefresh) {
                onRefresh();
              }
            }}
          />
        ) : (
          <View style={styles.illustrationWrapper}>
            <Image
              style={[styles.illustration]}
              resizeMode="cover"
              source={require('../../../../assets/illustrations/undraw_Empty_re_opql.png')}
            />
          </View>
        )}
      </View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.title, styles.text]}>{title}</Text>
        {subtitle &&
          subtitle !== undefined &&
          subtitle !== '' &&
          subtitle?.toString()?.length > 0 && (
            <Text style={[styles.subtitle, styles.text]}>
              {subtitle?.toString()}
            </Text>
          )}
      </View>
      {buttonTitle && (
        <ButtonPrimary
          style={styles.btnCreate}
          title={buttonTitle}
          onPress={() => {
            if (buttonOnPress) {
              buttonOnPress();
            }
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  illustrationContainer: {
    backgroundColor: Color.white,
    padding: scaleWidth(10),
    borderRadius: BorderRadius.medium,
    marginBottom: scaleHeight(10),
  },
  illustrationWrapper: {
    padding: scaleWidth(10),
    width: scaleWidth(Sizes.illustration),
    height: scaleWidth(Sizes.illustration),
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  contents: {
    marginTop: scaleHeight(50),
    alignItems: 'center',
    width: getPageWidth() - 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    color: Color.accent,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: FONTS.URBANIST.Regular,
    color: Color.accent,
    fontSize: fontH5,
  },
  title: {},
  subtitle: {
    marginTop: scaleHeight(Margin.between_entries),
    textAlign: 'center',
  },
  btnCreate: {
    marginTop: scaleHeight(10),
    width: scaleWidth(150),
  },
});
export default EmptySign;
