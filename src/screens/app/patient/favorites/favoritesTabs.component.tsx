import React, { useCallback, useEffect, useState } from 'react';
import { DoctorCard } from '@components/Favorites';
import { useTranslation } from 'react-i18next';
import { ThreeTabs } from '@components/tabs/threeTabs';
import { SELECTED_TAB } from '@components/tabs';
import Loading from '@screens/app/common/loading';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import EmptySign from '@screens/app/common/emptySign';
import { Color } from '../../../../utils/GlobalStyles';
import {
  IOrganization,
  IPractitioner,
  IPractitionerRole,
  SetFavoriteDto,
} from '../../../../utils/domainEntities';
import useAuth from '@screens/auth/authContext/useAuth';
import { scaleHeight } from '../../../../utils/size';
import { useNavigation } from '@react-navigation/native';
import ButtonHeader from '@components/btns/ButtonHeader';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  practitionerFavorites: IPractitioner[];
  practitionerFavoritesTotalItems: number;

  practitionerRoleFavorites: IPractitionerRole[];
  practitionerRoleFavoritesTotalItems: number;

  organizationsFavorites: IOrganization[];
  organizationsFavoritesTotalItems: number;

  fetchPractitionerFavorites: (patientId: number) => {};
  fetchPractitionerRoleFavorites: (patientId: number) => {};
  fetchOrganizationFavorites: (patientId: number) => {};
  updateFavorites: any;
  updateSuccess: boolean;
  loading: boolean;
}

export const FavoritesTabsComponent = React.memo((props: Props) => {
  const {
    practitionerFavorites,
    practitionerFavoritesTotalItems,

    practitionerRoleFavorites,
    practitionerRoleFavoritesTotalItems,

    organizationsFavorites,
    organizationsFavoritesTotalItems,

    fetchPractitionerFavorites,
    fetchPractitionerRoleFavorites,
    fetchOrganizationFavorites,
    updateFavorites,

    updateSuccess,
    loading,
  } = props;

  const { patient } = useAuth();
  const navigation = useNavigation();
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState(SELECTED_TAB.FIRST);
  const [isFetching, setIsFetching] = useState(false);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <ButtonHeader
          left={true}
          children={<Icon name={'refresh-cw'} size={16} color={Color.accent} />}
          onPress={() => {
            // mark this as favorite
            if (patient && patient.id) {
              doSearch();
            }
          }}
        />
      ),
    });
  }, [doSearch, navigation, patient]);

  const getEmptyResultsList = () => {
    return (
      <EmptySign
        title={t('search:emptyResults:title')}
        subtitle={t('search:emptyResults:subtitle')}
      />
    );
  };

  const doSearch = useCallback(() => {
    if (patient && patient?.id) {
      switch (activeTab) {
        case SELECTED_TAB.FIRST:
          return fetchPractitionerFavorites(patient?.id);
        case SELECTED_TAB.SECOND:
          return fetchPractitionerRoleFavorites(patient?.id);
        case SELECTED_TAB.THIRD:
          return fetchOrganizationFavorites(patient?.id);
        default:
          console.error('Tab not handled!', activeTab);
      }
    }
  }, [
    activeTab,
    fetchOrganizationFavorites,
    fetchPractitionerFavorites,
    fetchPractitionerRoleFavorites,
    patient,
  ]);

  useEffect(() => {
    doSearch();
  }, [
    activeTab,
    doSearch,
    fetchOrganizationFavorites,
    fetchPractitionerFavorites,
    fetchPractitionerRoleFavorites,
    patient,
  ]);

  const getDataForCurrentTab = () => {
    switch (activeTab) {
      case SELECTED_TAB.FIRST:
        return practitionerFavorites;
      case SELECTED_TAB.SECOND:
        return practitionerRoleFavorites;
      case SELECTED_TAB.THIRD:
        return organizationsFavorites;
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
          doSearch();
        }}
        refreshing={isFetching}
        renderItem={({ item, index }) => {
          switch (activeTab) {
            case SELECTED_TAB.FIRST:
              return (
                <DoctorCard practitioner={item} isFirstElement={index === 0} />
              );
            case SELECTED_TAB.SECOND:
              // services
              return (
                <DoctorCard practitioner={item} isFirstElement={index === 0} />
              );
            case SELECTED_TAB.THIRD:
              // hospitals
              return (
                <DoctorCard practitioner={item} isFirstElement={index === 0} />
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
        return practitionerFavoritesTotalItems > 0
          ? getFlatList()
          : getEmptyResultsList();
      case SELECTED_TAB.SECOND:
        return practitionerRoleFavoritesTotalItems > 0
          ? getFlatList()
          : getEmptyResultsList();
      case SELECTED_TAB.THIRD:
        return organizationsFavoritesTotalItems > 0
          ? getFlatList()
          : getEmptyResultsList();
      default:
        console.error('Tab not handled!', activeTab);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.contents]}>
        <ThreeTabs
          title1={t('search:doctors')}
          badge1={practitionerFavoritesTotalItems + ''}
          title2={t('search:services')}
          badge2={practitionerRoleFavoritesTotalItems + ''}
          title3={t('search:hospitals')}
          badge3={organizationsFavoritesTotalItems + ''}
          onSelectedTab={(tab: SELECTED_TAB) => {
            setActiveTab(tab);
          }}
        />
        {loading ? (
          <Loading />
        ) : practitionerFavoritesTotalItems > 0 ||
          practitionerRoleFavoritesTotalItems > 0 ||
          organizationsFavoritesTotalItems > 0 ? (
          <View style={commonStyles.mt10}>{getFinalList()}</View>
        ) : (
          <EmptySign
            title={t('search:emptyFilter:title')}
            subtitle={t('search:emptyFilter:subtitle')}
          />
        )}
      </View>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  contents: {
    width: '100%',
    height: '100%',
    zIndex: -1,
    marginTop: scaleHeight(50),
  },
});
