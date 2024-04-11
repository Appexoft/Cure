import React, { memo, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import SvgClose from '@assets/svgs/Notification/SvgClose';
import SvgOption from '@assets/svgs/Notification/SvgOption';
import SvgClient1 from '@assets/svgs/Notification/SvgClient1';
import SvgClient2 from '@assets/svgs/Notification/SvgClient2';
import SvgClient3 from '@assets/svgs/Notification/SvgClient3';
import keyExtractor from '../../../../utils/keyExtractor';
import FONTS from '../../../../utils/fonts';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { Color } from '../../../../utils/GlobalStyles';
import NotificationItem from '@screens/app/others/Notification/components/NotificationItem';

interface NotificationDataItem {
  id: number;
  name: string;
  description: string;
  svg: JSX.Element;
  active?: boolean;
  time: string;
  follow?: boolean;
  reply?: boolean;
}

const DATANOTIS: NotificationDataItem[] = [
  {
    id: 0,
    name: 'Luke Casey',
    description: ' rate your work 5* \n' + '“Healer patient app UI KIT”',
    svgHeaderImage: <SvgClient1 />,
    active: true,
    time: '48 mins ago',
  },
  {
    id: 1,
    name: 'Luella Norton',
    description: 'follow you',
    svgHeaderImage: <SvgClient2 />,
    active: true,
    time: '6 hours ago',
    follow: true,
  },
  {
    id: 2,
    name: 'Dr. Luella Norton',
    description: 'send you in a comment in post ',
    svgHeaderImage: <SvgClient3 />,
    active: true,
    reply: true,
    time: '2 days ago',
  },
  {
    id: 3,
    name: 'Dr. Luke Casey',
    description: 'acceptn your book appointment ',
    svgHeaderImage: <SvgClient1 />,
    time: '48 mins ago',
  },
  {
    id: 5,
    name: 'Luke Casey',
    description: 'like your project \n' + '“Healer patient app UI KIT”',
    svgHeaderImage: <SvgClient1 />,
    time: '48 mins ago',
  },
];

const Notification = memo(({ navigation }) => {
  const [notificationData, setNotificationData] = useState(DATANOTIS);

  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onOption = useCallback(() => {}, []);

  const renderItem = useCallback(({ item }: { item: NotificationDataItem }) => {
    const { svg, name, description, reply, time, follow, active, id } = item;
    return (
      <NotificationItem
        id={id}
        name={name}
        des={description}
        Svg={svg}
        active={active}
        time={time}
        follow={follow}
        reply={reply}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Notification</Text>
        <TouchableOpacity
          onPress={onClose}
          activeOpacity={0.6}
          style={styles.btnClose}>
          <SvgClose />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onOption}
          activeOpacity={0.6}
          style={styles.btnOption}>
          <SvgOption />
        </TouchableOpacity>
      </View>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={notificationData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});
export default Notification;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  header: {
    backgroundColor: Color.main,
    borderBottomLeftRadius: scaleWidth(24),
    borderBottomRightRadius: scaleWidth(24),
    height:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(72)
        : scaleHeight(72),
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    color: Color.semiBlack,
  },
  btnClose: {
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(28)
        : scaleHeight(28),
    left: scaleWidth(16),
  },
  btnOption: {
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(28)
        : scaleHeight(28),
    right: scaleWidth(16),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(16),
    paddingBottom: getBottomSpace(),
  },
});
