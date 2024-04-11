export const CRUD_TYPES = {
  READ: 'READ',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  EXPORT: 'EXPORT',
};

export const CRUD_TYPES_RANK = {
  READ: 1,
  CREATE: 2,
  UPDATE: 3,
  DELETE: 4,
  EXPORT: 5,
};

export const getRankOfPermission = (permissionType: string) => {
  switch (permissionType) {
    case CRUD_TYPES.READ:
      return CRUD_TYPES_RANK.READ;
    case CRUD_TYPES.CREATE:
      return CRUD_TYPES_RANK.CREATE;
    case CRUD_TYPES.UPDATE:
      return CRUD_TYPES_RANK.UPDATE;
    case CRUD_TYPES.DELETE:
      return CRUD_TYPES_RANK.DELETE;
    case CRUD_TYPES.EXPORT:
      return CRUD_TYPES_RANK.EXPORT;
    default:
      return -1;
  }
};

export const comparePermissionType = (type1: string, type2: string) => {
  const rank1 = getRankOfPermission(type1);
  const rank2 = getRankOfPermission(type2);

  if (rank1 > rank2) {
    return 1;
  }
  if (rank1 < rank2) {
    return -1;
  }
  return 0;
};

export const groupPermissionsByType = (permissions) => {
  const permissionsMap = {};
  permissions.forEach((permission) => {
    const existing = permissionsMap[permission.resource];
    if (!existing) {
      permissionsMap[permission.resource] = { resource: permission.resource };
      permissionsMap[permission.resource][permission.type] = true;
    } else {
      permissionsMap[permission.resource][permission.type] = true;
    }
  });

  return permissionsMap;
};

export const sortPermissionsByType = (permissions) => {
  if (permissions) {
    const permissionsMap = groupPermissionsByType(permissions);
    const permissionValues = Object.values(permissionsMap);
    // sort permissions alphabetically
    return permissionValues.sort(function (a, b) {
      const aU = a.resource.toUpperCase();
      const bU = b.resource.toUpperCase();
      return aU < bU ? -1 : aU > bU ? 1 : 0;
    });
  }
  return [];
};
