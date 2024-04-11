import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StarRating from 'react-native-star-rating';
import { StyleSheet, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import {
  Border,
  Color,
  FontSize,
  Margin,
  Padding,
  Sizes,
} from '../../../../../utils/GlobalStyles';
import { heightScreen, widthScreen } from '../../../../../utils/dimensions';
import FONTS from '../../../../../utils/fonts';
import useAuth from '@screens/auth/authContext/useAuth';
import DoctorVerticalCard from '@screens/app/patient/detail/cards/doctor/DoctorVerticalCard';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import TextInputCustom from '@components/input/TextInputCustom';
import { validateValue } from '../../../../../utils/validations/FormValidations';
import Icon from 'react-native-vector-icons/Feather';
import { commonStyles } from '../../../../../utils/styles/commonStyles';
import { useMutation } from 'react-query';
import { apiService } from '../../../../../services';
import { API_REVIEWS } from '../../../../../services/api/ApiConstants';
import {
  EntityType,
  IPatient,
  IReviewGenericDto,
  IUser,
} from '../../../../../utils/domainEntities';
import GenericVerticalCard from "@screens/app/patient/detail/cards/common/GenericVerticalCard";

interface Props {
  resource: IReviewGenericDto;
  isModalVisible: boolean;
  toggleModal: any;
  setValue?: string;
  onSave?: any;
}

const AddReviewScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const {
    resource,
    onGoBack,
  }: { resource: IReviewGenericDto; onGoBack: any } = route.params;

  const [starValue, setStarValue] = useState<number>(1);
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const { patient, userEntity }: { patient: IPatient; userEntity: IUser } =
    useAuth();

  const onBack = useCallback(() => {
    navigation.goBack();
    if (onGoBack) {
      onGoBack();
    }
  }, [navigation, onGoBack]);

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return apiService.makePOSTRequest(`${API_REVIEWS}/create`, data);
      // return getFhirResponseData(response?.success?.data);
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update with id ${error}`);
    },
    onSuccess: (data, variables, context) => {
      if (data?.success?.status === 201) {
        console.log('Status', data?.success?.status);
        onBack();
      }
    },
    onSettled: (data, error, variables, context) => {
    },
  });

  const getStarDescription = (level: number) => {
    switch (level) {
      case 0:
        return t('review:levels:zero');
      case 1:
        return t('review:levels:one');
      case 2:
        return t('review:levels:two');
      case 3:
        return t('review:levels:three');
      case 4:
        return t('review:levels:four');
      case 5:
        return t('review:levels:five');
    }
  };

  const onSubmit = () => {
    if (mutation) {
      const reviewToCreate = {
        id: null,
        entityType: resource.entityType,
        title: title,
        description: description,
        stars: starValue,
        verified: false,
        authorUserId: userEntity?.id,
        authorPatientId: patient?.id,
        authorPractitionerId: null,
        practitionerId:
          resource.entityType === EntityType.PRACTITIONER_ENTITY
            ? resource.id
            : null,
        practitionerRoleId:
          resource.entityType === EntityType.PRACTITIONER_ROLE_ENTITY
            ? resource.id
            : null,
        organizationId:
          resource.entityType === EntityType.ORGANIZATION_ENTITY
            ? resource.id
            : null,
      };
      mutation.mutate(reviewToCreate);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.reviewContent}>
        <View style={styles.headerWrapper}>
          <GenericVerticalCard resource={resource} />
        </View>
        <View style={[styles.startContent]}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starValue}
            fullStarColor={Color.starReview}
            starSize={30}
            containerStyle={styles.starContainer}
            selectedStar={(rating: number) => setStarValue(rating)}
          />
          <Text style={[styles.niceWork, styles.mt20, styles.label1Typo]}>
            {getStarDescription(starValue)}
          </Text>
          <View style={[styles.textArea]}>
            <TextInputCustom
              svg={<Icon name="type" size={Sizes.icon_input} />}
              numberOfLines={1}
              placeholder={t('review:title')}
              validate={(text) => {
                return !!validateValue(text, 1);
              }}
              value={title}
              onRawChangedText={(data: string) => {
                setTitle(data);
              }}
              validationMsg={t('validation:reviewInvalid')}
            />
          </View>
          <View style={[styles.textArea]}>
            <TextInputCustom
              svg={<Icon name="edit" size={Sizes.icon_input} />}
              numberOfLines={5}
              isMultiline={true}
              placeholder={t('review:addReview')}
              validate={(text) => {
                return !!validateValue(text, 1);
              }}
              value={description}
              onRawChangedText={(data: string) => {
                setDescription(data);
              }}
              validationMsg={t('validation:reviewInvalid')}
            />
          </View>
        </View>
      </View>

      <View style={commonStyles.bottomButtonContainer}>
        <ButtonPrimary
          style={commonStyles.bottomButton}
          disabled={description === ''}
          title={t('common:submit')}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    width: widthScreen,
    height: heightScreen,
    backgroundColor: Color.colourBackground,
  },
  reviewContent: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  headerWrapper: {
    height: scaleHeight(200),
    marginTop: scaleHeight(50),
  },
  startContent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: scaleHeight(50),
    marginLeft: scaleWidth(25),
    width: widthScreen,
  },
  inputArea: {
    width: scaleWidth(335),
    height: scaleHeight(50),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: scaleHeight(5),
    flexDirection: 'row',
  },
  inputAreaActive: {
    width: scaleWidth(335),
    height: scaleHeight(50),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: scaleHeight(5),
    flexDirection: 'row',
    backgroundColor: Color.main,
  },
  searchField: {
    color: Color.text,
    fontSize: FontSize.fontH4,
  },
  starContainer: {
    width: scaleWidth(200),
    // marginRight: scaleWidth(10),
  },
  leftIcon: {
    marginHorizontal: scaleWidth(15),
    width: scaleWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerModal: {
    height: scaleHeight(100),
    width: widthScreen,
    backgroundColor: Color.headerBg,
    marginTop: scaleHeight(-12),
    marginBottom: scaleHeight(12),
    borderBottomLeftRadius: scaleHeight(15),
    borderBottomRightRadius: scaleHeight(15),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flatlist: {
    marginTop: scaleHeight(5),
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
  txtSelect: {
    textTransform: 'uppercase',
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH6,
    color: Color.white,
    marginRight: scaleWidth(10),
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  ml20: {
    marginLeft: Margin.m_3xl,
  },
  ml5: {
    marginLeft: Margin.m_4xs,
  },
  mt2: {
    marginTop: Margin.m_7xs,
  },
  mt20: {
    marginTop: Margin.m_3xl,
  },
  labelTypo: {
    fontWeight: '700',
    fontFamily: FONTS.URBANIST.Regular,
  },
  componentslocationsmallFlexBox: {
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  titleTypo: {
    fontSize: FontSize.fontH4,
    textAlign: 'left',
  },
  textLayout: {
    lineHeight: 18,
    fontSize: FontSize.fontH5,
  },
  text2Layout: {
    lineHeight: 20,
    fontFamily: FONTS.URBANIST.Regular,
  },
  icons16pxawardLayout: {
    height: 16,
    width: 16,
  },
  label1Typo: {
    fontSize: FontSize.fontH5,
    fontWeight: '500',
  },
  label: {
    letterSpacing: 0.1,
    lineHeight: 22,
    color: Color.white,
    textAlign: 'center',
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: FontSize.fontH6,
  },
  button: {
    height: '4.93%',
    width: '90.67%',
    top: '90.27%',
    right: '4.53%',
    bottom: '4.8%',
    left: '4.8%',
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colourMain,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  title: {
    lineHeight: 24,
    color: Color.gray_700,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Regular,
  },
  cardiologist: {
    color: Color.darkgray_200,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: FONTS.URBANIST.Regular,
  },
  text: {
    color: Color.sandybrown_200,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Regular,
  },
  cardsratingsummary: {
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  job: {
    flexDirection: 'row',
  },
  description: {
    color: Color.dimgray_400,
    width: 215,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: FontSize.fontH6,
  },
  iconscustom24ptlocation: {
    overflow: 'hidden',
  },
  location1: {
    color: Color.darkslateblue_200,
    fontWeight: '500',
    textAlign: 'left',
    fontSize: FontSize.fontH6,
  },
  location: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  componentslocationsmall: {
    alignSelf: 'stretch',
    display: 'none',
    flexDirection: 'row',
  },
  text1: {
    fontWeight: '600',
    fontFamily: FONTS.URBANIST.Regular,
    color: Color.dodgerblue_200,
    display: 'none',
    textAlign: 'left',
  },
  cardsdoctorServiceHospital: {
    alignItems: 'center',
  },
  cardsserviceheaderlargever: {
    top: 88,
    borderRadius: Border.br_xl,
    height: 211,
    padding: Padding.p_xs,
    backgroundColor: Color.white,
  },
  starReviewList: {
    width: 191,
    height: 30,
  },
  niceWork: {
    fontFamily: FONTS.URBANIST.Regular,
    color: Color.primaryNeutral9001,
    fontWeight: '500',
    textAlign: 'center',
  },
  bg: {
    height: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: '#e0e1e5',
    borderWidth: 1,
    backgroundColor: Color.white,
    width: '100%',
  },
  label1: {
    top: -19,
    left: 6,
    lineHeight: 17,
    color: Color.systemColoursLabelColourPrimaryLight,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Regular,
  },
  iconsarrow24pt: {
    height: 24,
    display: 'none',
  },
  text2: {
    color: Color.inputTextActive,
    textAlign: 'left',
  },
});

export default AddReviewScreen;
