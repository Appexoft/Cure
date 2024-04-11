import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  AppState,
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Border,
  BorderRadius,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
  Sizes,
} from '../../../../utils/GlobalStyles';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import { SearchField } from '@components/SearchField';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';
import Loading from '@screens/app/common/loading';
import { DoctorCard } from '@components/Favorites';
import EmptySign from '@screens/app/common/emptySign';
import { ThreeTabs } from '@components/tabs/threeTabs';
import { SELECTED_TAB } from '@components/tabs';
import Icon from 'react-native-vector-icons/Feather';
import {
  ALL_SELECT,
  convertToMultiSelect,
  ICity,
  ICodeableConcept,
  NEARBY_IDENTIFIER,
  NEARBY_LOCATION,
} from '../../../../utils/domainEntities';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import FullFilterIcon from '@assets/svgs/icon-svg/FullFilterIcon';
import ROUTES from '../../../../utils/routes';
import { ModalChooseCity } from '@screens/app/patient/search/modals/chooseCity/ModalChooseCity';

interface Props {
  doctors: any;
  doctorsTotalItems: number;

  services: any;
  servicesTotalItems: number;

  cities: ICity[];
  citiesTotalItems: number;
  getCities: any;

  hospitals: any;
  hospitalsTotalItems: number;
  loading: boolean;
  error: string;
  onFetchData: any;

  filterObj: any;
  setFilters: any;
}

const PatientSearchComponent = (props: Props) => {
  const {
    doctors,
    doctorsTotalItems,
    services,
    servicesTotalItems,
    hospitals,
    hospitalsTotalItems,
    cities,
    citiesTotalItems,
    getCities,

    loading,
    error,
    onFetchData,

    filterObj,
    setFilters,
  } = props;

  const [searchValue, setSearchValue] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [location, setLocation] = useState(null);

  const [filterLocationSpecificCity, setFilterLocationSpecificCity] =
    useState(NEARBY_LOCATION);
  const [citySelectData, setCitySelectData] = useState([NEARBY_LOCATION]);
  const [chooseCityModalOpen, setChooseCityModalOpen] = useState(false);

  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState(SELECTED_TAB.FIRST);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setLocation(info);
    });
  }, []);

  // Convert cities to select data
  useEffect(() => {
    if (cities) {
      let items = convertToMultiSelect(cities, (entry: ICity) => {
        return entry.name;
      });
      if (
        items.length > 0 &&
        !filterLocationSpecificCity &&
        !filterObj.filterLocationSpecificCity
      ) {
        setFilterLocationSpecificCity(items[0]);
      }
      setCitySelectData([NEARBY_LOCATION, ...items]);
    }
  }, [setCitySelectData, filterObj, cities, filterLocationSpecificCity]);

  const doSearch = useCallback(
    (searchWord?: string) => {
      setIsFetching(true);
      let filters = [];
      if (searchWord) {
        filters.push({ id: 'nameText', value: searchWord });
      }
      if (filterObj && Object.keys(filterObj).length > 0) {
        if (filterObj && filterObj.filterCategory) {
          filters.push({
            id: 'qualificationMedicalField',
            value: filterObj.filterCategory?.id,
          });
        }
        if (filterObj && filterObj.filterSubCategory) {
          filters.push({
            id: 'qualificationMedicalSubField',
            value: filterObj.filterSubCategory?.id,
          });
        }
        if (filterObj && filterObj.filterPriceMin) {
          filters.push({
            id: 'filterPriceMin',
            value: filterObj.filterPriceMin,
          });
        }
        if (filterObj && filterObj.filterPriceMax) {
          filters.push({
            id: 'filterPriceMax',
            value: filterObj.filterPriceMax,
          });
        }
        if (filterObj && filterObj.filterLocationSpecificCity) {
          const isNearby =
            filterObj.filterLocationSpecificCity?.value === NEARBY_IDENTIFIER;
          const locationAvailable =
            !!location?.coords?.latitude || !!location?.coords?.longitude;

          const lat =
            isNearby && locationAvailable
              ? location?.coords?.latitude
              : filterObj.filterLocationSpecificCity?.obj?.lat;
          const lon =
            isNearby && locationAvailable
              ? location?.coords?.longitude
              : filterObj.filterLocationSpecificCity?.obj?.lon;
          const degreeDistance =
            isNearby && locationAvailable
              ? 0.5 
              : filterObj.filterLocationSpecificCity?.obj?.degreeDistance;

          if (isNearby && !locationAvailable) {
            console.error(
              'Location is set to nearby, and there is no location available',
            );
          } else {
            filters.push({
              id: 'specificCity',
              values: [lat, lon, degreeDistance],
            });
          }
        }
      }
      filters.push({
        id: 'active',
        value: true,
      });
      onFetchData({
        pageIndex: 0,
        pageSize: 100, 
        sortBy: [{ id: 'nameText', desc: false }], 
        filters: filters,
        byEntity: {},
      });
      setIsFetching(false);
    },
    [filterObj, onFetchData, location],
  );

  useEffect(() => {
    if (route && route.params) {
      const query = route.params.query;
      const searchFilterCategory = route.params.searchFilterCategory;
      if (query && query !== searchValue) {
        setSearchValue(query);
      }
      if (
        searchFilterCategory &&
        (!filterObj.filterCategory ||
          filterObj?.filterCategory?.id !== searchFilterCategory?.id)
      ) {
        let filterObjClone = { ...filterObj };
        const selectData = convertToMultiSelect(
          [searchFilterCategory],
          (entry: ICodeableConcept) => {
            return entry.display1;
          },
        );
        filterObjClone.filterCategory = selectData[0];
        setFilters(filterObjClone);
      }
    } else {
      setSearchValue('');
      doSearch('');
    }
  }, [doSearch, route, setFilters]);

  useEffect(() => {
    doSearch(searchValue);
  }, [doSearch, filterObj, location, onFetchData, searchValue]);

  const getEmptyResultsList = () => {
    return (
      <EmptySign
        title={t('search:emptyResults:title')}
        subtitle={t('search:emptyResults:subtitle')}
        showRefresh={true}
        onRefresh={() => {
          doSearch(searchValue);
        }}
      />
    );
  };

  const getDataForCurrentTab = () => {
    switch (activeTab) {
      case SELECTED_TAB.FIRST:
        return doctors;
      case SELECTED_TAB.SECOND:
        return services;
      case SELECTED_TAB.THIRD:
        return hospitals;
      default:
        console.error('Tab not handled!', activeTab);
    }
    return [];
  };

  const getFlatList = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={true}
        data={getDataForCurrentTab()}
        onRefresh={() => {
          doSearch(searchValue);
        }}
        refreshing={isFetching}
        renderItem={({ item, index }) => {
          switch (activeTab) {
            case SELECTED_TAB.FIRST:
              return (
                <View style={commonStyles.mb5}>
                  <DoctorCard
                    practitioner={item}
                    isFirstElement={index === 0}
                  />
                </View>
              );
            case SELECTED_TAB.SECOND:
              // services
              return (
                <View style={commonStyles.mb5}>
                  <DoctorCard
                    practitioner={item}
                    isFirstElement={index === 0}
                  />
                </View>
              );
            case SELECTED_TAB.THIRD:
              // hospitals
              return (
                <View style={commonStyles.mb5}>
                  <DoctorCard
                    practitioner={item}
                    isFirstElement={index === 0}
                  />
                </View>
              );
            default:
              console.error('Tab not handled!', activeTab);
          }

          return <></>;
        }}
      />
    );
  };

  const getFinalList = () => {
    switch (activeTab) {
      case SELECTED_TAB.FIRST:
        return doctorsTotalItems > 0 ? getFlatList() : getEmptyResultsList();
      case SELECTED_TAB.SECOND:
        return servicesTotalItems > 0 ? getFlatList() : getEmptyResultsList();
      case SELECTED_TAB.THIRD:
        return hospitalsTotalItems > 0 ? getFlatList() : getEmptyResultsList();
      default:
        console.error('Tab not handled!', activeTab);
    }
  };

  useEffect(() => {
    if (getCities) {
      getCities();
    }
  }, [getCities]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainerWrapper}>
        <Pressable
          style={[styles.locationSelect, commonStyles.directionColumn]}
          onPress={() => {
            setChooseCityModalOpen(true);
          }}>
          <Icon name={'map-pin'} size={18} color={Color.accent} />
          <Text
            style={[
              styles.locationSelectText,
              commonStyles.ml5,
              commonStyles.mr5,
            ]}>
            {filterObj?.filterLocationSpecificCity?.name
              ? filterObj?.filterLocationSpecificCity?.name
              : t('search:currentLocation')}
          </Text>
          <Icon name={'chevron-down'} size={22} color={Color.accent} />
        </Pressable>
        <View style={[styles.searchContainer, commonStyles.directionColumn]}>
          <SearchField
            finishEditing={(data) => {
              doSearch(data);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.Patient_SearchFilters);
            }}
            style={styles.filterContainer}>
            {filterObj && Object.keys(filterObj).length > 0 ? (
              <FullFilterIcon />
            ) : (
              <Icon
                name="filter"
                size={Sizes.icon_bottom_bar}
                color={Color.gray_200}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.contents]}>
        <ThreeTabs
          title1={t('search:doctors')}
          badge1={doctorsTotalItems + ''}
          title2={t('search:services')}
          badge2={servicesTotalItems + ''}
          title3={t('search:hospitals')}
          badge3={hospitalsTotalItems + ''}
          onSelectedTab={(tab: SELECTED_TAB) => {
            setActiveTab(tab);
          }}
        />
        {loading ? (
          <Loading />
        ) : doctorsTotalItems > 0 ||
          servicesTotalItems > 0 ||
          hospitalsTotalItems > 0 ? (
          <View style={[styles.listWrapper, commonStyles.mt10, commonStyles.ph10]}>
            {getFinalList()}
          </View>
        ) : (
          <EmptySign
            title={t('search:emptyFilter:title')}
            subtitle={t('search:emptyFilter:subtitle')}
          />
        )}
      </View>
      <StatusBar barStyle="default" />

      <ModalChooseCity
        toggleModal={() => {
          setChooseCityModalOpen(!chooseCityModalOpen);
        }}
        visible={chooseCityModalOpen}
        setValue={(city: ICity) => {
          const cityValue = { ...city, obj: city };
          setFilterLocationSpecificCity(cityValue);
          let filterObjClone = { ...filterObj };
          filterObjClone.filterLocationSpecificCity = cityValue;
          setFilters(filterObjClone);
          setChooseCityModalOpen(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  contents: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  listWrapper: {
    height: '100%',
  },

  searchContainerWrapper: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 35 : 15,
    paddingBottom: scaleHeight(26),
    width: '100%',
    paddingHorizontal: scaleWidth(30),
    backgroundColor: Color.white,
    borderBottomLeftRadius: scaleWidth(24),
    borderBottomRightRadius: scaleWidth(24),
    paddingVertical: scaleWidth(10),
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex: 1,
    borderStyle: 'solid',
    borderColor: Color.gray_200,
    borderWidth: 1,
    borderTopWidth: 0,
  },
  locationSelect: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: Color.white,
    marginBottom: scaleHeight(Margin.between_entries),
  },
  locationSelectText: {
    color: Color.accent,
    fontWeight: '600',
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  filtersContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    zIndex: 1,
  },
  searchField: {
    alignItems: 'center',
    flexDirection: 'row',
    width: scaleWidth(360),
    marginTop: scaleHeight(10),
  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderColor: Color.border,
    borderWidth: scaleWidth(1),
    height: scaleHeight(44),
    width: scaleWidth(44),
    marginLeft: scaleWidth(10),
    borderRadius: scaleWidth(15),
  },

  mt32: {
    marginTop: Margin.m_7xl,
  },
  mt5: {
    marginTop: Margin.m_4xs,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  ml10: {
    marginLeft: Margin.m_xs,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },

  filterCard: {
    borderColor: Color.gray_200,
    borderWidth: 1,
    borderRadius: BorderRadius.card,
    borderStyle: 'solid',
    padding: scaleWidth(5),
    marginLeft: scaleWidth(Margin.m_5),
  },

  searchShadowBox: {
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: 'rgba(0, 64, 128, 0.1)',
    borderBottomLeftRadius: Border.br_lg,
    borderBottomRightRadius: Border.br_lg,
  },
  basePosition: {
    top: 14,
    position: 'absolute',
  },
  filtersFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentstabactiveLayout: {
    paddingVertical: Padding.p_sm,
    width: 110,
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    borderRadius: Border.br_xl,
  },
  doctorsTypo: {
    fontWeight: '600',
    lineHeight: 18,
    fontSize: FontSize.defaultRegularFootnote_size,
    fontFamily: FontFamily.textInputError1,
    textAlign: 'center',
  },
  searchTypo: {
    textAlign: 'left',
    color: Color.primaryNeutral9001,
    display: 'none',
    fontFamily: FontFamily.textInputError1,
    fontSize: FontSize.fontH5,
  },
  search1Border: {
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    backgroundColor: Color.white,
    alignItems: 'center',
  },
  queryTypo: {
    lineHeight: 21,
    fontSize: FontSize.fontH4,
    textAlign: 'left',
  },
  filterIconLayout: {
    height: 24,
    width: 24,
    overflow: 'hidden',
  },
  illustration: {
    backgroundColor: Color.ghostwhite_200,
    width: 96,
    height: 96,
    borderRadius: Border.br_lg,
  },
  searchForServices: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  youCanUse: {
    margin: Margin.m_9xs,
  },
  searchForServicesContainer1: {
    lineBreak: 'anywhere',
    width: '100%',
  },
  searchForServicesContainer: {
    lineHeight: 20,
    fontFamily: FontFamily.bodyH2,
    color: Color.darkgray_300,
    display: 'flex',
    width: 337,
    textAlign: 'center',
    fontSize: FontSize.fontH5,
    alignItems: 'center',
  },
  emptysign: {
    top: 240,
    left: 17,
    alignItems: 'center',
    position: 'absolute',
  },
  searchBg: {
    height: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    position: 'absolute',
    width: '100%',
  },
  doctors: {
    color: Color.white,
    fontFamily: FontFamily.textInputError1,
  },
  componentstabactive: {
    backgroundColor: Color.colourMain,
    paddingHorizontal: Padding.p_xs,
  },
  doctors1: {
    color: Color.dimgray_400,
    fontFamily: FontFamily.textInputError1,
  },
  componentstabinactive: {
    paddingHorizontal: Padding.p_6xl,
    backgroundColor: Color.white,
  },
  componentstabs3: {
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowRadius: 64,
    elevation: 64,
    width: 345,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    alignItems: 'center',
  },
  search: {
    lineHeight: 17,
    display: 'none',
    fontWeight: '500',
  },
  placeholder: {
    color: Color.uI41,
    fontWeight: '500',
    fontFamily: FontFamily.textInputError1,
  },
  jhondoegmailcom: {
    letterSpacing: 0.1,
    lineHeight: 24,
    width: 343,
    display: 'none',
  },
  inputArea: {
    alignSelf: 'stretch',
    borderRadius: Border.br_md,
    borderColor: '#e4e5e9',
    height: 50,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_3xl,
    justifyContent: 'space-between',
  },
  inputcustomdoctify: {
    flex: 1,
  },
  iconly: {
    width: 20,
    height: 20,
  },
  query: {
    fontFamily: FontFamily.textH612pxRegular,
    color: Color.systemColoursLabelColourPrimaryLight,
  },
  text: {
    paddingRight: Padding.p_8xs,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconlyParent: {
    width: 287,
    flexDirection: 'row',
  },
  frameParent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  search1: {
    borderColor: '#efeff6',
    width: 303,
    padding: Padding.p_md,
    display: 'none',
    borderRadius: Border.br_lg,
  },
  filterIcon: {
    zIndex: 0,
  },
  filters: {
    height: 44,
    padding: Padding.p_xs,
    borderRadius: Border.br_lg,
  },
  searchBg1: {
    width: 367,
    height: 73,
    display: 'none',
  },
  componentssearchwithfilters: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searcharea: {
    left: 11,
    alignItems: 'center',
  },
  searchcontents: {
    top: 0,
    height: 132,
    left: 0,
  },

  s22PatientViewsSearch: {
    height: 812,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
});

export default PatientSearchComponent;
