import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { Color, FontSize, Padding } from '../../../../../../utils/GlobalStyles';
import { heightScreen, widthScreen } from '../../../../../../utils/dimensions';
import FONTS from '../../../../../../utils/fonts';
import { useFetchCities } from '@screens/app/patient/search/modals/chooseCity/useFetchCities';
import {ICity, NEARBY_LOCATION} from '../../../../../../utils/domainEntities';
import { SearchField } from '@components/SearchField';
import { HeaderSwitchAccount } from '@components/header/header-switch-account';
import { commonStyles } from '../../../../../../utils/styles/commonStyles';

interface Props {
  visible: boolean;
  toggleModal: any;
  setValue: (city: ICity) => void;
}

export const ModalChooseCity: React.FC<Props> = ({
  visible,
  toggleModal,
  setValue,
}) => {
  const { t } = useTranslation();

  const { data, isSuccess, isLoading, isError } = useFetchCities();

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTitle, setActiveTitle] = useState('');
  const [filteredData, setFilteredData] = useState([NEARBY_LOCATION]);
  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const filtered = data.filter((item: ICity) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData([NEARBY_LOCATION, ...filtered]);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredData([NEARBY_LOCATION, ...data]);
    }
  }, [data]);

  const renderListItem = (item: ICity) => {
    console.log('Rendering: ', item);
    let name = item?.item?.name;
    if (item?.item?.countryCode) {
      name = name + ' (' + item?.item?.countryCode + ')';
    }
    return (
      <Item
        toggleModal={toggleModal}
        item={item}
        img={null}
        title={name}
        activeTitle={activeTitle}
        setActiveTitle={setActiveTitle}
        setValue={(data: ICity) => {
          setValue(data?.item);
          if (toggleModal) {
            toggleModal();
          }
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={visible}
        style={{ height: heightScreen }}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.headerModal}>
              <HeaderSwitchAccount
                onLeftPress={() => toggleModal()}
                // goBack
                title={t('search:modal:selectCity')}
              />
            </View>
            <SearchField
              custom
              value={searchTerm}
              setValue={handleSearch}
              finishEditing={() => {}}
            />
            <FlatList
              data={filteredData}
              renderItem={renderListItem}
              keyExtractor={(item) => item?.id}
              style={styles.flatlist}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

interface ItemProps {
  item: ICity;
  title: string;
  toggleModal: () => void;
  img: React.ReactNode;
  activeTitle: string;
  setActiveTitle: any;
  setValue?: any;
}

const Item: React.FC<ItemProps> = ({
  item,
  title,
  img,
  toggleModal,
  activeTitle,
  setActiveTitle,
  setValue,
}) => {
  const isActive = activeTitle === title;
  const onPress = () => {
    setActiveTitle(isActive ? '' : title);
    setValue(item);
  };
  return (
    <TouchableOpacity
      style={isActive ? styles.inputAreaActive : styles.inputArea}
      onPress={onPress}>
      {img && <View style={styles.leftIcon}>{img}</View>}
      <Text style={[styles.searchField, commonStyles.ml5]}>{title}</Text>
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
