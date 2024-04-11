import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StarRating from 'react-native-star-rating';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import {
  Border,
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../../utils/GlobalStyles';
import { heightScreen, widthScreen } from '../../../../../utils/dimensions';
import { HeaderSwitchAccount } from '@components/header/header-switch-account';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import FONTS from '../../../../../utils/fonts';
import useAuth from '@screens/auth/authContext/useAuth';
import {
  IReviewGenericDto,
  IReviewEntry,
  toFhirReference,
} from '../../../../../utils/entityUtils';
import Avatar from '@screens/app/common/avatar/Avatar';
import DoctorVerticalCard from '@screens/app/patient/detail/cards/doctor/DoctorVerticalCard';
import {FHIR_TYPES} from "../../../../../utils/fhir/fhirTypes";

interface Props {
  resource: IReviewGenericDto;
  fhirEntity?: any;
  isModalVisible: boolean;
  toggleModal: any;
  setValue?: string;
  onSave: any;
}

@Deprecated
export const ModalAddReview: React.FC<Props> = ({
  resource,
  fhirEntity,
  author,
  onSave,
  isModalVisible,
  toggleModal,
}) => {
  const { t } = useTranslation();
  const [starValue, setStarValue] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const { userEntity } = useAuth();

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
    if (onSave) {
      const targetPractitioner =
        resource?.resourceType === FHIR_TYPES.Practitioner
          ? toFhirReference(
              resource?.id,
              resource?.resourceType,
              resource?.name,
            )
          : undefined;
      const targetOrganization =
        resource?.resourceType === 'Organization'
          ? toFhirReference(
              resource?.id,
              resource?.resourceType,
              resource?.name,
            )
          : undefined;
      const targetHealthcareService =
        resource?.resourceType === 'HealthcareService'
          ? toFhirReference(
              resource?.id,
              resource?.resourceType,
              resource?.name,
            )
          : undefined;
      const targetPractitionerRole =
        resource?.resourceType === FHIR_TYPES.PractitionerRole
          ? toFhirReference(
              resource?.id,
              resource?.resourceType,
              resource?.name,
            )
          : undefined;
      const review: IReviewEntry = {
        resourceType: 'ReviewEntry',
        value: starValue,
        author: toFhirReference(
          userEntity.id,
          userEntity.resourceType,
          userEntity?.name?.firstName + ' ' + userEntity?.name?.lastName,
        ),
        verified: false,
        description: description,
        targetPractitioner: targetPractitioner,
        targetOrganization: targetOrganization,
        targetHealthcareService: targetHealthcareService,
        targetPractitionerRole: targetPractitionerRole,
      };
      onSave(review);
    }
    if (toggleModal) {
      toggleModal();
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={isModalVisible}
        style={{ height: heightScreen }}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.headerModal}>
            <HeaderSwitchAccount
              title={t('review:modalTitle')}
            />
          </View>
          <View style={styles.reviewContent}>
            <DoctorVerticalCard resource={fhirEntity} />

            <View style={[styles.startContent, styles.contentPosition]}>
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
              <View style={[styles.inputcustomdefault, styles.mt20]}>
                <View style={styles.bg} />
                <Text style={[styles.label1, styles.label1Typo]}>Review</Text>
                <Text
                  style={[styles.text2, styles.text2Layout, styles.titleTypo]}>
                  My favorite doctor..
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomButtonsModal}>
            <ButtonPrimary
              style={styles.btnSubmit}
              title={t('common:submit')}
              titleStyle={styles.txtSubmit}
              onPress={onSubmit}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: heightScreen,
    width: widthScreen,
  },
  reviewContent: {
    backgroundColor: Color.colourBackground,
    flex: 1,
    overflow: 'hidden',
    width: '100%',
  },
  startContent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    justifyContent: 'center',
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
    marginRight: scaleWidth(10),
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
  bottomButtonsModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(22),
  },
  flatlist: {
    marginTop: scaleHeight(5),
  },
  btnSubmit: {
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
  txtSubmit: {
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
  contentPosition: {
    width: 340,
    left: 18,
    alignItems: 'center',
    position: 'absolute',
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
    position: 'absolute',
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
    position: 'absolute',
  },
  iconsarrow24pt: {
    top: 13,
    right: 10,
    width: 24,
    height: 24,
    display: 'none',
    position: 'absolute',
  },
  text2: {
    marginTop: -10,
    top: '50%',
    left: 15,
    color: Color.inputTextActive,
    textAlign: 'left',
    position: 'absolute',
  },
  inputcustomdefault: {
    width: 332,
    height: 188,
  },
});
