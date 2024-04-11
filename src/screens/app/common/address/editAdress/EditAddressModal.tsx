import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import ArrowUp from '@assets/svgs/icon-svg/ArrowUp';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { useTranslation } from 'react-i18next';
import { ScaledSheet } from 'react-native-size-matters';

const EditAddressModals = ({
  updateUserAddress,
  street,
  setStreet,
  number,
  setNumber,
  additionalDetails,
  setAdditionalDetails,
  city,
  setCity,
  postalCode,
  setPostalCode,
  state,
  setState,
  country,
  setCountry,
  TextInputCustomWithDefault,
  currentAddress,
  updateAndNavigateBack,
}) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const { t } = useTranslation();

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const handleUpdateUserAddress = () => {
    actionSheetRef.current?.hide();
    updateUserAddress();
  };

  return (
    <View
      style={{
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'transparent',
      }}>
      <View style={styles.smallModalAddress}>
        <TouchableOpacity
          style={styles.boxTitleAddress}
          onPress={openActionSheet}>
          <View style={styles.slideUpBox}>
            <ArrowUp />
            <Text style={styles.slideUp}>Click here to edit location</Text>
          </View>

          <Text style={styles.titleAddress}>{currentAddress} </Text>
        </TouchableOpacity>
        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            titleStyle={styles.btnSave}
            onPress={updateAndNavigateBack}
            title={t('common:save')}
          />
        </View>
      </View>

      <ActionSheet
        ref={actionSheetRef}
        bounceOnOpen={true}
        gestureEnabled={true}
        initialOffsetFromBottom={0.1}>
        <View style={styles.actionSheetModal}>
          <View style={[styles.container, styles.centeredContainer]}>
            <View style={styles.rowContainer}>
              <TextInputCustomWithDefault
                halfWidth
                label={t('account:addressInformation:street')}
                placeholder={t('account:addressInformation:street')}
                style={styles.cityBox}
                isEditable={true}
                value={street}
                iconRight="edit-3"
                isMultiline
                onRawChangedText={setStreet}
                onChangedText={setStreet}
              />

              <TextInputCustomWithDefault
                halfWidth
                label={t('account:addressInformation:number')}
                placeholder={t('account:addressInformation:number')}
                isEditable={true}
                value={number}
                iconRight="edit-3"
                isMultiline
                onRawChangedText={setNumber}
                onChangedText={setNumber}
              />
            </View>
            <TextInputCustomWithDefault
              label={t('account:addressInformation:additionalDetails')}
              placeholder={t('account:addressInformation:additionalDetails')}
              isEditable={true}
              value={additionalDetails}
              iconRight="edit-3"
              isMultiline
              onRawChangedText={setAdditionalDetails}
              onChangedText={setAdditionalDetails}
            />

            <View style={styles.rowContainer}>
              <TextInputCustomWithDefault
                halfWidth
                label={t('account:addressInformation:city')}
                placeholder={t('account:addressInformation:city')}
                isEditable={true}
                value={city}
                style={styles.cityBox}
                iconRight="edit-3"
                isMultiline
                onRawChangedText={setCity}
                onChangedText={setCity}
              />

              <TextInputCustomWithDefault
                halfWidth
                label={t('account:addressInformation:postalCode')}
                placeholder={t('account:addressInformation:postalCode')}
                isEditable={true}
                value={postalCode}
                iconRight="edit-3"
                isMultiline
                onRawChangedText={setPostalCode}
                onChangedText={setPostalCode}
              />
            </View>

            <TextInputCustomWithDefault
              label={t('account:addressInformation:state')}
              placeholder={t('account:addressInformation:state')}
              isEditable={true}
              value={state}
              iconRight="edit-3"
              onChangedText={setState}
              isMultiline
              onRawChangedText={setState}
            />

            <TextInputCustomWithDefault
              label={t('account:addressInformation:country')}
              placeholder={t('account:addressInformation:country')}
              isEditable={true}
              value={country}
              iconRight="edit-3"
              isMultiline
              onRawChangedText={setCountry}
              onChangedText={setCountry}
            />
          </View>
          <View style={styles.btnViewStyle}>
            <ButtonPrimary
              titleStyle={styles.btnSave}
              onPress={handleUpdateUserAddress}
              title={t('common:save')}
            />
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = ScaledSheet.create({
  slideUp: {
    color: '#03A9F4',
    paddingLeft: 4,
  },
  titleAddress: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    alignItems: 'center',
  },
  smallModalAddress: {
    height: 175,
    marginBottom: scaleHeight(50),
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(30),
    backgroundColor: '#FFF',
    zIndex: 30,
    width: '100%',
    borderRadius: scaleWidth(20),
    justifyContent: 'center',
  },
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#FFF',
  },
  centeredContainer: {
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  cityBox: {
    marginRight: scaleWidth(10),
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    alignSelf: 'center',
    marginBottom: scaleHeight(30),
  },
  btnSave: {
    textTransform: 'capitalize',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '75%',
  },
  textInput: {
    alignSelf: 'stretch',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
  },
  actionSheetModal: {
    height: 500,
    backgroundColor: '#FFF',
    paddingTop: 25,
  },
  boxTitleAddress: {
    marginTop: scaleHeight(20),
    marginHorizontal: scaleWidth(20),
  },
  slideUpBox: {
    flexDirection: 'row',
    padding: 5,
  },
});

export default EditAddressModals;
