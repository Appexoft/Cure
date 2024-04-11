import * as React from 'react';
import { memo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from '../../../../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';
import useGetAppointments from '@screens/app/doctor/home/components/homeAppointments/useGetAppointments';
import EmptySign from '@screens/app/common/emptySign';
import {
  IAppointment,
  IPractitioner,
} from '../../../../../../utils/domainEntities';
import AppointmentCardLarge from '@screens/app/common/cards/AppointmentCardLarge';

interface Props {
  practitioner: IPractitioner;

  handleViewAll: any;
  appointments: IAppointment[];
  appointmentsTotalItems: number;
  fetchAppointments: any;

  updateSuccess: boolean;
  loading: boolean;
  error: string;
}

export const HomeAppointmentsComponent = memo((props: Props) => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string>();
  const { practitioner, handleViewAll } = props;
  const { data, isSuccess, isLoading, isError } = useGetAppointments(
    practitioner?.id,
    !!(practitioner && practitioner.id),
  );
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
        {data && data.entries && data.entries.length > 0 ? (
          <FlatList
            data={data?.entries}
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

export default HomeAppointmentsComponent;
