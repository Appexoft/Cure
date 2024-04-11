import CalendarIcon from '@assets/svgs/icon-svg/CalendarIcon';
import React from 'react';
import { View, Text } from 'react-native';
import {
  getDatePretty,
  getHoursIntervalPretty,
} from '../../utils/fhir/fhirTypes';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, FontSize } from '../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../utils/size';
import fonts from '../../utils/fonts';
import { useTranslation } from 'react-i18next';

interface IProps {
  startDate: Date;
  endDate: Date;
  title?: string;
}

const TimeCard: React.FC<IProps> = ({ startDate, endDate, title }) => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        marginTop: scaleHeight(8),
        marginHorizontal: scaleWidth(15),
        paddingVertical: scaleHeight(8),
        paddingHorizontal: scaleWidth(8),
        borderRadius: scaleWidth(16),
        borderWidth: scaleWidth(1),
        borderColor: Color.border,
      }}>
      {title && <Text style={{ paddingBottom: 5 }}>{t(title)}</Text>}
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.svgView}>
            <CalendarIcon />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {getDatePretty(startDate ? new Date(startDate) : null)}
            </Text>
            <Text style={styles.dateText}>
              {getHoursIntervalPretty(
                startDate ? new Date(startDate) : null,
                endDate ? new Date(endDate) : null,
              )}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimeCard;

const styles = ScaledSheet.create({
  svgView: {
    backgroundColor: Color.pastel1,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  dateContainer: {
    marginLeft: scaleWidth(10),
    height: scaleWidth(48),
    justifyContent: 'space-around',
    paddingVertical: scaleHeight(5),
  },
  dateText: {
    fontFamily: fonts.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.darkslateblue_200,
  },
});
