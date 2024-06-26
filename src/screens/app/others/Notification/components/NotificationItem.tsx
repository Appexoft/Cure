import { Text, TouchableOpacity } from 'react-native';
import SvgActive from '@assets/svgs/Notification/SvgActive';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '../../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { Color } from '../../../../../utils/GlobalStyles';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

interface PropsNotificationItem {
  id?: number;
  name?: string;
  des?: string;
  Svg?: any;
  active?: boolean;
  time?: string;
  follow?: boolean;
  reply?: boolean;
}

const NotificationItem = (props: PropsNotificationItem) => {
  const { id, name, des, Svg, active, time, follow, reply } = props;
  const activeStyle = props.active ? { opacity: 1 } : { opacity: 0.5 };

  return (
    <TouchableOpacity key={id} style={[styles.item, activeStyle]}>
      <Svg style={styles.avatar} />
      <Text style={styles.name}>
        {name} <Text style={styles.des}>{des}</Text>
      </Text>
      <Text style={styles.time}>{time}</Text>
      {follow && (
        <TouchableOpacity style={styles.btnFlow}>
          <Text style={styles.txtFlow}>follow</Text>
        </TouchableOpacity>
      )}
      {reply && (
        <TouchableOpacity style={styles.btnFlow}>
          <Text style={styles.txtReply}>reply</Text>
        </TouchableOpacity>
      )}
      {active && <SvgActive style={styles.svgActive} />}
    </TouchableOpacity>
  );
};

export default NotificationItem;

const styles = ScaledSheet.create({
  title: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(17),
    color: Color.main,
  },
  btnClose: {
    position: 'absolute',
    top: getStatusBarHeight() + scaleHeight(28),
    left: scaleWidth(16),
  },
  btnOption: {
    position: 'absolute',
    top: getStatusBarHeight() + scaleHeight(28),
    right: scaleWidth(16),
  },
  item: {
    marginHorizontal: scaleWidth(16),
    backgroundColor: Color.main,
    paddingLeft: scaleWidth(80),
    paddingTop: scaleHeight(20),
    paddingBottom: scaleHeight(16),
    borderRadius: scaleWidth(16),
    marginBottom: scaleHeight(16),
  },
  avatar: {
    position: 'absolute',
    top: scaleHeight(16),
    left: scaleWidth(16),
  },
  name: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(16),
    color: Color.semiBlack,
  },
  des: {
    fontWeight: '500',
    lineHeight: scaleHeight(25),
  },
  time: {
    fontSize: scaleHeight(14),
    fontFamily: FONTS.URBANIST.Regular,
    color: Color.dimgray,
    marginTop: scaleHeight(8),
    lineHeight: scaleHeight(20),
  },
  btnFlow: {
    width: scaleWidth(120),
    height: scaleHeight(40),
    borderRadius: scaleWidth(20),
    backgroundColor: 'rgba(105,121,248,0.1)',
    marginTop: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFlow: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(13),
    color: Color.blueAccent,
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  txtReply: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(13),
    color: Color.blueAccent,
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  svgActive: {
    position: 'absolute',
    top: scaleHeight(33),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(16),
    paddingBottom: getBottomSpace(),
  },
});
