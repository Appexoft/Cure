import React from 'react';
import { useTranslation } from 'react-i18next';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import useAuth from '@screens/auth/authContext/useAuth';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight } from '../../../../../utils/size';

interface Props {}

export const OnboardStatusComponent = React.memo((props: Props) => {
  const { loading } = props;

  const { patient } = useAuth();
  const navigation = useNavigation();
  const { t } = useTranslation('common');

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.contents]}>
        <Text>
          Your application has not yet been confirmed.
        </Text>
      </View>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
});
export default OnboardStatusComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  contents: {
    width: '100%',
    height: '100%',
    zIndex: -1,
    marginTop: scaleHeight(50),
  },
});
