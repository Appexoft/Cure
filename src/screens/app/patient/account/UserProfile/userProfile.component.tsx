import React, { memo, useCallback, useState } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { BorderRadius, Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import TopicItemShort from '@components/TopicItemShort';
import TopicItem from '@components/TopicItem';
import ROUTES from '../../../../../utils/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useAuth from '@screens/auth/authContext/useAuth';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { getNameFromFhir } from '../../../../../utils/fhir/fhirTypes';
import {
  AvatarSizeType,
  ImageEntityType,
  ImageType,
} from '../../../../../utils/entityUtils';
import Avatar from '@screens/app/common/avatar/Avatar';
import ChoosePhotoModal from '@components/modals/choose-photo-modal';

const DISPLAY_GRID_STYLE = false;
const DISPLAY_ROW_STYLE = true;

const UserProfile = memo(({ navigation, t }) => {
  const [refreshAvatar, setRefreshAvatar] = useState(false);

  const { logout, patient } = useAuth();
  const [isChoosePhotoModalOpen, setIsChoosePhotoModalOpen] =
    React.useState(false);

  const onGoalSettings = useCallback(() => {
    navigation.navigate(ROUTES.GoalSettings);
  }, [navigation]);

  const navigateToPersonalInfo = useCallback(() => {
    navigation.navigate(ROUTES.Patient_Personal_Information);
  }, [navigation]);

  const navigateToSettings = useCallback(() => {
    navigation.navigate(ROUTES.Patient_Settings);
  }, [navigation]);

  const onPasswordSettings = useCallback(() => {
    navigation.navigate(ROUTES.Patient_Change_Password);
  }, [navigation]);

  const navigateToFaq = useCallback(() => {
    navigation.navigate(ROUTES.Faq_Info);
  }, [navigation]);

  const navigateToAbout = useCallback(() => {
    navigation.navigate(ROUTES.About);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtUserName}>
          {patient ? getNameFromFhir(patient) : ''}
        </Text>
        <Text style={styles.txtCareer}>{t('patient:title')}</Text>
        <Avatar
          entityId={patient?.id}
          entityType={ImageEntityType.PATIENT}
          type={ImageType.AVATAR_SMALL}
          size={AvatarSizeType.LIST_LARGE}
          style={styles.svgAvatar}
          onPress={() => {
            setIsChoosePhotoModalOpen(true);
            setRefreshAvatar(false);
          }}
          onRefresh={refreshAvatar}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {DISPLAY_GRID_STYLE && (
          <>
            <View style={styles.flexRow}>
              <TopicItemShort
                Svg={<Icon name="account" color={Color.pastel1} size={24} />}
                title={'Account'}
                onPress={onGoalSettings}
              />
              <TopicItemShort
                Svg={<Icon name="wrench" color={Color.pastel2} size={24} />}
                title={'Settings'}
                onPress={onGoalSettings}
              />
            </View>
            <View style={styles.flexRow}>
              <TopicItemShort
                Svg={<Icon name="bell" color={Color.pastel3} size={24} />}
                title={'Notifications'}
                onPress={onGoalSettings}
              />
              <TopicItemShort
                Svg={
                  <Icon name="shield-account" color={Color.pastel4} size={24} />
                }
                title={'Security'}
                onPress={onGoalSettings}
              />
            </View>
            <View style={styles.flexRow}>
              <TopicItemShort
                Svg={
                  <Icon name="calendar-check" color={Color.pastel5} size={24} />
                }
                title={'Appointments'}
                onPress={onGoalSettings}
              />
              <TopicItemShort
                Svg={<Icon name="star" color={Color.pastel6} size={24} />}
                title={'Favorites'}
                onPress={onGoalSettings}
              />
            </View>
            <View style={styles.flexRow}>
              <TopicItemShort
                Svg={<Icon name="forum" color={Color.pastel5} size={24} />}
                title={'Help'}
                onPress={onGoalSettings}
              />
              <TopicItemShort
                Svg={
                  <Icon name="information" color={Color.pastel1} size={24} />
                }
                title={'About'}
                onPress={onGoalSettings}
              />
            </View>
          </>
        )}

        {DISPLAY_ROW_STYLE && (
          <>
            {/* ACCOUNT SECTION */}
            <Text style={styles.txtAccountSection}>
              {t('account:menu:accountSettingsSection')}
            </Text>

            <TopicItem
              Svg={<Icon name="account" color={Color.accent} size={20} />}
              title={t('account:menu:personalInfo')}
              style={styles.pastel1}
              onPress={navigateToPersonalInfo}
            />
            <TopicItem
              Svg={<Icon name="wrench" color={Color.accent} size={20} />}
              title={t('account:menu:settings')}
              style={styles.pastel4}
              onPress={navigateToSettings}
            />
            <TopicItem
              Svg={<Icon name="bell" color={Color.accent} size={20} />}
              title={t('account:menu:notifications')}
              style={styles.pastel7}
              onPress={onGoalSettings}
            />
            <TopicItem
              Svg={
                <Icon name="account-switch" color={Color.accent} size={20} />
              }
              title={t('account:menu:createProvider')}
              style={styles.pastel6}
              onPress={onGoalSettings}
            />

            {/* SECURITY SECTION */}
            <Text style={styles.txtAccountSection}>
              {t('account:menu:securitySection')}
            </Text>

            <TopicItem
              Svg={<Icon name="lock" color={Color.accent} size={20} />}
              title={t('account:menu:password')}
              style={styles.pastel5}
              onPress={onPasswordSettings}
            />

            <TopicItem
              Svg={
                <Icon name="shield-account" color={Color.accent} size={20} />
              }
              title={t('account:menu:mfa')}
              style={styles.pastel5}
              onPress={onGoalSettings}
            />

            {/* HELP SECTION */}
            <Text style={styles.txtAccountSection}>
              {t('account:menu:helpSection')}
            </Text>

            <TopicItem
              Svg={<Icon name="forum" color={Color.accent} size={20} />}
              title={t('account:menu:chat')}
              style={styles.pastel7}
              onPress={onGoalSettings}
            />

            <TopicItem
              Svg={
                <Icon name="account-question" color={Color.accent} size={20} />
              }
              title={t('account:menu:faq')}
              style={styles.pastel3}
              onPress={navigateToFaq}
            />

            <TopicItem
              Svg={<Icon name="information" color={Color.accent} size={20} />}
              title={t('account:menu:about')}
              style={styles.pastel2}
              onPress={navigateToAbout}
            />
            <TopicItem
              Svg={
                <Icon
                  name="text-box-check-outline"
                  color={Color.accent}
                  size={20}
                />
              }
              style={styles.pastel1}
              title={t('account:menu:legal')}
              onPress={onGoalSettings}
            />
          </>
        )}

        <View style={styles.flexRow}>
          <ButtonPrimary
            style={styles.btnLogout}
            title={'Logout'}
            onPress={() => {
              logout();
            }}
          />
        </View>

        <ChoosePhotoModal
          isModalOpen={isChoosePhotoModalOpen}
          close={() => setIsChoosePhotoModalOpen(false)}
          id={patient?.id}
          imageType={ImageType.AVATAR_SMALL}
          imageEntityType={ImageEntityType.PATIENT}
          onSuccess={() => {
            setTimeout(function () {
              setRefreshAvatar(true);
            }, 5000);
          }}
        />
      </ScrollView>
    </View>
  );
});
export default UserProfile;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(10),
    marginLeft: scaleWidth(10),
    marginBottom: scaleHeight(20),
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(94),
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 15 : 15,
    paddingBottom: scaleHeight(26),
    backgroundColor: Color.accent,
    borderBottomLeftRadius: scaleWidth(24),
    borderBottomRightRadius: scaleWidth(24),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtUserName: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: Color.white,
    marginLeft: scaleWidth(32),
    marginTop: scaleHeight(31),
  },
  txtAccountSection: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(20),
    lineHeight: scaleHeight(25),
    color: Color.accent,
    marginTop: scaleHeight(15),
    marginBottom: scaleHeight(10),
    marginLeft: scaleWidth(32),
  },
  txtCareer: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.disabled,
    marginTop: scaleHeight(4),
    marginLeft: scaleWidth(32),
    textTransform: 'uppercase',
  },
  svgAvatar: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    borderRadius: scaleWidth(BorderRadius.card),
    position: 'absolute',
    right: scaleWidth(24),
    bottom: scaleHeight(21),
    overflow: 'hidden',
  },
  svgOption: {
    width: scaleWidth(50),
    height: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgNotification: {
    width: scaleWidth(50),
    height: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberNotification: {
    width: scaleWidth(8),
    height: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.secondRed,
    borderRadius: scaleWidth(4),
    position: 'absolute',
    top: 12,
    right: 17,
  },
  userProfile: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(16),
    marginHorizontal: scaleWidth(16),
    marginTop: scaleHeight(16),
    paddingTop: scaleHeight(16),
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: scaleHeight(160),
    marginBottom: scaleHeight(16),
  },
  lineVertical: {
    width: 3,
    height: scaleHeight(170),
    backgroundColor: Color.pageBackground,
    alignSelf: 'center',
    position: 'absolute',
    right: scaleWidth(171),
    top: scaleHeight(24),
  },
  lineHorizontal: {
    width: scaleWidth(295),
    left: scaleWidth(24),
    height: 3,
    backgroundColor: Color.pageBackground,
    alignSelf: 'center',
    position: 'absolute',
  },
  btnLogout: {
    width: scaleWidth(200),
    height: scaleHeight(40),
    marginTop: scaleHeight(30),
    backgroundColor: Color.error,
  },
  pastel1: {
    backgroundColor: Color.pastel1,
  },
  pastel2: {
    backgroundColor: Color.pastel2,
  },
  pastel3: {
    backgroundColor: Color.pastel3,
  },
  pastel4: {
    backgroundColor: Color.pastel4,
  },
  pastel5: {
    backgroundColor: Color.pastel5,
  },
  pastel6: {
    backgroundColor: Color.pastel6,
  },
  pastel7: {
    backgroundColor: Color.pastel7,
  },
});
