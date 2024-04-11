import React, { memo, useCallback, useState } from 'react';
import { View, FlatList, Platform, ImageSourcePropType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import DoctorItem from '@components/DoctorItem';
import keyExtractor from '../../../../../utils/keyExtractor';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ROUTES from '../../../../../utils/routes';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import FONTS from '../../../../../utils/fonts';

interface ListDoctorsDataItem {
  imgDoctor: ImageSourcePropType;
  doctorName: string;
  specialized: string;
  rating: string;
  location: string;
}

const LISTDOCTORSDATA: ListDoctorsDataItem[] = [
  {
    imgDoctor: require('@assets/ResultFindDoctor/01.png'),
    doctorName: 'Angel Manning',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/02.png'),
    doctorName: 'Jeremy Porter',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/03.png'),
    doctorName: 'Cecelia Boone',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/04.png'),
    doctorName: 'Jesse Burgess',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/01.png'),
    doctorName: 'Angel Manning',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
];

const ListAll = memo(({ navigation }) => {
  const [listDoctorsData, setListDoctorsData] = useState(LISTDOCTORSDATA);
  const [visible, setVisible] = useState(false);

  const onTouchOutside = useCallback(() => {
    setVisible(false);
  }, []);

  const onDoctorProfile = useCallback(() => {
    navigation.navigate(ROUTES.DoctorProfile);
  }, [navigation]);

  const onCallDoctor = useCallback(() => {
    navigation.navigate(ROUTES.CallDoctor);
  }, [navigation]);

  const onDoctorMessage = useCallback(() => {
    navigation.navigate(ROUTES.DoctorMessage);
  }, [navigation]);

  const onLocation = useCallback(() => {
    navigation.navigate(ROUTES.MapsDoctors);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }: { item: ListDoctorsDataItem }) => {
      const { imgDoctor, doctorName, specialized, rating, location } = item;
      return (
        <DoctorItem
          activeRemove={true}
          imgDoctor={imgDoctor}
          doctorName={doctorName}
          specialized={specialized}
          rating={rating}
          location={location}
          onRemove={() => setVisible(!visible)}
          onPress={onDoctorProfile}
          onCall={onCallDoctor}
          onMessage={onDoctorMessage}
          onLocation={onLocation}
        />
      );
    },
    [onDoctorProfile, onDoctorMessage, onCallDoctor, visible, onLocation],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listDoctorsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <ConfirmDialog
        dialogStyle={styles.dialogStyle}
        title="Delete Doctor"
        message="Do you want delele doctor
        Jose Holland on list?"
        visible={visible}
        messageStyle={styles.messageStyle}
        onTouchOutside={onTouchOutside}
        positiveButton={{
          title: 'Done',
          onPress: () => setVisible(false),
          style: styles.positiveButton,
          titleStyle: styles.txtPositiveButton,
        }}
        negativeButton={{
          title: 'Cancel',
          onPress: () => setVisible(false),
          style: styles.negativeButton,
          titleStyle: styles.txtNegativeButton,
        }}
      />
    </View>
  );
});
export default ListAll;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
    paddingRight: scaleWidth(24),
  },
  contentContainerStyle: {
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(150)
        : scaleHeight(130),
    paddingBottom: scaleHeight(84),
  },
  txtTitleAlert: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    color: Color.semiBlack,
  },
  dialogStyle: {
    width: scaleWidth(340),
    height: scaleHeight(190),
    borderRadius: scaleWidth(16),
    overflow: 'hidden',
    backgroundColor: Color.main,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: scaleHeight(25),
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.1,
  },
  messageStyle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.dimgray,
    textAlign: 'center',
    marginHorizontal: scaleWidth(50),
  },
  txtPositiveButton: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(14),
    color: Color.third,
    textAlign: 'center',
  },
  txtNegativeButton: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(14),
    color: Color.main,
    textAlign: 'center',
  },
  negativeButton: {
    backgroundColor: Color.third,
    height: scaleHeight(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  positiveButton: {
    backgroundColor: Color.main,
    height: scaleHeight(55),
  },
});
