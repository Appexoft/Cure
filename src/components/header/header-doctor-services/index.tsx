import React, { useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { commonStyles } from '../../../utils/styles/commonStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import { Color, Sizes } from '../../../utils/GlobalStyles';
import FONTS from '../../../utils/fonts';
import useAuth from '@screens/auth/authContext/useAuth';
import { getNameInitialsFromFhir } from '../../../utils/fhir/fhirTypes';
import Icon from 'react-native-vector-icons/Feather';
import { InterfaceType } from '../../../utils/entityUtils';

interface Props {
  title?: string;
  leftContent?: boolean;
  rightContent?: boolean;
  onLeftPress?: () => void;
}

export const HeaderDoctorServices: React.FC<Props> = ({
  title,
  leftContent,
  rightContent,
  onLeftPress,
}) => {
  // @ts-ignore
  const { patient, crtInterface } = useAuth();

  return (
    <View style={styles.header}>
      <SafeAreaView />
      <View style={styles.content}>
        <Text style={commonStyles.customHeaderTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: scaleHeight(105),
    backgroundColor: Color.headerBg,
    borderBottomLeftRadius: scaleWidth(15),
    borderBottomRightRadius: scaleWidth(15),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(10),
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  initials: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scaleWidth(5),
  },
  title: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(17),
    color: Color.white,
  },
  emptyState: {
    width: scaleWidth(55),
    height: scaleHeight(36),
  },
});
