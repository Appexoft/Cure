import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts';
import SvgLocation from '@assets/svgs/SvgLocation';
import SvgStar from '@assets/svgs/AppointmentList/SvgStar';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import SvgDelete from '@assets/svgs/SvgDelete';

interface PropsDoctorItem {
  style?: ViewStyle;
  imgDoctor?: any;
  doctorName?: string;
  specialized?: string;
  rating?: string;
  location?: string;
  onCall?: any;
  onMessage?: any;
  activeRemove?: boolean;
  onRemove?: any;
  onPress?: any;
  onLocation?: any;
}

const DoctorItem = (props: PropsDoctorItem) => {
  const {
    style,
    imgDoctor,
    doctorName,
    specialized,
    rating,
    location,
    onCall,
    onMessage,
    activeRemove,
    onRemove,
    onPress,
    onLocation,
  } = props;

  const buttonDelete = (
    x: number,
    progress: Animated.AnimatedInterpolation,
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    return (
      <Animated.View
        style={[styles.btnDeleteView, { transform: [{ translateX: trans }] }]}>
        <SvgDelete />
      </Animated.View>
    );
  };

  const renderRightActions = (progress: Animated.AnimatedInterpolation) => {
    return (
      <TouchableOpacity
        onPress={onRemove}
        activeOpacity={0.6}
        style={styles.buttonStyle}>
        {buttonDelete(scaleWidth(96), progress)}
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      friction={2}
      rightThreshold={40}
      enabled={activeRemove}
      renderRightActions={(e) => renderRightActions(e)}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={[styles.doctorItem, style]}>
        <Image style={styles.imgDoctor} source={imgDoctor} />
        <View style={styles.rateView}>
          <Text style={styles.txtDoctorName}>{doctorName}</Text>
          <View style={styles.setRow}>
            <SvgStar style={styles.svgStart} />
            <Text style={styles.txtRating}>{rating}</Text>
          </View>
        </View>
        <Text style={styles.txtSpecialized}>{specialized}</Text>
        <TouchableOpacity
          onPress={onLocation}
          activeOpacity={0.6}
          style={styles.locationView}>
          <SvgLocation color={Color.dimgray} />
          <Text style={styles.txtLocation}> {location}</Text>
        </TouchableOpacity>
        <View style={styles.btnView}>
          <ButtonPrimary
            style={styles.btnCall}
            title={'Call'}
            titleStyle={styles.txtBtnCall}
            onPress={onCall}
          />
          <ButtonPrimary
            style={styles.btnMessage}
            titleStyle={styles.txtBtnMessage}
            title={'Message'}
            onPress={onMessage}
          />
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default DoctorItem;

const styles = StyleSheet.create({
  doctorItem: {
    paddingVertical: scaleHeight(16),
    backgroundColor: Color.main,
    borderRadius: scaleWidth(8),
    paddingLeft: scaleWidth(88),
    paddingRight: scaleWidth(16),
    height: scaleHeight(141),
    width: scaleWidth(327),
    marginBottom: scaleHeight(16),
    marginLeft: scaleWidth(24),
  },
  imgDoctor: {
    width: scaleWidth(56),
    height: scaleWidth(56),
    borderRadius: scaleWidth(56),
    overflow: 'hidden',
    position: 'absolute',
    top: scaleHeight(16),
    left: scaleWidth(16),
  },
  txtDoctorName: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    fontWeight: '500',
    color: Color.semiBlack,
    textTransform: 'uppercase',
  },
  txtSpecialized: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    fontWeight: '500',
    color: Color.silverChalice,
    marginTop: scaleHeight(4),
    marginBottom: scaleHeight(4),
  },
  locationView: {
    flexDirection: 'row',
    height: scaleHeight(26),
  },
  txtLocation: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.brown1,
    marginBottom: scaleHeight(-6),
    marginLeft: scaleWidth(4),
  },
  txtRating: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    color: Color.orange,
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scaleWidth(-1),
  },
  svgStart: {
    marginBottom: scaleHeight(1),
    marginRight: scaleWidth(5),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnCall: {
    width: scaleWidth(104),
    height: scaleHeight(32),
    backgroundColor: Color.pageBackground,
  },
  txtBtnCall: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: Color.silverChalice,
    fontSize: scaleHeight(14),
  },
  btnMessage: {
    fontSize: scaleHeight(14),
    width: scaleWidth(103),
    height: scaleHeight(32),
    backgroundColor: Color.secondBlue,
  },
  txtBtnMessage: {
    fontWeight: '500',
    textTransform: 'capitalize',
    color: Color.secondBlue,
    fontSize: scaleHeight(14),
  },
  btnDeleteView: {
    flex: 1,
    backgroundColor: Color.secondRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: scaleWidth(96),
    height: scaleHeight(141),
  },
});
