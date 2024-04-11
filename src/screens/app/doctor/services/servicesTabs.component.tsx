import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SELECTED_TAB } from '@components/tabs';
import Loading from '@screens/app/common/loading';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import EmptySign from '@screens/app/common/emptySign';
import {
  ACTION_SHEET_SWITCH_ACCOUNT,
  EntityType,
  HospitalServicesEntryDto,
  IOrganization,
  IPractitionerRole,
  ServicesOfPractitionerDto,
  TableSearchDto,
} from '../../../../utils/domainEntities';
import useAuth from '@screens/auth/authContext/useAuth';
import { TwoTabs } from '@components/tabs/twoTabs';
import HospitalCard from '@screens/app/patient/detail/cards/hospital/HospitalCard';
import { SheetManager } from 'react-native-actions-sheet';
import { HeaderSwitchAccount } from '@components/header/header-switch-account';
import NavigationService from '@navigation/common/NavigationService';
import ROUTES from '../../../../utils/routes';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { useNavigation } from '@react-navigation/native';
import ServiceEditItem from '@screens/app/patient/detail/cards/service/ServiceEditItem';

interface Props {
  services: ServicesOfPractitionerDto;
  servicesTotalItems: number;

  practitionerHospitals: IOrganization[];
  practitionerHospitalsTotalItems: number;

  organizations: IOrganization[];
  organizationsTotalItems: number;

  fetchServicesOfPractitioner: (practitionerId: number) => {};
  fetchHospitalsOfPractitioner: (data: TableSearchDto) => {};

  updateSuccess: boolean;
  loading: boolean;
}

export const ServicesTabsComponent = React.memo((props: Props) => {
  const {
    services,
    servicesTotalItems,

    practitionerHospitals,
    practitionerHospitalsTotalItems,

    fetchServicesOfPractitioner,
    fetchHospitalsOfPractitioner,

    updateSuccess,
    loading,
  } = props;

  const { practitioner } = useAuth();
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState(SELECTED_TAB.FIRST);
  const [isFetching, setIsFetching] = useState(false);
  const navigation = useNavigation();

  const getEmptyResultsList = () => {
    return (
      <EmptySign
        title={t('search:emptyResults:noItems')}
        subtitle={
          activeTab === SELECTED_TAB.FIRST
            ? t('search:emptyResults:createService')
            : t('search:emptyResults:addHospital')
        }
        showRefresh={true}
        buttonTitle={t('common:buttons:addNew')}
        buttonOnPress={() => {
          if (activeTab === SELECTED_TAB.FIRST) {
            onAddNewService();
          }
          if (activeTab === SELECTED_TAB.SECOND) {
            onAddNewHospital();
          }
        }}
      />
    );
  };

  const doSearch = useCallback(() => {
    if (practitioner && practitioner?.id) {
      switch (activeTab) {
        case SELECTED_TAB.FIRST:
          return fetchServicesOfPractitioner(practitioner?.id);
        case SELECTED_TAB.SECOND:
          let data: TableSearchDto = {
            sortBy: [{ id: 'nameText', desc: true }],
            filters: [],
            byEntity: {
              entityType: EntityType.PRACTITIONER_ENTITY,
              id: practitioner?.id,
              ids: [],
            },
            pageSize: 999999,
            pageIndex: 0,
          };
          return fetchHospitalsOfPractitioner(data);
        default:
          console.error('Tab not handled!', activeTab);
      }
    }
  }, [
    activeTab,
    fetchServicesOfPractitioner,
    fetchHospitalsOfPractitioner,
    practitioner,
  ]);

  useEffect(() => {
    doSearch();
  }, [
    updateSuccess,
    activeTab,
    doSearch,
    fetchServicesOfPractitioner,
    fetchHospitalsOfPractitioner,
    practitioner,
  ]);

  const getDataForCurrentTab = () => {
    switch (activeTab) {
      case SELECTED_TAB.FIRST:
        return services?.entries;
      case SELECTED_TAB.SECOND:
        return practitionerHospitals;
      default:
        console.error('Tab not handled!', activeTab);
    }
    return [];
  };

  const getServicesRow = (item: HospitalServicesEntryDto) => {
    const servicesCrt = [...item?.services];
    return (
      <View style={styles.row}>
        <HospitalCard resource={item?.organization} navigation={navigation} />
        <View style={[styles.entries]}>
          {servicesCrt.map((it: IPractitionerRole) => {
            return (
              <ServiceEditItem
                resource={it}
                hospital={item?.organization}
                practitioner={practitioner}
                navigation={navigation}
                isSelected={false}
                btnTitle={'Edit'}
                onBtnPress={() => {
                }}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const getFlatList = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={true}
        data={getDataForCurrentTab()}
        onRefresh={() => {
          doSearch();
        }}
        refreshing={isFetching}
        renderItem={({ item, index }) => {
          switch (activeTab) {
            case SELECTED_TAB.FIRST:
              // @ts-ignore
              return getServicesRow(item);
            case SELECTED_TAB.SECOND:
              // services
              return (
                <View style={commonStyles.pv5}>
                  <HospitalCard resource={item} isFirstElement={index === 0} />
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
    console.log('getFinalList', services);
    switch (activeTab) {
      case SELECTED_TAB.FIRST:
        return services?.total > 0 ? getFlatList() : getEmptyResultsList();
      case SELECTED_TAB.SECOND:
        return practitionerHospitalsTotalItems > 0
          ? getFlatList()
          : getEmptyResultsList();
      default:
        console.error('Tab not handled!', activeTab);
    }
  };

  const onAddNewService = () => {
    NavigationService.navigate(ROUTES.Doctor_Services_Wizzard, []);
  };

  const onAddNewHospital = () => {
    NavigationService.navigate(ROUTES.Doctor_Services_Create_Work_Location, []);
  };

  return (
    <View style={styles.container}>
      <HeaderSwitchAccount
        title={t('header:servicesAndHospitals')}
        leftContent
        onLeftPress={() => {
          SheetManager.hide(ACTION_SHEET_SWITCH_ACCOUNT);
          SheetManager.show(ACTION_SHEET_SWITCH_ACCOUNT);
        }}
        rightIconName={'plus'}
        onRightPress={() => {
          if (activeTab === SELECTED_TAB.FIRST) {
            onAddNewService();
          }
          if (activeTab === SELECTED_TAB.SECOND) {
            onAddNewHospital();
          }
        }}
      />
      <View style={[styles.contents, { flex: 1 }]}>
        <TwoTabs
          title1={t('common:services')}
          badge1={servicesTotalItems + ''}
          title2={t('search:hospitals')}
          badge2={practitionerHospitalsTotalItems + ''}
          showCount={false}
          onSelectedTab={(tab: SELECTED_TAB) => {
            setActiveTab(tab);
          }}
        />
        {loading ? (
          <Loading />
        ) : (
          <View style={[commonStyles.mt10, commonStyles.flatList]}>
            {getFinalList()}
          </View>
        )}
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    marginTop: scaleHeight(10),
  },
  entries: {
    alignSelf: 'stretch',
    marginTop: scaleHeight(5),
  },
  contents: {
    paddingHorizontal: scaleWidth(10),
  },
});
