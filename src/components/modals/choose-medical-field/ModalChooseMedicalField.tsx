import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import { Color, FontSize, Padding, Sizes } from '../../../utils/GlobalStyles';
import { heightScreen, widthScreen } from '../../../utils/dimensions';
import { SearchField } from '../../SearchField';
import { HeaderSwitchAccount } from '../../header/header-switch-account';
import ButtonPrimary from '../../btns/ButtonPrimary';
import FONTS from '../../../utils/fonts';
import {
  Birth,
  General,
  Heart,
  Kidneys,
  Legs,
  Lungs,
  Stomach,
  Tooth,
} from '@assets/svgs/icon-svg/categories';

import LocationArrowIcon from '@assets/svgs/icon-svg/LocationArrowIcon';
import HorizontalSlash from '@assets/svgs/icon-svg/HorizontalSlash';
import { useFetchMedicalFields } from '@screens/app/patient/search/filters/useFetchCodeableConcept';
import { ICodeableConcept } from '../../../utils/domainEntities';

interface Props {
  categoryModalVisible: boolean;
  toggleModal: any;
  toggleModalClear: any;
  setValueCategory?: string;
}

/**
 * @deprecated
 */
export const ModalChooseMedicalField: React.FC<Props> = ({
  categoryModalVisible,
  toggleModal,
  toggleModalClear,
  setValueCategory,
}) => {
  const { t } = useTranslation();

  const { data, isSuccess, isLoading, isError } = useFetchMedicalFields();

  const getIconForCodeableConcept = (iconName: string) => {
    switch (iconName) {
      case 'dental':
        return <Tooth />;
      case 'kidneys':
        return <Kidneys />;
      case 'heart':
        return <Heart />;
      case 'legs':
        return <Legs />;
      case 'tooth':
        return <Tooth />;
      case 'stomach':
        return <Stomach />;
      case 'birth':
        return <Birth />;
      case 'lungs':
        return <Lungs />;
    }

    return <General />;
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTitle, setActiveTitle] = useState('');
  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const filtered = DATA.filter((item: any) =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    // setFilteredData(filtered);
  };
  const renderListItem = ({ item }: ICodeableConcept) => {
    return (
      <Item
        toggleModal={toggleModal}
        img={getIconForCodeableConcept(item.icon)}
        title={item.display1}
        activeTitle={activeTitle}
        setActiveTitle={setActiveTitle}
        setValueCategory={setValueCategory}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={categoryModalVisible}
        style={{ height: heightScreen }}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.headerModal}>
              <HeaderSwitchAccount
                onLeftPress={() => toggleModal()}
                // goBack
                title={t('search:modal:selectCategoryType')}
              />
            </View>
            <SearchField custom value={searchTerm} setValue={handleSearch} />
            <FlatList
              data={data}
              renderItem={renderListItem}
              keyExtractor={(item) => item}
              style={styles.flatlist}
            />
            <View style={styles.bottomButtonsModal}>
              <ButtonPrimary
                style={styles.btnCancel}
                title={t('common:clear')}
                titleStyle={styles.txtCancel}
                onPress={toggleModalClear}
              />
              <TouchableOpacity onPress={toggleModal} style={styles.btnSelect}>
                <Text style={styles.txtSelect}>{t('common:select')}</Text>
                <LocationArrowIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

interface ItemProps {
  title: string;
  toggleModal: () => void;
  img: React.ReactNode;
  activeTitle: string;
  setActiveTitle: any;
  setValueCategory?: any;
}

const Item: React.FC<ItemProps> = ({
  title,
  img,
  toggleModal,
  activeTitle,
  setActiveTitle,
  setValueCategory,
}) => {
  const isActive = activeTitle === title;
  const onPress = () => {
    setActiveTitle(isActive ? '' : title);
    setValueCategory(isActive ? '' : title);
  };
  return (
    <TouchableOpacity
      style={isActive ? styles.inputAreaActive : styles.inputArea}
      onPress={onPress}>
      <View style={styles.leftIcon}>{img}</View>
      <Text style={styles.searchField}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: scaleHeight(12),
    paddingHorizontal: scaleWidth(23),
    paddingBottom: scaleHeight(28),
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: scaleHeight(50),
    marginLeft: scaleWidth(25),
    width: widthScreen,
  },
  inputArea: {
    width: scaleWidth(335),
    height: scaleHeight(50),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: scaleHeight(5),
    flexDirection: 'row',
  },
  inputAreaActive: {
    width: scaleWidth(335),
    height: scaleHeight(50),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: scaleHeight(5),
    flexDirection: 'row',
    backgroundColor: Color.main,
  },
  searchField: {
    color: Color.text,
    fontSize: FontSize.fontH4,
  },
  leftIcon: {
    marginHorizontal: scaleWidth(15),
    width: scaleWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Color.white,
    borderRadius: scaleWidth(10),
    padding: scaleHeight(12),
    alignItems: 'center',
    height: heightScreen,
    width: widthScreen,
  },
  headerModal: {
    height: scaleHeight(100),
    width: widthScreen,
    backgroundColor: Color.headerBg,
    marginTop: scaleHeight(-12),
    marginBottom: scaleHeight(12),
    borderBottomLeftRadius: scaleHeight(15),
    borderBottomRightRadius: scaleHeight(15),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomButtonsModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthScreen,
    paddingHorizontal: scaleWidth(22),
    marginBottom: scaleHeight(30),
    height: scaleHeight(40),
  },
  flatlist: {
    marginTop: scaleHeight(5),
  },
  btnCancel: {
    width: scaleWidth(100),
    height: scaleHeight(40),
    backgroundColor: Color.white,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnSelect: {
    width: scaleWidth(220),
    height: scaleHeight(40),
    backgroundColor: Color.main,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtCancel: {
    textTransform: 'uppercase',
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.primaryNeutral600,
  },
  txtSelect: {
    textTransform: 'uppercase',
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH6,
    color: Color.white,
    marginRight: scaleWidth(10),
  },
});
