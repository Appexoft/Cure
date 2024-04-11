import React, { memo, useEffect, useState } from 'react';
import { Text, View, Platform, UIManager } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, FontSize } from '../../../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';
import { AccordionList } from 'react-native-accordion-list-view';
import FONTS from '../../../../../utils/fonts';
import Arrow from '@assets/svgs/icon-svg/ArrowDown';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';

const FaqInfo = memo(({ navigation }) => {
  const { t } = useTranslation();

  const data = [
    {
      id: 0,
      title: 'Question 1',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 1,
      title: 'Question 2',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 0,
      title: 'Question 3',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 1,
      title: 'Question 4',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <AccordionList
        data={data}
        customTitle={(item) => (
          <Text style={styles.mainTextStyle}>{item.title}</Text>
        )}
        customBody={(item) => (
          <Text style={styles.description}>{item.body}</Text>
        )}
        animationDuration={400}
        expandMultiple={true}
        customIcon={() => <Arrow />}
      />
    </View>
  );
});
export default FaqInfo;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
    paddingTop: scaleHeight(20),
    paddingHorizontal: scaleWidth(15),
  },
  mainTextStyle: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: FontSize.fontH3,
    paddingHorizontal: scaleWidth(5),
  },
  description: {
    fontSize: FontSize.fontH5,
    fontFamily: FONTS.URBANIST.Medium,
    color: Color.dimgray_100,
    paddingHorizontal: scaleWidth(5),
    paddingTop: scaleHeight(12),
  },
});
