import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { fontH3, fontH5 } from '../../../../../../utils/themeUtils';
import { useTranslation } from 'react-i18next';
import TextInputCustom from '@components/input/TextInputCustom';
import Icon from 'react-native-vector-icons/Feather';
import { Color } from '../../../../../../utils/GlobalStyles';
import fonts from '../../../../../../../src/utils/fonts';
import { ICodeableConcept } from '../../../../../../utils/domainEntities';
import { getMedicalSvg } from '@assets/medicalIcons';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import { useFetchMedicalFields } from '@screens/app/patient/search/filters/useFetchCodeableConcept';

interface Props {
  currentStep: number;
  stepLength: number;

  selected: ICodeableConcept;
  setSelected: (crt: ICodeableConcept) => void;
}

const DoctorProfession: React.FC<Props> = ({
  currentStep,
  stepLength,
  selected,
  setSelected,
}) => {
  const { t } = useTranslation();

  const { data, isSuccess, isLoading, isError } = useFetchMedicalFields();

  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    const filteredLocal = data?.filter((item, idx) =>
      item.display1.includes(search),
    );
    setFiltered(filteredLocal);
  }, [data, search]);

  return (
    <ScrollView style={styles.container}>
      <WizzardTitleAndStep
        title={t('header:applyAsDoctor:professionLabel')}
        currentStep={currentStep}
        stepLength={stepLength}
      />

      <View style={{ alignItems: 'center', marginVertical: scaleHeight(15) }}>
        <TextInputCustom
          label={t('header:search')}
          placeholder={t('header:search')}
          isEditable={true}
          value={search}
          iconRight="search"
          isMultiline
          onRawChangedText={(search) => {
            setSearch(search);
          }}
          onChangedText={(search) => {
            setSearch(search);
          }}
        />

        {filtered &&
          filtered.map((item: ICodeableConcept, idx: number) => {
            const isSelected =
              selected && selected.id && selected?.id === item?.id;
            return (
              <View
                key={idx}
                style={[
                  styles.rowItem,
                  isSelected ? styles.selected : styles.unselected,
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Selected profession:', item);
                    setSelected(item);
                  }}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {getMedicalSvg(item?.icon)}
                    <Text style={styles.textBlock}>{item?.display1}</Text>
                  </View>
                  <Icon
                    name={isSelected ? 'check-square' : 'square'}
                    size={16}
                    color={isSelected ? Color.main : Color.accent}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default DoctorProfession;

const styles = StyleSheet.create({
  container: {
    height: '60%',
  },

  headerLabel: {
    fontSize: fontH3,
    fontWeight: '600',
  },

  stepLabel: {
    fontSize: fontH5,
    marginTop: scaleHeight(5),
    color: '#83CDFA',
  },

  textBlock: {
    marginLeft: 10,
    fontFamily: fonts.URBANIST.Medium,
    fontSize: fontH5,
  },

  rowItem: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(5),
    borderRadius: scaleWidth(15),
    borderColor: Color.border,
    borderWidth: 1,
    marginBottom: scaleHeight(3),
    marginTop: scaleHeight(3),
  },
  selected: {
    borderRadius: scaleWidth(15),
    borderColor: Color.main,
    borderWidth: 1,
  },
  unselected: {},
});
