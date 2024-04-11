/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React, { useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  AppState,
  AppStateStatus,
  Platform,
} from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import Main from '@navigation/entry/index';
import { persistor, store } from './rootStore/configureStore';
import { SheetProvider } from 'react-native-actions-sheet';
import { ToastProvider } from 'react-native-toast-notifications';
import { AuthProvider } from '@screens/auth/authContext/authContext.component';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  focusManager,
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import NetInfo from '@react-native-community/netinfo';
import i18n from 'i18next';
import useAuth from '@screens/auth/authContext/useAuth';
import './containers/sheets/sheets.tsx';
// import { ThemeManager } from 'react-native-ui-lib';
import { Color } from './utils/GlobalStyles';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
};

// 3. Configure Axios

export function RootNavigation() {
  const { userEntity, isStateLoaded } = useAuth();

  const firstRun = useRef(true);

  useEffect(() => {
    if (isStateLoaded && userEntity && firstRun.current) {
      i18n.changeLanguage(userEntity?.locale);
      firstRun.current = false;
    }
  }, [userEntity, isStateLoaded]);

  const isDark = useSelector((state) => state.theme.isDark);
  const theme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <Main theme={theme} />
    </PaperProvider>
  );
}

// 4. Configure QueryClient

const queryClient = new QueryClient();
onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(state.isConnected);
  });
});

// 5. Configure main screens
export default function Entrypoint() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <AuthProvider>
            <SheetProvider>
              <PersistGate
                loading={<ActivityIndicator />}
                persistor={persistor}>
                <React.Suspense fallback={<ActivityIndicator />}>
                  <ToastProvider>
                    <RootNavigation />
                  </ToastProvider>
                </React.Suspense>
              </PersistGate>
            </SheetProvider>
          </AuthProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
}
