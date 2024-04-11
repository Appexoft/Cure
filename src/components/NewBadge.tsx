import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { SvgFillStar } from '@assets/svgs/index';
import { Color } from '../utils/GlobalStyles';

type NewBadgeProps = {
  top: number;
  left: number;
};

export const NewBadge: React.FC<NewBadgeProps> = React.memo(({ left, top }) => {
  const { t } = useTranslation('common');
  return (
    <View style={[styles.wrapper, { top: top, left: left }]}>
      <SvgFillStar color={Color.main} />
      <Text style={styles.textStyles}>{t('new')}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: 68,
    backgroundColor: Color.orange,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  textStyles: {
    color: Color.main,
    fontWeight: 'bold',
  },
});
