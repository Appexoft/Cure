import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

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
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { useTranslation } from 'react-i18next';
import useReviewsOfPractitioner from '@screens/app/patient/detail/doctor/reviews/useReviewsOfPractitioner';
import Loading from '@screens/app/common/loading';
import Error from '@screens/app/common/error';
import ReviewSummary from '@screens/app/common/review/ReviewSummary';
import ReviewListItem from '@screens/app/common/review/ReviewListItem';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import ROUTES from '../../../../../../utils/routes';
import {
  EntityType,
  IPractitioner,
  toReviewGenericDto,
} from '../../../../../../utils/domainEntities';

interface Props {
  resource: IPractitioner;
  entityType: EntityType;
  onFetchData?: any;
  navigation?: any;
}

// TODO Make this view generic?? so it will work with other entities as well ?
export const DetailReviews: React.FC<Props> = (props: Props) => {
  // @ts-ignore
  const { t } = useTranslation('common');
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const { resource, navigation } = props;

  const { data, isSuccess, isLoading, isError, refetch } =
    useReviewsOfPractitioner(resource?.id);

  console.log('Reviews data', data);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error title={t('error:fetching:reviews')} />;
  }

  const toggleModalAddNew = () => {
    if (navigation) {
      navigation.navigate(ROUTES.AddReview, {
        resource: toReviewGenericDto(resource, props.entityType),
        fhirEntity: resource,
        onGoBack: () => {
          refetch();
        },
      });
    }
  };

  return (
    <View style={styles.contents}>
      <View style={styles.reviewSummary}>
        <ReviewSummary
          value={resource?.reviewValue || 0}
          countTotal={resource?.reviewCountTotal || 0}
          count1={resource?.reviewCount1 || 0}
          count2={resource?.reviewCount2 || 0}
          count3={resource?.reviewCount3 || 0}
          count4={resource?.reviewCount4 || 0}
          count5={resource?.reviewCount5 || 0}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={true}
        data={data?.entries}
        keyExtractor={(item) => `${item?.id}`}
        style={styles.reviewsList}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.row}>
              <ReviewListItem resource={item} />
            </View>
          );
        }}
      />
      <View style={styles.addReviewView}>
        <ButtonPrimary
          style={styles.addReviewBtn}
          title={t('review:btnAddNew')}
          iconLeft={'plus'}
          onPress={(e: any) => {
            toggleModalAddNew();
          }}
        />
      </View>
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
    backgroundColor: Color.white,
    height: '70%',
    borderRadius: BorderRadius.large,
    flexDirection: 'column',
    marginTop: scaleHeight(Margin.between_entries),
    marginBottom: scaleHeight(Margin.between_entries),
  },
  reviewSummary: {
    height: '22%',
  },
  reviewsList: {
    flex: 1,
  },
  addReviewView: {
    position: 'absolute',
    bottom: scaleHeight(20),
    right: scaleWidth(20),
    zIndex: 1000,
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
