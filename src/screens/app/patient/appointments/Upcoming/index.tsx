import React, { memo, useCallback, useState } from 'react';
import { View, FlatList, Platform, ImageSourcePropType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import keyExtractor from '../../../../../utils/keyExtractor';
import AppointmentListItem from '@components/AppointmentListItem';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { scaleHeight } from '../../../../../utils/size';
import useGetAppointments from '@screens/app/patient/home/components/homeAppointments/useGetAppointments';
import useAuth from '@screens/auth/authContext/useAuth';

interface UpcomingDataItem {
  desciption: string;
  imgDoctor: ImageSourcePropType;
  doctorName: string;
  specialized: string;
  rating: string;
  title: string;
  shortTitle: string;
  location: string;
  time: string;
  cancel?: boolean;
  done?: boolean;
}

const UPCOMINGDATA: UpcomingDataItem[] = [
  {
    desciption:
      'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
    imgDoctor: require('@assets/AppointmentList/Doctor.png'),
    doctorName: 'Dr. Ann Carlson',
    specialized: 'Cardiologist',
    rating: '5.0',
    title: 'The Advantages Of\nMinimal Repair Technique',
    shortTitle: 'Checking your healthcare',
    location: '949 Satterfield Fort Suite 520',
    time: '26 Jun, 16:00 - 17:00',
  },
  {
    desciption:
      'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
    imgDoctor: require('@assets/AppointmentList/Doctor1.png'),
    doctorName: 'Dr. Christian Vasquez',
    specialized: 'Cardiologist',
    rating: '5.0',
    title: 'The Advantages Of\nMinimal Repair Technique',
    shortTitle: 'Checking your healthcare',
    location: '949 Satterfield Fort Suite 520',
    time: '26 Jun, 16:00 - 17:00',
  },
];

const Upcoming = memo(() => {
  const [upcomingData, setUpcomingData] = useState(UPCOMINGDATA);

  const onCancel = () => {};
  const onReschedule = () => {};

  const { patient } = useAuth();

  const { data, isSuccess, isLoading, isError } = useGetAppointments(
    patient?.id,
  );

  const renderItem = useCallback(({ item }: { item: UpcomingDataItem }) => {
    const {
      desciption,
      imgDoctor,
      doctorName,
      specialized,
      rating,
      title,
      shortTitle,
      location,
      time,
      done,
      cancel,
    } = item;
    return (
      <AppointmentListItem
        desciption={desciption}
        imgDoctor={imgDoctor}
        doctorName={doctorName}
        specialized={specialized}
        rating={rating}
        title={title}
        shortTitle={shortTitle}
        location={location}
        time={time}
        done={done}
        cancel={cancel}
        onCancel={onCancel}
        onReschedule={onReschedule}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

export default Upcoming;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  contentContainerStyle: {
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(150)
        : scaleHeight(130),
    paddingBottom: scaleHeight(84),
  },
});
