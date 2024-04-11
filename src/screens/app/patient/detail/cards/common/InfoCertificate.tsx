import * as React from 'react';
import { useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  BorderRadius,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from '../../../../../../utils/GlobalStyles';
import Fonts from "../../../../../../utils/fonts";

type InfoCertificateType = {
  title?: string;
  entry1?: string;
  entry2?: string;

  /** Style props */
  propHeight?: number | string;
  titleFontSize?: number;
  titleLineHeight?: number;
  titleFontWeight?: string;
  titleFontFamily?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) {
    return;
  }
  return { [key]: value === 'unset' ? undefined : value };
};

const InfoCertificate = ({
  title,
  entry1,
  entry2,
  propHeight,
  titleFontSize,
  titleLineHeight,
  titleFontWeight,
  titleFontFamily,
}: InfoCertificateType) => {
  const certificateStyle = useMemo(() => {
    return {
      ...getStyleValue('height', propHeight),
    };
  }, [propHeight]);

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue('fontSize', titleFontSize),
      ...getStyleValue('lineHeight', titleLineHeight),
      ...getStyleValue('fontWeight', titleFontWeight),
      ...getStyleValue('fontFamily', titleFontFamily),
    };
  }, [titleFontSize, titleLineHeight, titleFontWeight, titleFontFamily]);

  return (
    <View style={[styles.certificate, styles.mt12, certificateStyle]}>
      <View style={styles.line} />
      <View style={[styles.about, styles.ml16]}>
        <Text style={[styles.title, styles.titleTypo, titleStyle]}>
          {title}
        </Text>
        <View style={[styles.description, styles.mt8]}>
          <Text style={[styles.content, styles.titleTypo]}>{entry1}</Text>
          <Text style={[styles.content, styles.mt4, styles.titleTypo]}>
            {entry2}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  ml16: {
    marginLeft: Margin.m_2xl,
  },
  titleTypo: {
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },
  line: {
    borderTopRightRadius: BorderRadius.card,
    borderBottomRightRadius: BorderRadius.card,
    backgroundColor: Color.ghostwhite_200,
    width: 4,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: FontSize.fontH5,
    lineHeight: 21,
    fontWeight: '600',
    color: Color.darkslategray_200,
  },
  content: {
    fontSize: FontSize.fontH5,
    lineHeight: 18,
    color: Color.dimgray_300,
    alignSelf: 'stretch',
  },
  description: {
    alignSelf: 'stretch',
  },
  about: {
    flex: 1,
  },
  certificate: {
    borderRadius: BorderRadius.card,
    backgroundColor: Color.white,
    borderStyle: 'solid',
    borderColor: '#efeff6',
    borderWidth: 1,
    width: 343,
    flexDirection: 'row',
    paddingTop: Padding.p_3xl,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_3xl,
  },
});

export default InfoCertificate;
