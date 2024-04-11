import EncryptedStorage from 'react-native-encrypted-storage';

class EncryptedStorageService {
  removeItem = async (key: string) => {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (error) {
      console.warn(
        'Failed to remove key [' + key + '] from encryptedStorage',
        error,
      );
    }
  };

  getItem = async (key: string) => {
    try {
      const data = await EncryptedStorage.getItem(key);
      if (data !== undefined && data !== null) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.warn(
        'Failed to get key [' + key + '] from encryptedStorage',
        error,
      );
    }
  };

  setItem = async (key: string, value: string) => {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(
        'Failed to save key [' +
          key +
          '] with value [' +
          value +
          '] on encryptedStorage',
        error,
      );
    }
  };

  clear = async () => {
    try {
      await EncryptedStorage.clear();
    } catch (err) {
    }
  };
}

export default EncryptedStorageService;
