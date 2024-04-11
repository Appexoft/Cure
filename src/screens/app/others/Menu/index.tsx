import React, { memo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FONTS from '../../../../utils/fonts';
import ROUTES from '../../../../utils/routes';
import { Color } from '../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import SvgHoverLine from '@assets/svgs/Menu/SvgHoverLine';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import SvgAvatar from '@assets/svgs/Menu/SvgAvatar';

const SCREENS = [
  'Home',
  'Drugs',
  'Doctors',
  'Services',
  'Dashboard',
  'Profile',
  'News Healthly',
  'Log out',
];

const DATAUSER = {
  avatar: require('@assets/Menu/Avatar.png'),
  userName: 'Oscar Barrett',
  balance: '$1,359.00',
};

const Menu = memo((props) => {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState(DATAUSER);
  const navigation = useNavigation();

  const onPress = (key: string) => {
    onNavigate(key);
  };

  const onNavigate = (key: string) => {
    switch (key) {
      case 'Home':
        navigation.navigate(ROUTES.Patient_HomePage);
        setIndex(0);
        break;
      case 'Drugs':
        navigation.navigate(ROUTES.Drugs);
        setIndex(1);
        break;
      case 'Doctors':
        navigation.navigate(ROUTES.Doctors);
        setIndex(2);
        break;
      case 'Services':
        navigation.navigate(ROUTES.Services);
        setIndex(3);
        break;
      case 'Dashboard':
        navigation.navigate(ROUTES.DashBoard);
        setIndex(4);
        break;
      case 'Profile':
        navigation.navigate(ROUTES.UserProfile);
        setIndex(5);
        break;
      case 'News Healthly':
        navigation.navigate(ROUTES.News);
        setIndex(6);
        break;
      case 'Log out':
        navigation.navigate(ROUTES.SignIn);
        break;
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <View style={styles.avatar}>
        <SvgAvatar />
      </View>
      <Text style={styles.txtName}>{user.userName}</Text>
      <Text style={styles.txtBalance}>Balance: {user.balance}</Text>
      {SCREENS.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={styles.btn}
            onPress={() => onPress(item)}>
            {index === key && <SvgHoverLine style={styles.svgHoverLine} />}
            <Text
              style={[
                styles.txt,
                {
                  color: index === key ? Color.third : Color.semiBlack,
                },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
});

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
  },
  btn: {
    height: scaleHeight(44),
    marginBottom: scaleHeight(20),
    justifyContent: 'center',
    paddingLeft: scaleWidth(40),
  },
  txt: {
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    fontFamily: FONTS.URBANIST.Medium,
    textTransform: 'uppercase',
  },
  txtBalance: {
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(22),
    color: Color.brown,
    fontFamily: FONTS.URBANIST.Regular,
    marginBottom: scaleHeight(44),
    marginLeft: scaleWidth(40),
  },
  txtName: {
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    fontWeight: '600',
    color: Color.accent1,
    fontFamily: FONTS.URBANIST.SemiBold,
    textTransform: 'uppercase',
    marginTop: scaleHeight(9),
    letterSpacing: 0.5,
    marginLeft: scaleWidth(40),
  },
  svgHoverLine: {
    position: 'absolute',
    left: 0,
  },
  avatar: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(64),
    backgroundColor: Color.third,
    marginLeft: scaleWidth(40),
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(40)
        : scaleHeight(40),
  },
  svgFakeScreens: {
    position: 'absolute',
    right: 0,
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(103)
        : scaleHeight(103),
  },
});
