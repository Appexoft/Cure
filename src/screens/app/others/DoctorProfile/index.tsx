import React, { memo, useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import SvgStar from '@assets/svgs/AppointmentList/SvgStar';
import FONTS from '../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import SvgVideo from '@assets/svgs/SvgVideo';
import SvgMessage from '@assets/svgs/SvgMessage';
import SvgBackArrow from '@assets/svgs/SvgBackArrow';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { SvgStethoscope } from '@assets/svgs/SvgStethoscope';
import SvgArrowDown from '@assets/svgs/SvgArrowDown';
import DoctorServiceItem from '@screens/app/others/DoctorProfile/components/DoctorServiceItem';
import TopicItem from '@components/TopicItem';
import SvgDoctor from '@assets/svgs/MainPage/SvgDoctor';
import SvgLocation from '@assets/svgs/SvgLocation';
import ROUTES from '../../../../utils/routes';

const DOCTOR_DATA = {
  imgDoctor: require('@assets/DoctorProfile/Doctor.png'),
  doctorName: 'Dr. Ann Carlson',
  specialized: 'Cardiologist',
  title: 'The Advantages Of Minimal Repair Technique',
  rating: '5.0',
  location: 'Newyork, United States',
  doctorServices: ['Pediatrics', 'Medical', 'Heart', 'Ophthalmic', 'Dentistry'],
  reviewer: '34',
};

const DoctorProfile = memo(({ navigation }) => {
  const [doctorData, setDoctorData] = useState(DOCTOR_DATA);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onBookAppoitnment = useCallback(() => {
    navigation.navigate(ROUTES.BookAppointment);
  }, [navigation]);

  const onVideoCall = useCallback(() => {
    navigation.navigate(ROUTES.VideoCall);
  }, [navigation]);

  const onMessage = useCallback(() => {
    navigation.navigate(ROUTES.DoctorMessage);
  }, [navigation]);

  const onDoctorInfomation = useCallback(() => {
    navigation.navigate(ROUTES.DoctorInformation);
  }, [navigation]);

  const onWorkingAddress = useCallback(() => {
    navigation.navigate(ROUTES.DoctorAddress);
  }, [navigation]);

  const onDoctorReview = useCallback(() => {
    navigation.navigate(ROUTES.DoctorReview);
  }, [navigation]);

  const renderItem = useCallback(() => {
    return doctorData.doctorServices.map((item, index) => {
      return <DoctorServiceItem key={index} title={item} />;
    });
  }, [doctorData.doctorServices]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <View style={styles.setRow}>
            <Text style={styles.doctorName}>{doctorData.doctorName}</Text>
            <View style={styles.rateView}>
              <Text style={styles.specialized}>{doctorData.specialized}</Text>
              <SvgStar style={styles.svgStart} />
              <Text style={styles.txtRating}>{doctorData.rating}</Text>
            </View>
            <Text style={styles.txtTitle}>{doctorData.title}</Text>
          </View>
          <Image style={styles.imgDoctor} source={doctorData.imgDoctor} />
        </View>
        <View style={styles.buttonsView}>
          <ButtonPrimary
            onPress={onBookAppoitnment}
            style={styles.buttonPrimary}
            title={'Book Appoitnment'}
            titleStyle={styles.txtBtn}
          />
          <TouchableOpacity onPress={onVideoCall} style={styles.svgVideo}>
            <SvgVideo />
          </TouchableOpacity>
          <TouchableOpacity onPress={onMessage} style={styles.svgMessage}>
            <SvgMessage />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onGoBack} style={styles.svgBackArrow}>
          <SvgBackArrow color={Color.semiBlack} />
        </TouchableOpacity>
      </View>
      <View style={styles.doctorServices}>
        <View style={styles.topView}>
          <View style={styles.flexDirection}>
            <SvgStethoscopeInactive height={21} color={Color.third} />
            <Text style={styles.txtDoctorServices}>{'  '}Doctor Services</Text>
          </View>
          <TouchableOpacity style={styles.svgArrowDown}>
            <SvgArrowDown />
          </TouchableOpacity>
        </View>
        <View style={styles.itemView}>{renderItem()}</View>
      </View>
      <TopicItem
        Svg={<SvgDoctor />}
        title={'Personal Infomation'}
        onPress={onDoctorInfomation}
      />
      <TopicItem
        Svg={<SvgLocation width={18} height={20} color={Color.green} />}
        title={'Working Address'}
        onPress={onWorkingAddress}
      />
      <TopicItem
        Svg={<SvgStar width={21} height={20} />}
        title={`Reviewer (${doctorData.reviewer})`}
        onPress={onDoctorReview}
      />
    </ScrollView>
  );
});

export default DoctorProfile;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  headerView: {
    backgroundColor: Color.main,
    borderBottomLeftRadius: scaleWidth(24),
    borderBottomRightRadius: scaleWidth(24),
    paddingLeft: scaleWidth(32),
    paddingBottom: scaleHeight(24),
    justifyContent: 'flex-end',
    paddingRight: scaleWidth(24),
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(30)
        : scaleHeight(30),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  doctorName: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
  },
  specialized: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.silverChalice,
  },
  txtRating: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
    marginBottom: scaleHeight(-4),
    color: Color.orange,
  },
  svgStart: {
    marginBottom: scaleHeight(5),
    marginLeft: scaleWidth(7),
    marginRight: scaleWidth(5),
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleHeight(6),
    marginBottom: scaleHeight(11),
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.dimgray,
    marginRight: scaleWidth(16),
  },
  imgDoctor: {
    width: scaleWidth(88),
    height: scaleHeight(128),
    borderRadius: scaleWidth(16),
    overflow: 'hidden',
  },
  setRow: {
    width: scaleWidth(215),
  },
  buttonPrimary: {
    width: scaleWidth(191),
  },
  txtBtn: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(14),
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(26),
  },
  svgVideo: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: Color.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgMessage: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: Color.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgBackArrow: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Platform.OS === 'ios' ? getStatusBarHeight() : scaleHeight(12),
  },
  doctorServices: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(16),
    marginHorizontal: scaleWidth(16),
    paddingBottom: scaleHeight(3),
    marginTop: scaleHeight(22),
    marginBottom: scaleHeight(23),
  },
  txtDoctorServices: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    textTransform: 'uppercase',
    color: Color.semiBlack,
  },
  svgArrowDown: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scaleWidth(22),
    paddingLeft: scaleWidth(16),
    paddingRight: scaleWidth(20),
    height: scaleHeight(60),
    marginBottom: scaleHeight(16),
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemView: {
    flexDirection: 'row',
    paddingLeft: scaleWidth(16),
    flexWrap: 'wrap',
  },
});
