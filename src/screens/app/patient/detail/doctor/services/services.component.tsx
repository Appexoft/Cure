import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import HospitalCard from '@screens/app/patient/detail/cards/hospital/HospitalCard';
import ServiceListItem from '@screens/app/patient/detail/cards/service/ServiceListItem';
import {
  Border,
  BorderRadius,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
  Sizes,
} from '../../../../../../utils/GlobalStyles';
import { scaleHeight } from '../../../../../../utils/size';
import EmptySign from '@screens/app/common/emptySign';
import { useTranslation } from 'react-i18next';
import useServicesOfPractitioner from '@screens/app/patient/detail/doctor/services/useServicesOfPractitioner';
import Loading from '@screens/app/common/loading';
import Error from '@screens/app/common/error';
import {
  IPractitioner,
  IPractitionerRole,
} from '../../../../../../utils/domainEntities';
import { useNavigation } from '@react-navigation/native';

interface Props {
  resource: IPractitioner;

  onFetchData?: any;
  navigation?: any;
}

export const DoctorDetailServices: React.FC<Props> = (props: Props) => {
  // @ts-ignore
  const { t } = useTranslation('common');
  const navigation = useNavigation();

  const { resource }: { resource: IPractitioner } = props;

  const { data, isSuccess, isLoading, isError } = useServicesOfPractitioner(
    resource?.id,
  );

  console.log('data in services', data);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error title={t('error:fetching:services')} />;
  }

  if (
    data &&
    ((data?.entries && data?.entries?.length === 0) || !data.entries)
  ) {
    return <EmptySign title={t('search:emptyCommon:title')} subtitle={null} />;
  }

  return (
    <View style={styles.contents}>
      <FlatList
        showsVerticalScrollIndicator={true}
        data={data?.entries}
        keyExtractor={(item) => `${item?.organization?.id}`}
        renderItem={({ item, index }) => {
          console.log('item service', item);
          const services = [...item?.services];
          return (
            <View style={styles.row}>
              <HospitalCard
                resource={item?.organization}
                navigation={navigation}
              />
              <View style={[styles.entries]}>
                {services.map((it: IPractitionerRole) => {
                  return (
                    <ServiceListItem
                      resource={it}
                      practitioner={resource}
                      navigation={props.navigation}
                    />
                  );
                })}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: Sizes.card_size,
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 64,
    shadowOpacity: 1,
    padding: scaleHeight(Padding.card),
    height: '70%',
    borderRadius: BorderRadius.large,
    flexDirection: 'row',
    marginBottom: scaleHeight(Margin.between_entries),
  },

  row: {
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
    alignItems: 'center',
    flex: 1,
  },
  entries: {
    alignSelf: 'stretch',
    marginTop: scaleHeight(5),
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
    alignItems: 'center',
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
    alignItems: 'center',
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
    alignItems: 'center',
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
