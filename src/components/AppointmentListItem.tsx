import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  LayoutAnimation,
  LogBox,
  Platform,
  Text,
  UIManager,
  View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../utils/size';
import FONTS from '../utils/fonts/index';

import {
  Border,
  BorderRadius,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from '../utils/GlobalStyles';
import { commonStyles } from '../utils/styles/commonStyles';
import Avatar from '@screens/app/common/avatar/Avatar';
import RatingLine from '@components/RatingLine';
import PriceLine from '@components/PriceLine';
import InfoAddressLine from '@components/InfoAddressLine';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import {
  AvatarSizeType,
  ImageEntityType,
  ImageType,
} from '../utils/entityUtils';
import TwoButtons from '@components/btns/TwoButtons';
import { fhirR4 } from '@smile-cdr/fhirts';
import {
  getAppointmentDatePretty,
  getDoctorFromAppointment,
  getLocationFromAppointment,
  getNameIdentifierFromFhir,
} from '../utils/fhir/fhirTypes';
import DateInterval from '@components/time/DateInterval';
import { PriceCurrency } from '../utils/domainEntities';

interface PropsAppointment {
  resource: fhirR4.Appointment;

  desciption?: string;
  imgDoctor?: any;
  svgDoctor?: any;
  doctorName?: string;
  specialized?: string;
  rating?: string;
  title?: string;
  shortTitle?: string;
  location?: string;
  time?: string;
  onCancel?: any;
  onReschedule?: any;
  disabled?: boolean;
  done?: boolean;
  cancel?: boolean;
}

const AppointmentListItem = (props: PropsAppointment) => {
  const { resource, onCancel, onReschedule } = props;
  const { t } = useTranslation();
  const [practitioner, setPractitioner] =
    useState<fhirR4.AppointmentParticipant>(null);
  const [location, setLocation] = useState<fhirR4.AppointmentParticipant>(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const heightAnim = useRef(new Animated.Value(scaleHeight(112))).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const showAnim = useRef(new Animated.Value(1)).current;
  const [viewState, setViewState] = useState(true);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  useEffect(() => {
    if (
      resource &&
      resource?.participant &&
      resource?.participant?.length > 0
    ) {
      console.log('Found location: ', getLocationFromAppointment(resource));
      setPractitioner(getDoctorFromAppointment(resource) || null);
      setLocation(getLocationFromAppointment(resource) || null);
      setDate(getAppointmentDatePretty(resource));
      setTitle(getNameIdentifierFromFhir(resource?.identifier)); // should we use description field instead ?
    }
  }, [resource]);

  const toggleAnimation = useCallback(() => {
    if (viewState === true) {
      Animated.timing(heightAnim, {
        toValue: scaleHeight(395),
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setViewState(false);
      });
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(heightAnim, {
        toValue: scaleHeight(112),
        duration: 1500,
        useNativeDriver: true,
      }).start(() => setViewState(true));
    }
  }, [heightAnim, viewState, opacityAnim]);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
      Animated.timing(showAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(),
        Animated.timing(showAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }).start();
    }
  }, [opacityAnim, viewState, showAnim]);

  const onPress = () => {
    viewState
      ? LayoutAnimation.configureNext(LayoutAnimation.Presets.spring.delete)
      : LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setViewState(!viewState);
    toggleAnimation();
    startAnimationOpacity();
  };
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={styles.appointmentItem}>
      <View style={commonStyles.cardTitleLine}>
        <Text style={commonStyles.cardTitle}>{title}</Text>
      </View>
      <View style={commonStyles.mt10}>
        <View style={styles.topContainer}>
          <Avatar
            entityId={practitioner?.actor?.id}
            entityType={ImageEntityType.PRACTITIONER}
            type={ImageType.AVATAR_SMALL}
            size={AvatarSizeType.LIST_LARGE}
          />
          <View style={styles.ml8}>
            <Text style={[commonStyles.textH5Bold]}>
              {practitioner ? practitioner?.actor?.display : ''}
            </Text>
            <View style={[styles.topContainer, styles.mt8]}>
              <Text style={[commonStyles.textH5]}>Dentist</Text>
              <RatingLine rating={'5.0'} />
            </View>
            <PriceLine value={1} currency={PriceCurrency.RON} />
          </View>
        </View>
        <View style={[styles.timelocation, styles.mt12]}>
          <View style={styles.timeAndLocation}>
            <InfoAddressLine
              icon={'map-marker'}
              address={location?.actor?.display}
            />
            {resource?.startDate && resource?.endDate && (
              <DateInterval
                  startDate={new Date(resource?.startDate)
                }
                  endDate={new Date(resource?.endDate)}
              />
            )}
          </View>
          <View style={styles.status}>
            <View style={styles.done}>
              <Text style={[styles.done1, styles.hrTypo]}>Done</Text>
            </View>
          </View>
          <View style={styles.time1}>
            <Image
              style={styles.starIcon}
              resizeMode="cover"
              source={require('../../assets/iconsfeather24ptclock.png')}
            />
            <Text
              style={[styles.hr, styles.ml8, styles.hrTypo, styles.hrTypo1]}>
              2 hr
            </Text>
          </View>
        </View>
      </View>
      <View style={[commonStyles.mt10]}>
        <TwoButtons
          titleButton1={t('account:buttons:cancel')}
          titleButton2={t('account:buttons:reschedule')}
          onPressButton1={onCancel}
          onPressButton2={onReschedule}
        />
      </View>
    </View>
  );
};

export default AppointmentListItem;

const styles = ScaledSheet.create({
  appointmentItem: {
    backgroundColor: Color.white,
    borderRadius: scaleWidth(BorderRadius.card),
    marginHorizontal: scaleWidth(Margin.page_horizontal),
    overflow: 'hidden',
    padding: Padding.card,
    marginBottom: scaleHeight(Margin.between_entries),
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: 'solid',
  },
  btnCancel: {
    width: scaleWidth(150),
    backgroundColor: Color.white,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnReschedule: {
    width: scaleWidth(150),
    backgroundColor: Color.main,
    borderRadius: scaleWidth(10),
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtCancel: {
    textTransform: 'capitalize',
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.primaryNeutral600,
  },
  txtReschedule: {
    textTransform: 'capitalize',
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH6,
  },

  ml4: {
    marginLeft: Margin.m_5xs,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  mt12: {
    marginTop: Margin.m_md,
  },
  ml15: {
    marginLeft: Margin.m_xl,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  hrTypo: {
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
  },
  hrTypo1: {
    fontFamily: FontFamily.textInputError1,
    fontSize: FontSize.fontH5,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: Border.br_2xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  labelTypo: {
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0.1,
    fontSize: FontSize.fontH6,
    fontFamily: FontFamily.textInputError1,
  },
  iconsfeather24ptplusLayout: {
    height: 24,
    width: 24,
  },
  button5Position: {
    left: '50%',
    position: 'absolute',
  },
  componentstabactiveLayout: {
    paddingVertical: Padding.p_sm,
    width: 165,
    borderRadius: Border.br_xl,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  doctorsTypo: {
    fontWeight: '600',
    lineHeight: 18,
    fontSize: FontSize.defaultRegularFootnote_size,
    textAlign: 'center',
    fontFamily: FontFamily.textInputError1,
  },
  title: {
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.cardTitle,
    flexDirection: 'row',
    borderColor: '#efeff6',
    borderStyle: 'solid',
  },
  avatar: {
    backgroundColor: Color.ghostwhite_200,
    width: 76,
    borderRadius: Border.br_xs,
    alignSelf: 'stretch',
  },
  doctorTitle: {
    fontWeight: '500',
    color: Color.darkslategray_300,
    fontSize: FontSize.fontH5,
    fontFamily: FontFamily.textInputError1,
  },
  dentist: {
    color: Color.colourAccent,
    fontWeight: '500',
  },
  starIcon: {
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
  topContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text1: {
    color: Color.colourMain,
    fontWeight: '700',
  },
  location1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colourPastel2,
    padding: Padding.p_8xs,
    flexDirection: 'row',
  },
  satterfieldFortSuite: {
    color: Color.dimgray_200,
    fontWeight: '500',
  },
  timeAndLocation: {
    justifyContent: 'center',
  },
  done1: {
    fontFamily: FontFamily.textH612pxRegular,
    color: Color.white,
  },
  done: {
    backgroundColor: Color.lightsteelblue_200,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xs,
    flexDirection: 'row',
  },
  status: {
    alignItems: 'flex-end',
  },
  hr: {
    color: Color.lightgray_200,
    fontWeight: '500',
  },
  time1: {
    display: 'none',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timelocation: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  label: {
    color: Color.primaryNeutral600,
    fontWeight: '500',
  },
  button: {
    borderColor: '#d8e2e9',
    height: 40,
    paddingVertical: Padding.p_2xs,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: Color.white,
    flex: 1,
  },
  label1: {
    color: Color.white,
    fontWeight: '700',
  },
  button1: {
    backgroundColor: Color.colourMain,
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  iconsfeather24ptplus: {
    overflow: 'hidden',
  },
  button4: {
    right: 15,
    bottom: 112,
    width: 50,
    height: 50,
    paddingVertical: Padding.p_md,
    backgroundColor: Color.colourMain,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: Border.br_2xs,
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  button5: {
    height: '4.93%',
    marginLeft: -139.5,
    top: '81.28%',
    bottom: '13.79%',
    backgroundColor: Color.colourAccent,
    width: 280,
  },
  doctors: {
    color: Color.dimgray_400,
  },
  componentstabinactive: {
    paddingHorizontal: Padding.p_6xl,
    backgroundColor: Color.white,
    width: 165,
  },
  doctors1: {
    color: Color.white,
  },
  componentstabactive: {
    backgroundColor: Color.colourMain,
    paddingHorizontal: Padding.p_xs,
  },
  componentstabs2: {
    marginLeft: -172.5,
    top: 98,
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 64,
    elevation: 64,
    shadowOpacity: 1,
    width: 345,
    borderRadius: Border.br_xl,
    left: '50%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.white,
    position: 'absolute',
  },
  s252AppointmentsPast: {
    backgroundColor: Color.colourBackground,
    width: '100%',
    height: 812,
    overflow: 'hidden',
    flex: 1,
  },
});
