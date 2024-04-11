import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../../../../utils/size';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import TextInputCustom from '@components/input/TextInputCustom';
import { useTranslation } from 'react-i18next';
import { fontH3 } from '../../../../../../../../../utils/themeUtils';
import ROUTES from '../../../../../../../../../utils/routes';
import {
  IOrganization,
  IPractitioner,
  TableSearchDto,
} from '../../../../../../../../../utils/domainEntities';
import EmptySign from '@screens/app/common/emptySign';
import HospitalCard from '@screens/app/patient/detail/cards/hospital/HospitalCard';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import NavigationService from '@navigation/common/NavigationService';
import Loading from '@screens/app/common/loading';

interface IProps {
  practitioner: IPractitioner;

  allHospitals: IOrganization;
  allHospitalsTotalItems: number;
  selectedHospital: IOrganization;
  setSelectedHospital: (crt: IOrganization) => void;
  fetchAllHospitals: (data: TableSearchDto) => void;

  loading: boolean;
  currentStep: number;
  stepLength: number;
  navigation: any;
}

const HospitalListComponent: React.FC<IProps> = ({
  practitioner,
  fetchAllHospitals,
  allHospitals,
  allHospitalsTotalItems,
  selectedHospital,
  setSelectedHospital,
  loading,
  currentStep,
  stepLength,
  navigation,
}) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState<string>('');

  const handleSelectHospital = (value: IOrganization) => {
    console.log('Selected hospital', value);
    setSelectedHospital(value);
  };

  const handleAddHospital = () => {
    setSearch('');
    setTimeout(() => {
      navigation.navigate(ROUTES.Doctor_Services_Create_Work_Location);
    }, 300);
  };

  /**
   * Will search when the search term changes
   */
  useEffect(() => {
    if (practitioner && practitioner.id && fetchAllHospitals) {
      let data: TableSearchDto = {
        sortBy: [{ id: 'nameText', desc: true }],
        filters:
          search && search.length > 0
            ? [{ id: 'nameText', value: search }]
            : [],
        byEntity: {},
        pageSize: 999999,
        pageIndex: 0,
      };
      fetchAllHospitals(data);
    }
  }, [fetchAllHospitals, practitioner, search]);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: scaleHeight(20) }}>
        <WizzardTitleAndStep
          title={t('services:workLocation')}
          currentStep={currentStep + 1}
          stepLength={stepLength}
        />
      </View>

      <View>
        <TextInputCustom
          fullSize
          placeholder={t('services:workLocationInputPlaceholder')}
          label={t('services:workLocationInputLabel')}
          value={search ?? ''}
          iconRight="search"
          onChangedText={(text) => setSearch(text)}
          onRawChangedText={(text) => setSearch(text)}
        />
      </View>

      <View>
        {loading ? (
          <Loading />
        ) : (
          <>
            {allHospitals?.length ? (
              <View>
                <FlatList
                  data={allHospitals}
                  keyboardShouldPersistTaps="always"
                  renderItem={(item: any) => {
                    return (
                      <View style={{ marginTop: scaleHeight(3) }}>
                        <HospitalCard
                          resource={item?.item}
                          navigation={navigation}
                          ignorePress={true}
                          isSelected={item?.item?.id === selectedHospital?.id}
                          onPress={(value: IOrganization) =>
                            handleSelectHospital(value)
                          }
                        />
                      </View>
                    );
                  }}
                />
              </View>
            ) : (
              <View
                style={{ paddingHorizontal: 25, marginTop: scaleHeight(100) }}>
                <EmptySign
                  title={t('search:emptyCommon:title')}
                  subtitle={t('search:emptyResults:createHospital')}
                  buttonOnPress={handleAddHospital}
                  buttonTitle={t('common:addNew')}
                />
              </View>
            )}
          </>
        )}
      </View>
      <View style={styles.containerCreate}>
        <ButtonPrimary
          style={styles.btnCreate}
          title={t('search:emptyResults:notFoundAddNew')}
          onPress={() => {
            console.log('notFoundAddNew');
            NavigationService.navigate(
              ROUTES.Doctor_Services_Create_Work_Location,
              [],
            );
          }}
        />
      </View>
    </View>
  );
};
export default HospitalListComponent;

// --------------- STYLES

const styles = StyleSheet.create({
  container: {
    height: '95%',
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    // marginBottom: scaleHeight(30),
    marginTop: scaleHeight(30),
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
  containerCreate: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: scaleHeight(60),
  },
  btnCreate: {
    // marginTop: scaleHeight(10),
    width: scaleWidth(170),
  },

  infoText: {
    fontSize: fontH3,
    marginTop: scaleHeight(30),
    marginBottom: scaleHeight(30),
  },
});
