import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AppointmentCardLarge from '@screens/app/common/cards/AppointmentCardLarge';
import {
  Margin,
  FontSize,
  Color,
  FontFamily,
  Padding,
} from '../../../../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { getAppointments } from '../../../../../../containers/sheets/appointments/RescheduleApointment/reducer';
import useAuth from '@screens/auth/authContext/useAuth';
import EmptySign from '@screens/app/common/emptySign';
import { IAppointment } from '../../../../../../utils/domainEntities';
import { connect } from 'react-redux';

interface Props {
  appointments: any[];
  getAppointments: (id: any) => void;
  handleViewAll: () => void;
}

const HomeAppointments: React.FC<Props> = ({
  appointments,
  getAppointments,
  handleViewAll,
}) => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string>();
  const { patient } = useAuth();

  React.useEffect(() => {
    getAppointments(patient?.id);
  }, [patient?.id]);

  const renderItem = ({ item }: { item: IAppointment }) => {
    return <AppointmentCardLarge resource={item} />;
  };

  return (
    <View style={styles.mt10}>
      <View style={styles.upcomingAppointments1}>
        <Text style={styles.title}>{t('common:upcomingAppointments')}</Text>
        <View style={styles.additionalButton}>
          <Text onPress={handleViewAll} style={styles.text}>
            {t('common:viewAll')}
          </Text>
        </View>
      </View>
      <View style={[styles.allAppointments, styles.mt10]}>
        {appointments && appointments.length > 0 ? (
          <FlatList
            data={appointments}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            horizontal={true}
          />
        ) : (
          <EmptySign
            title={t('patient:appointments:noAppointments')}
          />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  appointments: state.app.patient.appointments.appointments.items,
});

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  mt10: {
    marginTop: Margin.m_xs,
  },
  title: {
    fontSize: FontSize.fontH3,
    lineHeight: 24,
    fontWeight: '700',
    color: Color.systemColorsBackgroundBlackPrimary1,
    textAlign: 'left',
    fontFamily: FontFamily.textInputError1,
  },
  text: {
    fontSize: FontSize.fontH5,
    lineHeight: 18,
    fontWeight: '500',
    color: Color.colourAccent,
    textAlign: 'center',
    fontFamily: FontFamily.textInputError1,
  },
  additionalButton: {
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_md,
    paddingBottom: Padding.p_xl,
    flexDirection: 'row',
  },
  upcomingAppointments1: {
    width: 359,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  allAppointments: {
    flexDirection: 'row',
  },
});

export default connect(mapStateToProps, {
  getAppointments,
})(HomeAppointments);
