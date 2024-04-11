import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  RegisteredStyle,
} from 'react-native';
import FONTS from '../../../../../utils/fonts';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import SvgSpeechBubble from '@assets/svgs/NewsDetails/SvgSpeechBubble';
import SvgPhone from '@assets/svgs/MapsDoctors/SvgPhone';
import SvgStar from '@assets/svgs/AppointmentList/SvgStar';
import SvgLocation from '@assets/svgs/SvgLocation';

interface LocationViewProps {
  style?: ViewStyle | RegisteredStyle<any>;
  Svg?: any;
  doctorName?: string;
  specialized?: string;
  rating?: string;
  location?: string;
  onCall?: any;
  onMessage?: any;
}

const LocationView = memo((props: LocationViewProps) => {
  const {
    style,
    Svg,
    doctorName,
    specialized,
    rating,
    location,
    onCall,
    onMessage,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topView}>
        <View style={styles.imgDoctor}>{Svg}</View>
        <View style={styles.contentView}>
          <Text style={styles.txtDoctorName}>{doctorName}</Text>
          <View style={styles.setRow}>
            <Text style={styles.txtSpecialized}>{specialized}</Text>
            <View style={styles.flexDirection}>
              <SvgStar style={styles.svgStart} />
              <Text style={styles.txtRating}>{rating}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.locationView}>
        <SvgLocation width={16} height={16} color={Color.third} />
        <Text style={styles.txtLocation}>{location}</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={onCall}
          activeOpacity={0.6}
          style={styles.btnCall}>
          <SvgPhone />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onMessage}
          activeOpacity={0.6}
          style={styles.btnMessage}>
          <SvgSpeechBubble width={16} height={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default LocationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    width: scaleWidth(240),
    height: scaleHeight(152),
    borderRadius: scaleWidth(8),
    overflow: 'hidden',
  },
  textLocation: {
    fontSize: 16,
    fontFamily: FONTS.URBANIST.Regular,
    color: '#353B48',
    lineHeight: 20,
    marginTop: 8,
  },
  btnView: {
    position: 'absolute',
    width: '100%',
    backgroundColor: Color.main,
    height: scaleHeight(40),
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: Color.line,
    flexDirection: 'row',
  },
  btnMessage: {
    width: '50%',
    backgroundColor: Color.main,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCall: {
    width: '50%',
    backgroundColor: Color.third,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDoctor: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtDoctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    fontWeight: '500',
    color: Color.semiBlack,
    textTransform: 'uppercase',
    paddingRight: scaleWidth(16),
  },
  txtSpecialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    fontWeight: '500',
    color: Color.silverChalice,
    marginTop: scaleHeight(4),
    marginBottom: scaleHeight(4),
  },
  svgStart: {
    marginRight: scaleWidth(5),
  },
  txtRating: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    color: Color.orange,
  },
  topView: {
    flexDirection: 'row',
    marginTop: scaleHeight(16),
    marginLeft: scaleWidth(16),
  },
  contentView: {
    marginTop: scaleHeight(4),
    marginLeft: scaleWidth(8),
    flex: 1,
    paddingRight: scaleWidth(16),
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleHeight(6),
    marginLeft: scaleWidth(16),
  },
  txtLocation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.third,
    marginBottom: scaleHeight(-6),
    marginLeft: scaleWidth(4),
  },
});
