import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateInterval from '@components/time/DateInterval';
import {
  Border,
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../utils/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { getPageWidth, scaleWidth } from '../../../../utils/size';
import {
  AvatarSizeType,
  ImageEntityType,
  ImageType, InterfaceType,
} from '../../../../utils/entityUtils';
import Avatar from '@screens/app/common/avatar/Avatar';
import { getAddressesAsString } from '../../../../utils/fhir/fhirTypes';
import { ShortLine } from '@components/line/ShortLine';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import { useTranslation } from 'react-i18next';
import TwoButtons from '@components/btns/TwoButtons';
import {
  ACTION_SHEET_APPOINTMENT_ACCEPT,
  ACTION_SHEET_APPOINTMENT_DETAILS,
  IAppointment,
} from '../../../../utils/domainEntities';
import PriceLine from '@components/PriceLine';
import Fonts from '../../../../utils/fonts';
import { SheetManager } from 'react-native-actions-sheet';

type AppointmentHomeLargeProps = {
  resource: IAppointment;
};

const AppointmentCardLarge = ({ resource }: AppointmentHomeLargeProps) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const crtInterface = InterfaceType.DOCTOR;

  const goToDetail = () => {
    SheetManager.hide(ACTION_SHEET_APPOINTMENT_DETAILS);
    SheetManager.show(
      crtInterface === InterfaceType.PATIENT &&
        resource?.status === 'PENDING_APPROVAL_BY_PATIENT'
        ? ACTION_SHEET_APPOINTMENT_ACCEPT
        : crtInterface === InterfaceType.DOCTOR &&
          resource?.status === 'PENDING_APPROVAL_BY_DOCTOR'
        ? ACTION_SHEET_APPOINTMENT_ACCEPT
        : ACTION_SHEET_APPOINTMENT_DETAILS,
      {
        payload: resource,
      },
    );
  };
  const onCancel = () => {
    console.log('not implemented yet: todo');
  };

  const onReschedule = () => {
    console.log('not implemented yet: todo');
  };

  return (
    <View style={[styles.content]}>
      <TouchableOpacity onPress={goToDetail}>
        <View style={styles.photo}>
          <View style={[styles.photo, styles.ml8]}>
            <Avatar
              entityId={resource?.practitioner?.id}
              entityType={ImageEntityType.PRACTITIONER}
              type={ImageType.AVATAR_SMALL}
              size={AvatarSizeType.LIST_LARGE}
            />
          </View>

          <View style={styles.ml8}>
            <Text style={styles.title}>{resource?.nameText}</Text>
            <View style={[styles.photo, styles.mt8]}>
              <Text style={[styles.drAdamAnderson, styles.hrTypo]}>
                {resource?.practitioner?.nameText}
              </Text>
            </View>
            <Text style={[styles.text1, styles.mt8, styles.text1Typo]}>
              <PriceLine
                value={resource?.priceValue}
                currency={resource?.priceCurrency}
              />
            </Text>
          </View>
        </View>
        <View style={[styles.addressWrapper, styles.mt12]}>
          <View style={styles.addressWrapper1}>
            <View style={commonStyles.directionColumn}>
              <ShortLine
                icon={'navigation'}
                iconColor={Color.white}
                bgColorStyle={commonStyles.colorPastel7}
                text={getAddressesAsString(
                  resource?.practitioner?.mainAddress,
                  false,
                )}
              />
            </View>

            {resource?.startDate && resource?.endDate && (
              <DateInterval
                startDate={new Date(resource?.startDate)}
                endDate={new Date(resource?.endDate)}
              />
            )}
          </View>
          <View style={styles.status}>
            <View style={styles.done}>
              <Text style={[styles.done1, styles.text1Typo]}>Done</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

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

const styles = StyleSheet.create({
  content: {
    marginRight: scaleWidth(Margin.between_entries),
    width: scaleWidth(getPageWidth() - 60),
    borderRadius: Border.br_lg,
    backgroundColor: Color.white,
    borderStyle: 'solid',
    borderColor: '#efeff6',
    borderWidth: 1,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_md,
  },

  centerWrapper: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: 8,
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
  hrTypo: {
    fontWeight: '500',
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },
  text1Typo: {
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
  },
  title: {
    fontSize: FontSize.fontH4,
    lineHeight: 21,
    color: Color.darkslategray_300,
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
    fontWeight: '700',
    width: scaleWidth(200),
    flexWrap: 'wrap',
  },
  drAdamAnderson: {
    color: Color.colourAccent,
  },
  starIcon: {
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
  photo: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  text1: {
    color: Color.colourMain,
    fontFamily: Fonts.URBANIST.Regular,
    fontWeight: '700',
    lineHeight: 18,
    fontSize: FontSize.fontH5,
  },
  addressWrapper1: {
    justifyContent: 'space-between',
  },
  done1: {
    fontFamily: Fonts.URBANIST.Regular,
    color: Color.white,
  },
  done: {
    backgroundColor: Color.lightsteelblue_200,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_xs,
    flexDirection: 'row',
  },
  status: {
    display: 'none',
    alignItems: 'flex-end',
  },
  hr: {
    color: Color.lightgray_200,
  },
  addressWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    flexDirection: 'row',
    width: scaleWidth(250),
  },
});

export default AppointmentCardLarge;
