import React, { memo } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../../utils/routes';
import SvgEntryPage from '@assets/svgs/SvgEntryPage';
import SvgHealer from "@assets/svgs/Splash/SvgHealer";

const EntryPage = memo(() => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate(ROUTES.SignIn);
  }, 2000);

  return (
    <View style={styles.container}>
      <SvgHealer />
    </View>
  );
});

export default EntryPage;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
