import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../../../../utils/size';
import { Color } from '../../../../../../../../../utils/GlobalStyles';
import { fontH3, fontH5 } from '../../../../../../../../../utils/themeUtils';
import fonts from '../../../../../../../../../utils/fonts';
import { useDispatch } from 'react-redux';
import MedicalCategoryAndSubcategory from '@screens/app/common/dropdowns/medicalCategoryAndSubcategory/index';
import { ICodeableConcept } from '../../../../../../../../../utils/domainEntities';

interface IProps {
  selectedCategory: ICodeableConcept;
  setSelectedCategory: (value: ICodeableConcept) => void;

  selectedSubCategory: ICodeableConcept;
  setSelectedSubCategory: (value: ICodeableConcept) => void;

  currentStep: number;
  stepLength: number;
}

const ChooseProfessions: React.FC<IProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  currentStep,
  stepLength,
}) => {
  const { t } = useTranslation();
  return (
    <View>
      <WizzardTitleAndStep
        title={t('header:applyAsDoctor:professionLabel')}
        currentStep={currentStep + 1}
        stepLength={stepLength}
      />
      <View style={{ marginVertical: scaleHeight(5) }}>
        <MedicalCategoryAndSubcategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
        />
      </View>
    </View>
  );
};

export default ChooseProfessions;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(20),
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

  parentBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  parentBlockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textBlock: {
    marginLeft: 10,
    fontFamily: fonts.URBANIST.Medium,
    fontSize: fontH5,
  },

  professionBlock: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: scaleHeight(5),
    borderRadius: scaleWidth(15),
    borderColor: Color.border,
    borderWidth: 1,
    marginBottom: scaleHeight(5),
  },
});
