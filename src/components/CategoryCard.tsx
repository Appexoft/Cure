import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from 'react-native';
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Padding,
} from '../utils/GlobalStyles';

type CategoryCardType = {
  title?: string;
  icon: ImageSourcePropType;
};

const CategoryCard = ({ title, icon }: CategoryCardType) => {
  return (
    <View style={styles.cardscategory}>
      <Image style={styles.righticon} resizeMode="cover" source={icon} />
      <Text style={[styles.query, styles.mt5]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt5: {
    marginTop: Margin.m_4xs,
  },
  righticon: {
    width: 36,
    height: 36,
    overflow: 'hidden',
  },
  query: {
    fontSize: FontSize.fontH5,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: FontFamily.textInputError1,
    color: Color.colourAccent,
    textAlign: 'left',
  },
  cardscategory: {
    padding: Padding.p_6xs,
    alignItems: 'center',
  },
});

export default CategoryCard;
