import { storageManagerService } from '../index';

const DEBUG_PERMISSIONS = true;

// Map of type [Resource: [PermissionType: boolean]]

class PermissionValidator {
  permissionsMap = {};

  /**
   * Will construct a map of type
   * [Resource: [PermissionType: boolean]] so we can faster evaluate permissions
   *
   */
  getPermissionsMap = () => {
    if (Object.keys(this.permissionsMap).length === 0) {
      // construct the map if its not already populated
      const allPermissionsDetails =
        storageManagerService.getLoggedInUserPermissions();
      if (allPermissionsDetails && allPermissionsDetails.allPermissions) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < allPermissionsDetails.allPermissions.length; i++) {
          const item = allPermissionsDetails.allPermissions[i];
          const mapElem = this.permissionsMap[item.resource];
          if (mapElem) {
            const nestedMapElem = mapElem[item.type];
            if (nestedMapElem) {
              console.log(
                `Entry for ${item} is already added - ${nestedMapElem}`,
              );
            } else {
              mapElem[item.type] = true;
            }
          } else {
            const nestedMap = {};
            nestedMap[item.type] = true;
            this.permissionsMap[item.resource] = nestedMap;
          }
        }
      }
    }
    return this.permissionsMap;
  };

  /**
   * Refresh the permissions when they've changed
   */
  refreshPermissionsMap = () => {
    this.permissionsMap = {};
    this.getPermissionsMap();
  };

  /**
   * Will evaluate the permissions
   * @param requiredResources
   * @param requiredPermissionType
   * @returns {boolean}
   */
  isAllowedAll = (requiredResources, requiredPermissionType) => {
    if (requiredResources && requiredResources.length === 0) {
      console.warn('Resource type is not given to permission validator!');
      return true;
    }
    if (!requiredResources) {
      throw new Error('Resource type is not given to permission validator!');
    }
    if (!requiredPermissionType) {
      throw new Error(
        'Resource CRUD type is not given to permission validator!',
      );
    }

    for (let i = 0; i < requiredResources.length; i++) {
      const resource = requiredResources[i];
      const result = this.isAllowed(resource, requiredPermissionType);
      if (!result) {
        return false;
      }
    }
    return true;
  };

  /**
   * Will evaluate the permissions
   * @param requiredResources
   * @param requiredPermissionType
   * @returns {boolean}
   */
  isAllowedAny = (requiredResources, requiredPermissionType) => {
    if (!requiredResources || requiredResources.length === 0) {
      throw new Error('Resource type is not given to permission validator!');
    }
    if (!requiredPermissionType) {
      throw new Error(
        'Resource CRUD type is not given to permission validator!',
      );
    }

    for (let i = 0; i < requiredResources.length; i++) {
      const result = this.isAllowed(
        requiredResources[i],
        requiredPermissionType,
      );
      if (result) {
        return true;
      }
    }

    return false;
  };

  /**
   * Will evaluate the permissions
   * @param requiredResource
   * @param requiredPermissionType
   * @returns {boolean}
   */
  isAllowed = (requiredResource, requiredPermissionType) => {
    if (!requiredResource) {
      throw new Error('Resource type is not given to permission validator!');
    }
    if (!requiredPermissionType) {
      throw new Error(
        'Resource CRUD type is not given to permission validator!',
      );
    }

    const map = this.getPermissionsMap();
    if (map) {
      const resourceResult = map[requiredResource];
      if (!resourceResult) {
        console.log(`Resource [${requiredResource}: ${requiredPermissionType}] 
        does not have an entry in  ${map}`);
        return false;
      }

      const result = map[requiredResource][requiredPermissionType];
      return !!result;
    }
    if (DEBUG_PERMISSIONS) {
      console.error(
        `Resource [${requiredResource}: ${requiredPermissionType}] is not allowed`,
      );
    }
    return false;
  };

  /**
   * Will evaluate the permissions
   * @param requiredResource
   * @param requiredPermissionTypes - array of permissions
   * @returns {boolean}
   */
  isAllowedAllPermissionTypes = (requiredResource, requiredPermissionTypes) => {
    if (!requiredResource) {
      throw new Error('Resource type is not given to permission validator!');
    }
    if (!requiredPermissionTypes) {
      throw new Error(
        'Resource CRUD types are not given to permission validator!',
      );
    }

    let result = true;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < requiredPermissionTypes.length; i++) {
      const el = requiredPermissionTypes[i];
      const ok = this.isAllowed(requiredResource, el);
      if (!ok) {
        result = false;
        break;
      }
    }
    return result;
  };

  /**
   * Will evaluate the permissions
   * @param requiredResource
   * @param requiredPermissionTypes - array of permissions
   * @returns {boolean}
   */
  isAllowedAnyPermissionTypes = (requiredResource, requiredPermissionTypes) => {
    if (!requiredResource) {
      throw new Error('Resource type is not given to permission validator!');
    }
    if (!requiredPermissionTypes) {
      throw new Error(
        'Resource CRUD types are not given to permission validator!',
      );
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < requiredPermissionTypes.length; i++) {
      const el = requiredPermissionTypes[i];
      const ok = this.isAllowed(requiredResource, el);
      if (ok) {
        return true;
      }
    }
    return false;
  };
}

export default PermissionValidator;
