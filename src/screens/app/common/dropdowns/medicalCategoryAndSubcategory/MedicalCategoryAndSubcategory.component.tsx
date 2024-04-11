import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import {
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../../utils/GlobalStyles';
import FONTS from '../../../../../utils/fonts';
import GenericDropdown from '@screens/app/common/dropdowns/GenericDropdown';
import { widthScreen } from '../../../../../utils/dimensions';
import { commonStyles } from '../../../../../utils/styles/commonStyles';
import {
  ALL_SELECT,
  convertToMultiSelect,
  ICodeableConcept,
  NullableType,
} from '../../../../../utils/domainEntities';
import { getMedicalSvg } from '@assets/medicalIcons';

interface Props {
  selectedCategory: ICodeableConcept;
  setSelectedCategory: (value: ICodeableConcept) => void;

  selectedSubCategory: ICodeableConcept;
  setSelectedSubCategory: (value: ICodeableConcept) => void;

  // Redux
  categories: ICodeableConcept[];
  categoriesTotalItems: number;

  subCategories: ICodeableConcept[];
  subCategoriesTotalItems: number;

  loading: boolean;
  error: string;
  getCategories: any;
  getSubCategories: any;
}

const MedicalCategoryAndSubcategory = (props: Props) => {
  const {
    selectedCategory,
    setSelectedCategory,

    selectedSubCategory,
    setSelectedSubCategory,

    // Redux
    categories,
    categoriesTotalItems,
    subCategories,
    subCategoriesTotalItems,
    loading,
    error,
    getCategories,
    getSubCategories,
  } = props;

  const { t } = useTranslation();
  const [categorySelectData, setCategorySelectData] = useState([]);
  const [subCategorySelectData, setSubCategorySelectData] = useState([]);

  useEffect(() => {
    if (getCategories) {
      getCategories({
        pageIndex: 0,
        pageSize: 1000000,
        sortBy: [{ id: 'display1', desc: false }],
        nullableFilters: [{ id: 'parent', value: NullableType.NULL }],
        byEntity: {},
      });
    }
  }, [getCategories]);

  useEffect(() => {
    if (categories) {
      let items = convertToMultiSelect(
        categories,
        (entry: ICodeableConcept) => {
          return entry.display1;
        },
      );
      let finalData = [ALL_SELECT, ...items];
      setCategorySelectData(finalData);
    }
  }, [
    categories,
    selectedCategory,
    setSelectedCategory,
    setSelectedSubCategory,
  ]);

  useEffect(() => {
    if (selectedCategory && getSubCategories) {
      getSubCategories({
        pageIndex: 0,
        pageSize: 1000000, 
        sortBy: [{ id: 'display1', desc: false }],
        filters: [{ id: 'parent', value: selectedCategory?.id }],
        byEntity: {},
      });
    }
  }, [selectedCategory, getSubCategories]);

  useEffect(() => {
    if (subCategories) {
      let items = convertToMultiSelect(
        subCategories,
        (entry: ICodeableConcept) => {
          return entry.display1;
        },
      );
      setSubCategorySelectData([ALL_SELECT, ...items]);
    }
  }, [setSelectedSubCategory, selectedSubCategory, subCategories]);

  const renderCategory = (item: any) => {
    return (
      <View style={[commonStyles.categoryItem, commonStyles.directionColumn]}>
        <View style={commonStyles.categoryItemIcon}>
          {item?.obj?.icon && getMedicalSvg(item?.obj?.icon)}
        </View>
        <Text style={commonStyles.categoryItemTitle}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.inputSelect]}>
          <GenericDropdown
            value={selectedCategory}
            setValue={(data) => {}}
            setValueRaw={(data) => {
              setSelectedCategory(data);
            }}
            renderItem={renderCategory}
            entries={categorySelectData}
            placeholder={t('common:medicalField')}
            label={t('common:medicalField')}
            leftIcon={'bookmark'} // todo fix this... make sure its a nice medical icon
          />
        </View>
        <View style={styles.inputSelect}>
          <GenericDropdown
            value={selectedSubCategory}
            setValue={(data) => {}}
            setValueRaw={(data) => {
              setSelectedSubCategory(data);
            }}
            entries={subCategorySelectData}
            placeholder={t('common:specialization')}
            label={t('common:specialization')}
            leftIcon={'list'}
          />
        </View>
      </View>
    </View>
  );
};

export default MedicalCategoryAndSubcategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    paddingBottom: scaleHeight(28),
    paddingTop: scaleHeight(12),
    height: scaleHeight(700),
  },
  header: {
    fontWeight: '700',
    fontSize: FontSize.fontH3,
    marginBottom: scaleHeight(15),
    fontFamily: FONTS.URBANIST.Bold,
  },
  label: {
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH5,
    color: Color.inputLabel,
    marginBottom: scaleHeight(5),
  },
  radioButtons: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthScreen,
    paddingHorizontal: scaleWidth(15),
  },
  clearButton: {
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(32),
  },
  applyButton: {
    alignItems: 'center',
    backgroundColor: Color.main,
    borderRadius: scaleWidth(10),
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(55),
    flexDirection: 'row',
  },
  applyButtonText: {
    color: Color.white,
  },
  inputSelect: {
    marginTop: scaleHeight(Margin.between_entries),
  },
  inputArea: {
    width: '100%',
    height: scaleHeight(50),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scaleHeight(5),
    paddingHorizontal: scaleWidth(20),
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  leftDropContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameField: {
    fontSize: FontSize.fontH4,
    marginLeft: scaleWidth(15),
    color: Color.uI41,
  },
  searchField: {
    color: Color.text,
    fontSize: FontSize.fontH4,
    marginLeft: scaleWidth(15),
  },
  leftIcon: {
    marginHorizontal: scaleWidth(15),
  },
  btnCancel: {
    width: scaleWidth(100),
    height: scaleHeight(40),
    backgroundColor: Color.white,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnSelect: {
    width: scaleWidth(220),
    height: scaleHeight(40),
    backgroundColor: Color.main,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtCancel: {
    textTransform: 'uppercase',
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.primaryNeutral600,
  },
  txtSelect: {
    textTransform: 'uppercase',
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH6,
    color: Color.white,
    marginRight: scaleWidth(10),
  },
  searchNameWrapper: {
    width: '100%',
    height: scaleHeight(50),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    borderRadius: scaleWidth(15),
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputStyle: {
    width: '85%',
    height: scaleHeight(50),
    marginLeft: scaleWidth(15),
  },
});
