import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import ROUTES from '../../../../../utils/routes';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { getMedicalSvg } from '@assets/medicalIcons';
import { useFetchFeaturedCodeableConcepts } from '@screens/app/patient/home/categories/useFetchFeaturedCodeableConcept';
import { ICodeableConcept } from '../../../../../utils/domainEntities';
import { useState } from 'react';

const HomeCategories = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [viewAllSelected, setViewAllSelected] = useState(false);

  const goToFilter = (item: ICodeableConcept) => {
    // navigation.navigate(ROUTES.Patient_Search_Doctors);
    navigation.navigate(ROUTES.Search, {
      screen: ROUTES.Patient_Search,
      params: { searchFilterCategory: item },
    });
  };

  const { data, isSuccess, isLoading, isError } =
    useFetchFeaturedCodeableConcepts();
  const getRowRendering = (rowData: ICodeableConcept[]) => {
    return (
      <View style={[styles.row, styles.rowFlexBox]}>
        {rowData &&
          rowData.map((it: ICodeableConcept) => {
            return (
              <TouchableOpacity
                key={it.id}
                onPress={() => {
                  goToFilter(it);
                }}
                style={styles.cardCategory}>
                {getMedicalSvg(it?.icon)}
                {/* todo translate ?? */}
                <Text style={styles.labelCategory}>{it.display1}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  };

  return (
    <View style={[styles.content]}>
      <View style={[styles.title, styles.rowFlexBox]}>
        <Text style={styles.title1}>{t('patient:home:categories')}</Text>
        {data && data.length > 8 && (
          <View style={styles.additionalButton}>
            <TouchableOpacity
              onPress={() => {
                setViewAllSelected(!viewAllSelected);
              }}>
              <Text style={styles.labelCategory}>
                {!viewAllSelected ? t('common:viewAll') : t('common:close')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={[styles.categoriesContainer]}>
        {data && data.length > 4 && getRowRendering(data.slice(0, 4))}
        {data && data.length >= 8 && getRowRendering(data.slice(4, 8))}
        {viewAllSelected &&
          data &&
          data.length >= 12 &&
          getRowRendering(data.slice(8, 12))}
        {viewAllSelected &&
          data &&
          data.length >= 16 &&
          getRowRendering(data.slice(12, 16))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
  },
  categoriesContainer: {
    backgroundColor: Color.white,
    borderRadius: scaleWidth(15),
    paddingBottom: scaleHeight(25),
  },
  title: {
    width: scaleWidth(350),
    alignItems: 'center',
    marginBottom: scaleHeight(Margin.between_title_content),
  },
  rowFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: scaleHeight(20),
    paddingRight: scaleWidth(10),
    paddingLeft: scaleWidth(5),
  },
  labelCategory: {
    fontFamily: FONTS.URBANIST.Medium,
    width: scaleWidth(75),
    color: Color.colourAccent,
    lineHeight: scaleHeight(18),
    fontSize: FontSize.fontH5,
    textAlign: 'center',
  },
  cardCategory: {
    padding: Padding.p_6xs,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    width: scaleWidth(60),
  },
  title1: {
    fontSize: FontSize.fontH3,
    lineHeight: scaleHeight(24),
    color: Color.systemColorsBackgroundBlackPrimary1,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Bold,
  },
  additionalButton: {
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_md,
    paddingBottom: Padding.p_xl,
    flexDirection: 'row',
  },
  righticon: {
    width: 36,
    height: 36,
    overflow: 'hidden',
  },
  row: {
    alignSelf: 'stretch',
    paddingVertical: 0,
  },
});

export default HomeCategories;
