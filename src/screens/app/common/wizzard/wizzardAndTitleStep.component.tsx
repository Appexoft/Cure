import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { fontH3, fontH5 } from '../../../../utils/themeUtils';
import { Color } from '../../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';

function WizzardTitleAndStep(props: {
  title: string;
  currentStep: number;
  stepLength: number;
}) {
  const { t } = useTranslation();

  return (
    <>
      <Text style={styles.headerLabel}>{props.title}</Text>
      <Text style={styles.stepLabel}>
        {t('common:step')} {`${props.currentStep}/${props.stepLength}`}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(20),
    height: '60%',
  },
  headerLabel: {
    fontSize: fontH3,
    fontWeight: '600',
  },
  stepLabel: {
    fontSize: fontH5,
    marginTop: scaleHeight(5),
    color: Color.main,
  },
});
export default WizzardTitleAndStep;
