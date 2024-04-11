import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from '../../../../../utils/GlobalStyles';
import DoctorHeaderLargeCard from '@screens/app/patient/detail/cards/doctor/DoctorHeaderLargeCard';
import { FourTabs } from '@components/tabs/fourTabs';
import { DoctorDetailServices } from '@screens/app/patient/detail/doctor/services';
import { DetailReviews } from '@screens/app/patient/detail/doctor/reviews/DetailReviews';
import { DetailAddress } from '@screens/app/patient/detail/doctor/address/DetailAddress';
import { useTranslation } from 'react-i18next';
import { SELECTED_TAB } from '@components/tabs';
import {
  EntityType,
  IPractitioner,
  SetFavoriteDto,
} from '../../../../../utils/domainEntities';
import { DetailInfo } from '@screens/app/patient/detail/doctor/info/DetailInfo';
import { useNavigation, useRoute } from '@react-navigation/native';
import useAuth from '@screens/auth/authContext/useAuth';
import FavoredBtnComponent from '@components/btns/favoredBtn/favoredBtn.component';
import HeaderTitle from '@components/HeaderTittle';
import { getNameForPractitioner } from '../../../../../utils/fhir/fhirTypes';

interface Props {
  practitionerFavorites: IPractitioner[];
  fetchPractitionerFavorites: (patientId: number) => {};
  updateFavorites: (data: SetFavoriteDto) => {};
  updateSuccess: boolean;
  loading: boolean;
}

const DoctorDetailComponent = (props: Props) => {
  const { t } = useTranslation('common');
  const navigation = useNavigation();
  const route = useRoute();
  const { patient } = useAuth();

  const {
    practitionerFavorites,
    fetchPractitionerFavorites,
    updateFavorites,
    updateSuccess,
    loading,
  } = props;

  const { resource }: { resource: IPractitioner } = route.params;
  const [activeTab, setActiveTab] = useState(SELECTED_TAB.FIRST);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count

    navigation.setOptions({
      headerRight: () => (
        <FavoredBtnComponent
          entityType={EntityType.PRACTITIONER_ENTITY}
          favorites={practitionerFavorites}
          fetchFavorites={fetchPractitionerFavorites}
          resource={resource}
          updateFavorites={updateFavorites}
          loading={loading}
          updateSuccess={updateSuccess}
        />
      ),
      headerTitle: () => (
        <HeaderTitle title={getNameForPractitioner(resource)} />
      ),
    });
  }, [
    fetchPractitionerFavorites,
    navigation,
    practitionerFavorites,
    resource,
    updateFavorites,
    updateSuccess,
    loading,
  ]);

  return (
    <View style={styles.contents}>
      <DoctorHeaderLargeCard resource={resource} />
      <FourTabs
        title1={t('detail:services')}
        title2={t('detail:reviews')}
        title3={t('detail:address')}
        title4={t('detail:info')}
        onSelectedTab={(tab: SELECTED_TAB) => {
          setActiveTab(tab);
        }}
      />

      <View style={styles.tabContents}>
        {activeTab === SELECTED_TAB.FIRST && (
          <DoctorDetailServices resource={resource} navigation={navigation} />
        )}
        {activeTab === SELECTED_TAB.SECOND && (
          <DetailReviews
            resource={resource}
            navigation={navigation}
            entityType={EntityType.PRACTITIONER_ENTITY}
          />
        )}
        {activeTab === SELECTED_TAB.THIRD && (
          <DetailAddress resource={resource} navigation={navigation} />
        )}
        {activeTab === SELECTED_TAB.FOURTH && (
          <DetailInfo resource={resource} navigation={navigation} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    width: '100%',
    height: '100%',
    // height: scaleHeight(100),
    zIndex: -1,
    backgroundColor: Color.pageBackground,
    overflow: 'hidden',
    // flexDirection: 'row',
    // flex: 1,
  },
  tabContents: {
    height: '100%',
  },

  mt5: {
    marginTop: Margin.m_4xs,
  },
  mt12: {
    marginTop: Margin.m_md,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  mt24: {
    marginTop: Margin.m_4xl,
  },
  ml1: {
    marginLeft: Margin.m_8xs,
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
    fontFamily: FontFamily.textH612pxRegular,
  },
  doctorsTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.textInputError1,
    lineHeight: 18,
    fontSize: FontSize.defaultRegularFootnote_size,
    fontWeight: '600',
  },
  componentstabinactiveFlexBox: {
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_sm,
    height: 40,
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignresources: 'center',
    flex: 1,
  },
  entries: {
    height: 429,
    alignSelf: 'stretch',
  },
  content: {
    alignSelf: 'stretch',
  },
  photoChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.ghostwhite_200,
    width: 64,
    height: 64,
  },
  healerHospital2: {
    fontSize: FontSize.fontH4,
    lineHeight: 21,
    color: Color.gray_700,
    textAlign: 'left',
    fontFamily: FontFamily.textH612pxRegular,
    fontWeight: '600',
  },
  starIcon: {
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
  text: {
    color: Color.lavender_100,
  },
  photo: {
    flexDirection: 'row',
    alignresources: 'center',
  },
  viewProfile: {
    color: Color.dimgray_200,
  },
  iconly: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  photoParent: {
    width: 343,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  servicesInner: {
    display: 'none',
    justifyContent: 'center',
    alignresources: 'center',
  },
  services: {
    top: '20%',
    left: 18,
    width: 340,
    height: 517,
    paddingTop: Padding.p_xs,
    position: 'absolute',
  },
  doctors: {
    color: Color.white,
  },
  componentstabactive: {
    backgroundColor: Color.colourMain,
    paddingHorizontal: Padding.p_xs,
    zIndex: 3,
    paddingVertical: Padding.p_sm,
    height: 40,
    borderRadius: Border.br_xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignresources: 'center',
    flex: 1,
  },
  doctors1: {
    color: Color.dimgray_400,
  },
  componentstabinactive: {
    zIndex: 2,
  },
  componentstabinactive1: {
    zIndex: 1,
  },
  componentstabinactive2: {
    zIndex: 0,
  },
  componentstabs4: {
    marginTop: -151,
    marginLeft: -171.5,
    top: '50%',
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 64,
    elevation: 64,
    shadowOpacity: 1,
    width: 345,
    height: 40,
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    left: '50%',
    flexDirection: 'row',
    position: 'absolute',
  },
});

export default DoctorDetailComponent;
