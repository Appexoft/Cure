import { Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import {BorderRadius, Color, Margin, Padding} from '../utils/GlobalStyles';
import { commonStyles } from '../utils/styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  value?: string;
  icon?: string;
}

const InfoLineBasic = (props: Props) => {
  const { value, icon } = props;

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <Icon
          name={icon != undefined ? icon : 'map-marker'}
          size={24}
          style={[styles.icon]}
        />
      </View>
      <Text style={[commonStyles.textH5, commonStyles.ml10]}>{value}</Text>
    </View>
  );
};

export default InfoLineBasic;

const styles = ScaledSheet.create({
  text1: {
    color: Color.colourMain,
    fontWeight: '700',
  },
  container: {
    borderRadius: BorderRadius.xsmall,
    backgroundColor: Color.colourPastel2,
    padding: Padding.p_4,
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
    color: Color.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  topContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: Margin.m_3
  },
});
