import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import AppointmentsTabNav from '@screens/app/patient/appointments/AppointmentsTabNav';
import { ScaledSheet } from 'react-native-size-matters';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '../../../../../utils/routes';

const AppointmentList = memo(({ navigation }) => {
  const onCreateAppointment = useCallback(() => {
    navigation.navigate(ROUTES.CreateAppointment);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AppointmentsTabNav upcoming={2} past={14} />
      <ButtonPrimary
        onPress={onCreateAppointment}
        title={'Book Appointment'}
        style={styles.buttonPrimary}
      />
    </View>
  );
});

export default AppointmentList;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  buttonPrimary: {
    width: scaleWidth(297),
    alignSelf: 'center',
    marginBottom: getBottomSpace() + scaleHeight(8),
  },
});
