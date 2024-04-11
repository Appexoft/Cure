import { persistReducer, persistStore } from 'redux-persist';
import EncryptedStorage from 'react-native-encrypted-storage';

import Reactotron from '../utils/Reactotron';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './rootReducer';
import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';

const enhancers: StoreEnhancer<{}, {}>[] = [];
if (__DEV__ && Reactotron?.createEnhancer) {
  enhancers.push(Reactotron?.createEnhancer?.());
}

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  blacklist: [],
};

const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: () => __DEV__,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(promiseMiddleware)
      .concat(loggerMiddleware),
  enhancers,
});
export const persistor = persistStore(store);
