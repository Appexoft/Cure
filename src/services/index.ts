import EncryptedStorageService from './storage/encryptedStorage.service';
import StorageManagerService from './storage/storageManager.service';
import ToastService from './notifications/index';
import ApiService from './api/api.service';
import PermissionValidator from './permissions/permissionValidator';

export const encryptedStorage = new EncryptedStorageService();
export const storageManagerService = new StorageManagerService();
export const toastService = new ToastService();
export const apiService = new ApiService();
export const permissionValidator = new PermissionValidator();
