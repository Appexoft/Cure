import { createNavigationContainerRef } from '@react-navigation/native';
import { EntryParamList } from '@navigation/entry/entry.types';

export const navigationRef = createNavigationContainerRef();

function navigate<T extends keyof EntryParamList>(
  name: T,
  params?: EntryParamList[T],
) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}

function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.current?.goBack();
  }
}

export default {
  navigate,
  goBack,
};
