import { encryptedStorage } from '../index';

const LOCAL_STORAGE_USER_AUTH = 'user_auth';
const LOCAL_STORAGE_USER_ENTITY = 'user_entity';
const LOCAL_STORAGE_USER_PATIENT = 'user_patient';
const LOCAL_STORAGE_USER_PRACTITIONER = 'user_practitioner';
const LOCAL_STORAGE_PERMISSIONS_ENTITY = 'PERMISSIONS_ENTITY';
const LOCAL_STORAGE_ACCESS_TOKEN = 'ACCESS_TOKEN';
const LOCAL_STORAGE_ID_TOKEN = 'ID_TOKEN';
const LOCAL_STORAGE_REFRESH_TOKEN = 'REFRESH_TOKEN';
const LOCAL_CRT_INTERFACE = 'CRT_INTERFACE';
const LOCAL_PRACTITIONER_ONBOARD_DATA = 'PRACTITIONER_ONBOARD_DATA';
const LOCAL_WIZZARD_DATA = 'LOCAL_WIZZARD_DATA';

class StorageManagerService {
  getLoggedInUserAuth = async () => {
    return await this.getItem(LOCAL_STORAGE_USER_AUTH);
  };
  setLoggedInUserAuth = async (data: any) => {
    await this.setItem(LOCAL_STORAGE_USER_AUTH, data, true);
  };

  getLoggedInUserEntity = async () => {
    return await this.getItem(LOCAL_STORAGE_USER_ENTITY);
  };
  setLoggedInUserEntity = async (data: any) => {
    await this.setItem(LOCAL_STORAGE_USER_ENTITY, data, true);
  };

  getLoggedInUserPatient = async () => {
    return await this.getItem(LOCAL_STORAGE_USER_PATIENT);
  };
  setLoggedInUserPatient = async (data: any) => {
    await this.setItem(LOCAL_STORAGE_USER_PATIENT, data, false);
  };

  getLoggedInUserPractitioner = async () => {
    return await this.getItem(LOCAL_STORAGE_USER_PRACTITIONER);
  };
  setLoggedInUserPractitioner = async (data: any) => {
    await this.setItem(LOCAL_STORAGE_USER_PRACTITIONER, data, true);
  };

  getLoggedInUserPermissions = async () => {
    return await this.getItem(LOCAL_STORAGE_PERMISSIONS_ENTITY);
  };
  setLoggedInUserPermissions = async (data: any) => {
    await this.setItem(LOCAL_STORAGE_PERMISSIONS_ENTITY, data, true);
  };

  getAccessToken = async () => {
    return await this.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
  };
  setAccessToken = async (token: any) => {
    return await this.setItem(LOCAL_STORAGE_ACCESS_TOKEN, token, true);
  };

  getRefreshToken = async () => {
    return await this.getItem(LOCAL_STORAGE_REFRESH_TOKEN);
  };
  setRefreshToken = async (token: any) => {
    return await this.setItem(LOCAL_STORAGE_REFRESH_TOKEN, token, true);
  };

  getIdToken = async () => {
    return await this.getItem(LOCAL_STORAGE_ID_TOKEN);
  };
  setIdToken = async (token: any) => {
    return await this.setItem(LOCAL_STORAGE_ID_TOKEN, token, true);
  };

  getCrtInterface = async () => {
    return await this.getItem(LOCAL_CRT_INTERFACE);
  };
  setCrtInterface = async (data: any) => {
    await this.setItem(LOCAL_CRT_INTERFACE, data, false);
  };

  getPractitionerOnboardData = async () => {
    return await this.getItem(LOCAL_PRACTITIONER_ONBOARD_DATA);
  };
  setPractitionerOnboardData = async (data: any) => {
    await this.setItem(LOCAL_PRACTITIONER_ONBOARD_DATA, data, true);
  };

  getWizzardData = async (wizzardIdentifier: string) => {
    return await this.getItem(this.getWizzardKey(wizzardIdentifier));
  };
  setWizzardData = async (wizzardIdentifier: string, data: any) => {
    await this.setItem(this.getWizzardKey(wizzardIdentifier), data, true);
  };

  removeLoggedInUser = async () => {
    await this.removeItem(LOCAL_STORAGE_ACCESS_TOKEN);
    await this.removeItem(LOCAL_STORAGE_REFRESH_TOKEN);
    await this.removeItem(LOCAL_STORAGE_USER_AUTH);
    await this.removeItem(LOCAL_STORAGE_USER_ENTITY);
    await this.removeItem(LOCAL_STORAGE_USER_PATIENT);
    await this.removeItem(LOCAL_STORAGE_PERMISSIONS_ENTITY);
    await this.removeItem(LOCAL_CRT_INTERFACE);
    await this.removeItem(LOCAL_PRACTITIONER_ONBOARD_DATA);
    await encryptedStorage.clear();
  };

  // private

  getWizzardKey = (wizzardIdentifier: string) => {
    return LOCAL_WIZZARD_DATA + '_' + wizzardIdentifier;
  };

  getItem = async (key: string) => {
    return await this.getValueAsJson(key);
  };

  setItem = async (key: string, value: any, removeIfNull: boolean) => {
    try {
      if (!value && removeIfNull) {
        console.log(
          'EncryptedStorage-setItem will remove item with key [' +
            key +
            '] because it has null value',
        );
        await encryptedStorage.removeItem(key);
      } else {
        await encryptedStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  removeItem = async (key: string) => {
    return await encryptedStorage.removeItem(key);
  };

  // private
  getValueAsJson = async (key: string) => {
    try {
      const data = await encryptedStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
      console.error('Error loading data from encrypted storage:', error);
    }
    return null;
  };
}

export default StorageManagerService;
