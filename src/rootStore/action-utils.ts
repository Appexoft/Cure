/**
 * Appends ACTION async action type
 */
export const ACTION = (actionType: string) => `${actionType}`;

/**
 * Appends REQUEST async action type
 */
export const REQUEST = (actionType: string) => `${actionType}_PENDING`;

/**
 * Appends SUCCESS async action type
 */

export const SUCCESS = (actionType: string) => `${actionType}_FULFILLED`;

/**
 * Appends FAILURE async action type
 */

export const FAILURE = (actionType: string) => `${actionType}_REJECTED`;

export const getResponseData = (action: any) => {
  return action && action.payload && action.payload.response
    ? action.payload.response.data
    : null;
};

@Deprecated
export const getFhirResponseData = (action: any) => {
  const entries = action && action.entry ? action.entry : [];

  return entries.map((it: any) => {
    const data = { ...it.resource };
    data.fullUrl = it.fullUrl;
    return data;
  });
};

@Deprecated
export const getFhirTotal = (action: any) => {
  return action &&
    action.entry && action.total
    ? action.total
    : 0;
};
