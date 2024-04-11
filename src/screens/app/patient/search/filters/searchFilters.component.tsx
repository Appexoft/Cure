import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import Icon from 'react-native-vector-icons/Feather';
import {
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../../utils/GlobalStyles';
import FONTS from '../../../../../utils/fonts';
import { useNavigation, useRoute } from '@react-navigation/native';
import GenericDropdown from '@screens/app/common/dropdowns/GenericDropdown';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { widthScreen } from '../../../../../utils/dimensions';
import { commonStyles } from '../../../../../utils/styles/commonStyles';
import {
  ALL_SELECT,
  convertToMultiSelect,
  ICity,
  ICodeableConcept,
  NullableType,
} from '../../../../../utils/domainEntities';
import { NEARBY_LOCATION } from '@screens/app/patient/search/search.component';
import { getMedicalSvg } from '@assets/medicalIcons';

interface Props {
  categories: ICodeableConcept[];
  categoriesTotalItems: number;

  subCategories: ICodeableConcept[];
  subCategoriesTotalItems: number;

  cities: ICity[];
  citiesTotalItems: number;
  getCities: any;

  loading: boolean;
  error: string;
  getCategories: any;
  getSubCategories: any;

  filterObj: any;

  setFilters: any;
}

const SearchFiltersComponent = (props: Props) => {
  const {
    categories,
    subCategories,
    cities,
    getCities,
    getCategories,
    getSubCategories,

    filterObj,
    setFilters,
  } = props;

  const { t } = useTranslation();
  const navigation = useNavigation();
  const route = useRoute();

  const [filterCategory, setFilterCategory] = useState(
    filterObj ? filterObj.filterCategory : ALL_SELECT,
  );
  const [filterSubCategory, setFilterSubCategory] = useState(
    filterObj ? filterObj.filterSubCategory : ALL_SELECT,
  );
  const [filterPriceMin, setFilterPriceMin] = useState(
    filterObj ? filterObj.filterPriceMin : 0,
  );
  const [filterPriceMax, setFilterPriceMax] = useState(
    filterObj ? filterObj.filterPriceMax : 5000,
  );

  const [filterLocationSpecificCity, setFilterLocationSpecificCity] = useState(
    filterObj ? filterObj.filterLocationSpecificCity : cities[0],
  );
  const [categorySelectData, setCategorySelectData] = useState([]);
  const [subCategorySelectData, setSubCategorySelectData] = useState([]);
  const [citySelectData, setCitySelectData] = useState([]);


  useEffect(() => {
    if (route && route.params && route.params.query) {
      console.log('Route', route);
    } else {
      // show all
    }
  }, [route]);

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
    if (getCities) {
      getCities();
    }
  }, [getCities]);

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
      if (items.length > 1 && !filterObj?.filterCategory) {
        setFilterCategory(ALL_SELECT);
        setFilterSubCategory(ALL_SELECT);
      }
    }
  }, [categories, filterObj, setFilterCategory, setFilterSubCategory]);

  useEffect(() => {
    if (filterCategory && getSubCategories) {
      getSubCategories({
        pageIndex: 0,
        pageSize: 1000000,
        sortBy: [{ id: 'display1', desc: false }], 
        filters: [{ id: 'parent', value: filterCategory?.id }],
        byEntity: {},
      });
    }
  }, [filterCategory, getSubCategories]);

  useEffect(() => {
    if (subCategories) {
      let items = convertToMultiSelect(
        subCategories,
        (entry: ICodeableConcept) => {
          return entry.display1;
        },
      );
      setSubCategorySelectData([ALL_SELECT, ...items]);
      if (items.length > 0 && !filterObj?.filterSubCategory) {
        setFilterSubCategory(ALL_SELECT);
      }
    }
  }, [setFilterSubCategory, filterObj, subCategories]);

  // Convert cities to select data
  useEffect(() => {
    if (cities) {
      let items = convertToMultiSelect(cities, (entry: ICity) => {
        return entry.name;
      });
      items = [NEARBY_LOCATION, ...items];
      if (items.length > 0 && !filterObj?.filterLocationSpecificCity) {
        setFilterLocationSpecificCity(items[0]);
      }
      if (items.length > 0 && filterObj?.filterLocationSpecificCity) {
        const matchedCity = items.filter((it: ICity) => {
          return it?.label?.includes(
            filterObj?.filterLocationSpecificCity?.name,
          );
        });
        if (matchedCity && matchedCity.length === 1) {
          setFilterLocationSpecificCity(matchedCity[0]);
        }
      }
      setCitySelectData(items);
    }
  }, [setCitySelectData, filterObj, cities]);

  const onBack = useCallback(() => {
    let filterObjClone = { ...filterObj };
    filterObjClone.filterCategory = filterCategory || ALL_SELECT;
    filterObjClone.filterSubCategory = filterSubCategory || ALL_SELECT;
    filterObjClone.filterPriceMin = filterPriceMin || 0;
    filterObjClone.filterPriceMax = filterPriceMax || 5000;
    filterObjClone.filterLocationSpecificCity = filterLocationSpecificCity;

    setFilters(filterObjClone);
    navigation.goBack();
  }, [
    filterObj,
    filterCategory,
    filterSubCategory,
    filterPriceMin,
    filterPriceMax,
    filterLocationSpecificCity,
    setFilters,
    navigation,
  ]);

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
        <View>
          <View style={[styles.inputSelect]}>
            <GenericDropdown
              value={filterLocationSpecificCity}
              setValue={(data) => {}}
              setValueRaw={(data) => {
                setFilterLocationSpecificCity(data);
              }}
              entries={citySelectData}
              placeholder={t('common:addressComp:city')}
              label={t('search:location')}
              leftIcon={'map-pin'}
            />
          </View>
        </View>

        {/* Category */}
        <View style={[styles.inputSelect]}>
          <GenericDropdown
            value={filterCategory}
            setValue={(data) => {}}
            setValueRaw={(data) => {
              setFilterCategory(data);
            }}
            renderItem={renderCategory}
            entries={categorySelectData}
            placeholder={t('common:category')}
            label={t('common:category')}
            leftIcon={'bookmark'}
          />
        </View>

        {/* SubCategory */}
        <View style={styles.inputSelect}>
          <GenericDropdown
            value={filterSubCategory}
            setValue={(data) => {}}
            setValueRaw={(data) => {
              setFilterSubCategory(data);
            }}
            entries={subCategorySelectData}
            placeholder={t('common:subCategory')}
            label={t('common:subCategory')}
            leftIcon={'list'}
          />
        </View>

        <View>
          <Text style={{ marginTop: scaleHeight(Margin.between_entries) }}>
            {t('search:price')}
          </Text>
        </View>
      </View>
      <View style={styles.bottomButtons}>
        <ButtonPrimary
          style={styles.btnCancel}
          title={t('common:clear')}
          titleStyle={styles.txtCancel}
          onPress={onBack}
        />
        <TouchableOpacity onPress={onBack} style={styles.btnSelect}>
          <Text style={styles.txtSelect}>{t('common:search')}</Text>
          <Icon color={Color.white} name={'search'} size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchFiltersComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: scaleWidth(23),
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
