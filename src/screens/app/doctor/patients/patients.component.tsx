import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { Color } from '../../../../utils/GlobalStyles';
import {
  ACTION_SHEET_SWITCH_ACCOUNT,
  IPractitioner,
} from '../../../../utils/domainEntities';
import useAuth from '@screens/auth/authContext/useAuth';
import { scaleHeight } from '../../../../utils/size';
import { useNavigation } from '@react-navigation/native';
import { SheetManager } from 'react-native-actions-sheet';
import { HeaderSwitchAccount } from '@components/header/header-switch-account';
import { useFetchPatients } from '@screens/app/doctor/patients/useFetchPatients';
import Loading from '@screens/app/common/loading';
import Error from '@screens/app/common/error';
import EmptySign from '@screens/app/common/emptySign';
import PatientCard from '@screens/app/patient/detail/cards/patient/PatientCard';
import {commonStyles} from "../../../../utils/styles/commonStyles";

interface Props {
  practitioner: IPractitioner;
  updateSuccess: boolean;
  loading: boolean;
}

export const PatientsComponent = React.memo((props: Props) => {
  const { practitioner, loading } = props;
  const { t } = useTranslation('common');
  const { patient } = useAuth();
  const navigation = useNavigation();

  const { data, isSuccess, isLoading, isError } = useFetchPatients(
    practitioner?.id,
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error title={t('error:fetching:patients')} />;
  }
  return (
    <View style={{ flex: 1 }}>
      <HeaderSwitchAccount
        title={t('header:patients')}
        leftContent
        onLeftPress={() => {
          SheetManager.hide(ACTION_SHEET_SWITCH_ACCOUNT);
          SheetManager.show(ACTION_SHEET_SWITCH_ACCOUNT);
        }}
      />
      <View style={commonStyles.mt10}>
        {data &&
          ((data?.entries && data?.entries?.length === 0) || !data.entries) && (
            <EmptySign
              title={t('search:emptyCommon:title')}
              subtitle={t('search:emptyResults:patients')}
            />
          )}

        <FlatList
          showsVerticalScrollIndicator={true}
          data={data?.entries}
          keyExtractor={(item) => `${item?.id}`}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.row}>
                <PatientCard resource={item} navigation={navigation} />
              </View>
            );
          }}
        />
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
});

export default PatientsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  row: {},
  contents: {
    width: '100%',
    height: '100%',
    zIndex: -1,
    marginTop: scaleHeight(50),
  },
});
