import React, { useCallback, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import FONTS from '../../../../../../utils/fonts';
import { Color } from '../../../../../../utils/GlobalStyles';
import moment from 'moment';

interface Props {
  time: Date;
  durationInMins: number;
  onChoose: (selected: Date) => void;
  active: boolean;
}

const TimeBookItem = (props: Props) => {
  const { time, active, onChoose } = props;
  const backgroundColor = active ? Color.black : Color.white;
  const textColor = active ? Color.white : Color.semiBlack;
  const [endDate, setEndDate] = useState(
    time
      ? moment(time).add(props.durationInMins, 'm').toDate()
      : moment(new Date()).add(props.durationInMins, 'm').toDate(),
  );

  const onPress = useCallback(() => {
    if (!onChoose || !time) {
      return;
    }
    onChoose(time);
  }, [time, onChoose]);

  const formatDate = () => {
    return (
      time.getHours() +
      (time.getMinutes() === 0 ? '' : ':' + time.getMinutes()) +
      '-' +
      endDate.getHours() +
      '' +
      (endDate.getMinutes() === 0 ? '' : ':' + endDate.getMinutes()) +
      ' ' +
      (endDate.getHours() < 12 ? 'am' : 'pm')
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.txtTime, { color: textColor }]}>{formatDate()}</Text>
    </TouchableOpacity>
  );
};
export default TimeBookItem;

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: scaleHeight(5),
    paddingTop: scaleHeight(6),
    paddingBottom: scaleHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(10),
    width: scaleWidth(104),
    marginBottom: scaleHeight(5),
    borderColor: Color.ghostwhite_200,
    borderWidth: scaleWidth(2),
    borderRadius: scaleWidth(12),
  },
  txtTime: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(24),
  },
});
