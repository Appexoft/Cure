import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import * as Progress from 'react-native-progress';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import { Color } from '../../../utils/GlobalStyles';
import fonts from '../../../utils/fonts';
import { fontH4 } from '../../../utils/themeUtils';
import { useTranslation } from 'react-i18next';

interface Props {
  size?: number;
  color?: string;
}

const Loading = (props: Props) => {
  const { size, color } = props;

  const { t } = useTranslation();

  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={color || Color.main} />
      <Text style={styles.loaderText}>{t('common:loading')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  loaderText: {
    fontFamily: fonts.URBANIST.SemiBold,
    fontSize: fontH4,
    color: Color.dimgray,
    marginTop: scaleHeight(15),
    marginLeft: scaleWidth(8),
  },
});

export default Loading;
