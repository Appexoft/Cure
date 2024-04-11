import { Image, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { FontFamily, FontSize, Margin } from '../utils/GlobalStyles';
import { commonStyles } from '../utils/styles/commonStyles';

interface Props {
  rating?: string;
}

const RatingLine = (props: Props) => {
  const { rating } = props;

  return (
    <View style={[styles.topContainer, commonStyles.ml10]}>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require('../../assets/star6.png')}
      />
      <Text style={[commonStyles.textH5]}>{rating}</Text>
    </View>
  );
};

export default RatingLine;

const styles = ScaledSheet.create({
  hrTypo: {
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
  },
  hrTypo1: {
    fontFamily: FontFamily.textInputError1,
    fontSize: FontSize.fontH5,
  },

  starIcon: {
    width: 18,
    height: 18,
    overflow: 'hidden',
    marginRight: Margin.m_3,
  },
  topContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
