import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { Platform, TouchableOpacity, UIManager, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { WizzardScreen } from '../../../../utils/domainEntities';
import { Color } from '../../../../utils/GlobalStyles';
import { storageManagerService } from '../../../../services';
import ButtonHeader from '@components/btns/ButtonHeader';
import HeaderTitle from '@components/HeaderTittle';
import { useTranslation } from 'react-i18next';
import Loading from '@screens/app/common/loading';
import WizzardEndComponent from '@screens/app/common/wizzard/wizzardEnd.component';

const screenTypes = [
  'personalDetails',
  'profession',
  'education',
  'certificates',
  'identity',
  'success',
];

interface Props {
  data: any;
  setData: any;
  wizzardIdentifier: string;
  screens: WizzardScreen[];
  onEndWizzardSave: () => void;
  onEndWizzardNavigateTo: () => void;

  loading: boolean;
  updateSuccess: boolean;
  error: string;
}

const DEBUG = false;

const GenericWizzard = (props: Props) => {
  const { setOptions } = useNavigation();
  const { t } = useTranslation();

  const {
    data,
    setData,
    wizzardIdentifier,
    screens,
    onEndWizzardSave,
    onEndWizzardNavigateTo,
    loading,
    updateSuccess,
    error,
  } = props;

  const [currentScreen, setCurrentScreen] = useState(0);
  const [loadedData, setLoadedData] = useState(false);
  const [validationPassed, setValidationPassed] = useState<boolean>(false);

  const setDataProxy = (crtData: any) => {
    if (DEBUG) {
      console.log('Data changed', crtData);
    }
    setData(crtData);
  };

  const cleanupWizzard = async () => {
    await storageManagerService.setWizzardData(wizzardIdentifier, null);
    setValidationPassed(false);
    setLoadedData(false);
  };

  useLayoutEffect(() => {
    const getData = async () => {
      try {
        const wizzardData = await storageManagerService.getWizzardData(
          wizzardIdentifier,
        );
        if (wizzardData) {
          const newData = { ...data };
          const resultData = Object.assign(newData, wizzardData);
          console.log('Data changed', resultData);
          setDataProxy(resultData);
        }
        setLoadedData(true);
      } catch (error) {
        console.error('Error retrieving data:', error);
        setLoadedData(true);
      }
    };
    getData();
  }, [setData, wizzardIdentifier]);

  const saveProgress = useCallback(
    (passed: boolean) => {
      try {
        if (passed) {
          storageManagerService.setWizzardData(wizzardIdentifier, data);
          console.log('Data saved successfully!');
        }
      } catch (error) {
        console.error('Error saving data:', error);
      }
    },
    [data, wizzardIdentifier],
  );

  useEffect(() => {
    if (screens && screens.length > 0 && screens.length > currentScreen) {
      let crtScreen = screens[currentScreen];
      const headerRight = crtScreen.headerRight;
      let crtTitle =
        t('common:step') + ' ' + (currentScreen + 1) + '/' + screens.length;

      const headerLeft =
        currentScreen === 0 ? (
          <ButtonHeader left={true} />
        ) : (
          <ButtonHeader
            onPress={() => {
              previousScreen();
            }}
            iconName="arrow-left"
          />
        );

      if (headerRight) {
        setOptions({
          headerRight: () => headerRight,
          headerLeft: () => headerLeft,
          headerTitle: () => (
            <HeaderTitle title={crtScreen.title || crtTitle} />
          ),
        });
      } else {
        setOptions({
          headerLeft: () => headerLeft,
          headerRight: () =>
            validationPassed ? (
              <ButtonHeader
                onPress={() => {
                  nextScreen();
                }}
                disabled={!validationPassed}
                iconName="arrow-right"
              />
            ) : null,
          headerTitle: () => (
            <HeaderTitle title={crtScreen.title || crtTitle} />
          ),
        });
      }
    } else {
      console.error(
        'Invalid screen configuration: ',
        screens && screens.length > 0 ? screens : 'Empty screens array',
      );
    }
  }, [currentScreen, nextScreen, screens, setOptions, t, validationPassed]);

  const isValidationPassed = useCallback(() => {
    if (screens && screens.length > 0) {
      if (currentScreen < screens.length) {
        return screens[currentScreen].validate(data);
      } else {
        return true;
      }
    }
    console.error(
      'Cannot validate current screen, current screen index ' +
        currentScreen +
        ' is higher than available screens' +
        screens.length +
        ' !',
    );
    return false;
  }, [currentScreen, data, screens]);

  useEffect(() => {
    if (DEBUG) {
      console.log('Running validation', data);
    }
    const passed = !!isValidationPassed();
    if (DEBUG) {
      console.log('Running validation passed?', passed);
    }
    setValidationPassed(passed);
    saveProgress(passed);
  }, [data, isValidationPassed, saveProgress]);

  const nextScreen = () => {
    if (screens && screens.length > 0) {
      if (currentScreen < screens.length) {
        let crt = screens[currentScreen];
        if (DEBUG) {
          console.log(
            'Calling save on screen [' + currentScreen + ']' + crt.title,
          );
        }
        crt.onSave(data);
      } else {
        console.log('calling onEndWizzardSave', onEndWizzardSave);
        // show congratulations screen
        if (onEndWizzardSave) {
          onEndWizzardSave();
        }
      }
      const crtLocalScreen = currentScreen + 1;
      setCurrentScreen(crtLocalScreen);
    } else {
      console.error(
        'Cannot go to next screen, current screen index ' +
          currentScreen +
          ' is higher than available screens' +
          screens.length +
          ' !',
      );
    }
  };

  const previousScreen = () => {
    currentScreen <= 0
      ? setCurrentScreen(0)
      : setCurrentScreen(currentScreen - 1);
  };

  const renderCurrentScreenView = () => {
    if (screens && screens.length > 0) {
      if (currentScreen < screens.length) {
        return screens[currentScreen].getContent(data, setDataProxy);
      } else {
        return (
          <WizzardEndComponent
            msgCompletionKey={'header:applyAsDoctor:congratulationsSubText'}
            onBtnDonePressed={async () => {
              if (onEndWizzardNavigateTo) {
                onEndWizzardNavigateTo();
              }
              await cleanupWizzard();
            }}
            onBtnBackPressed={() => {
              previousScreen();
            }}
            loading={loading}
            updateSuccess={updateSuccess && currentScreen >= screens.length}
            error={error}
          />
        );
      }
    }
    console.error(
      'Current screen index ' +
        currentScreen +
        ' is higher than available screens' +
        screens.length +
        ' !',
    );
    return <></>;
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: '100%',
          paddingHorizontal: scaleWidth(20),
          paddingVertical: scaleHeight(20),
        }}>
        {loadedData ? renderCurrentScreenView() : <Loading size={30} />}
      </View>
      {currentScreen !== screens.length && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: scaleWidth(50),
            justifyContent: 'space-between',
            paddingVertical: scaleHeight(35),
            position: 'absolute',
            bottom: scaleHeight(10),
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={previousScreen}
            disabled={currentScreen <= 0}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            {screenTypes.map((screen, idx) => (
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor:
                    idx === currentScreen ? Color.main : Color.disabled,
                  marginLeft: 5,
                  borderRadius: 100,
                }}
              />
            ))}
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: validationPassed ? Color.main : Color.disabled,
              borderRadius: scaleWidth(30),
            }}
            onPress={nextScreen}
            disabled={!validationPassed}>
            <Icon name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default GenericWizzard;
