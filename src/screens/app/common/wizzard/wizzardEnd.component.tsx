import React, { memo, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { fontH3, fontH5 } from '../../../../utils/themeUtils';
import { useTranslation } from 'react-i18next';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { Color } from '../../../../utils/GlobalStyles';
import SvgDoctorOk from '@assets/svgs/ok/SvgDoctorOk';
import Loading from '@screens/app/common/loading';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  msgCompletionKey: string;
  msgButonDoneKey?: string;
  onBtnDonePressed: () => void;
  onBtnBackPressed: () => void;

  loading: boolean;
  updateSuccess: boolean;
  error: string;
}

enum STATE {
  LOADING = 'LOADING',
  CREATING = 'CREATING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

const WizzardEndComponent = memo((props: Props) => {
  const { t } = useTranslation();
  const {
    msgCompletionKey,
    msgButonDoneKey,
    onBtnDonePressed,
    onBtnBackPressed,
    loading,
    updateSuccess,
    error,
  } = props;

  const [state, setState] = useState(STATE.LOADING);

  useEffect(() => {
    if (updateSuccess) {
      setState(STATE.SUCCESS);
    } else if (loading) {
      setState(STATE.LOADING);
    } else if (error) {
      setState(STATE.ERROR);
    }
  }, [loading, updateSuccess, error]);

  const handleTakeHome = () => {
    if (onBtnDonePressed) {
      onBtnDonePressed();
    }
  };

  const getLoadingComp = () => {
    return (
      <>
        <Loading />
        {/*<Text style={styles.infoText}>{t('common:loading')}</Text>*/}
      </>
    );
  };

  const getCreatingComp = () => {
    return (
      <>
        <Loading />
        <Text style={styles.infoText}>{t('common:creating')}</Text>
      </>
    );
  };

  const getSuccessComp = () => {
    return (
      <>
        <SvgDoctorOk width={200} height={200} />
        <Text style={styles.infoText}>{t('common:congratulations')}</Text>
        <Text style={{ textAlign: 'center', marginTop: scaleHeight(20) }}>
          {t(msgCompletionKey)}
        </Text>

        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            onPress={handleTakeHome}
            titleStyle={styles.btnSave}
            title={t(msgButonDoneKey || 'common:takeHomeBtn')}
          />
        </View>
      </>
    );
  };

  const getErrorComp = () => {
    return (
      <>
        <Icon name={'alert-circle'} color={Color.red} size={30} />
        <Text style={styles.infoText}>{t('common:error')}</Text>
        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            onPress={onBtnBackPressed}
            titleStyle={styles.btnSave}
            title={t(msgButonDoneKey || 'common:goBack')}
          />
        </View>
      </>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <>
        <View style={styles.contentContainer}>
          {state === STATE.LOADING && <>{getLoadingComp()}</>}
          {state === STATE.ERROR && <>{getErrorComp()}</>}
          {state === STATE.CREATING && <>{getCreatingComp()}</>}
          {state === STATE.SUCCESS && <>{getSuccessComp()}</>}
        </View>
      </>
    </ScrollView>
  );
});

export default WizzardEndComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(20),
  },

  headerLabel: {
    fontSize: fontH3,
    fontWeight: '600',
  },

  contentContainer: {
    marginTop: scaleHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoText: {
    fontSize: fontH3,
    marginTop: scaleHeight(30),
  },

  stepLabel: {
    fontSize: fontH5,
    marginTop: scaleHeight(5),
    color: Color.main,
  },

  documentTypeBox: {
    marginTop: scaleHeight(20),
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginTop: scaleHeight(30),
    marginBottom: scaleHeight(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});
