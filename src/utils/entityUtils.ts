
import { NativeModules } from 'react-native'

export const WEEK_DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const MONTH_NAMES_SHORT = [
  // todo translate those ??
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getCurrentLocale = () => {
  let locale = undefined;
  // iOS
  if (
      NativeModules.SettingsManager &&
      NativeModules.SettingsManager.settings &&
      NativeModules.SettingsManager.settings.AppleLanguages
  ) {
    locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    // Android
  } else if (NativeModules.I18nManager) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  if (locale === 'undefined') {
    console.log('Couldnt get locale');
    return 'en';
  }

  return locale;
};

export enum PRICE_INDICATOR {
  CHEAP = 'CHEAP',
  AVERAGE = 'AVERAGE',
  EXPENSIVE = 'EXPENSIVE',
}

export const toPriceIndicator = (value: string) => {
  if (value === PRICE_INDICATOR.CHEAP) {
    return PRICE_INDICATOR.CHEAP;
  }
  if (value === PRICE_INDICATOR.AVERAGE) {
    return PRICE_INDICATOR.AVERAGE;
  }
  if (value === PRICE_INDICATOR.EXPENSIVE) {
    return PRICE_INDICATOR.EXPENSIVE;
  }
  console.error('Failed to convert price indicator: ' + value);
  return PRICE_INDICATOR.CHEAP;
};

export interface IPrice {
  value: number;
  currency: string;
}

export interface IEmail {
  display: string;
  value: string;
  type: string;
  primary: boolean;
}

export interface IName {
  familyName: string;
  givenName: string;
}

export interface IUserData {
  patient_id: string;
  roles: string;
}

export interface IUser {
  id?: string;
  resourceType: string;
  meta?: any;
  userName: string;
  email: string;
  emails: IEmail[];
  name: IName;
  active: boolean;
  locale: string;
  data: IUserData;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  practitioner: any;
}

export const toUser = (data: any) => {
  if (data) {
    const crtUser: IUser = {
      id: data.id,
      resourceType: data.resourceType,
      meta: data.meta,
      userName: data.userName,
      email: data.email,
      emails: data.emails,
      name: data.name,
      active: data.active,
      locale: data.langKey,
      data: data.data,
      phoneNumber: data.phoneNumber,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data?.patient?.gender,
      birthDate: data?.patient?.birthDate,
      practitioner: data?.practitioner,
    };
    return crtUser;
  }
  return null;
};

export interface IFhirReference {
  id: string;
  display?: string;
  resourceType: string;
}

export const toFhirReference = (
  id: string,
  resourceType: string,
  display: string,
) => {
  const value: IFhirReference = {
    id: id,
    resourceType: resourceType,
    display: display || '',
  };
  return value;
};

@Deprecated
export interface IReviewEntry {
  id?: string;
  resourceType: string;
  meta?: any;
  value: number;
  author: IFhirReference;
  verified: boolean;
  description: string;
  targetPractitioner?: IFhirReference;
  targetOrganization?: IFhirReference;
  targetHealthcareService?: IFhirReference;
  targetPractitionerRole?: IFhirReference;
}

export interface DocumentLinkDto {
  contentBase64: string;

  imageType: ImageType;
  imageEntityType: ImageEntityType;
  contentType: DocumentContentType;
  entityId: string;
  imageIdentifier: string;
  imageUrl: string;
  name: string;
  mimeType: string;
  order: number;
  createdDate: Date;
}

export enum ImageType {
  AVATAR_LARGE = 'AVATAR_LARGE',
  AVATAR_SMALL = 'AVATAR_SMALL',
  PHOTO_SMALL = 'PHOTO_SMALL',
  PHOTO_MEDIUM_MOBILE = 'PHOTO_MEDIUM_MOBILE',
  PHOTO_LARGE = 'PHOTO_LARGE',
}

export enum InterfaceType {
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  HOSPITAL = 'HOSPITAL',
}

export enum ImageEntityType {
  PATIENT = 'PATIENT',
  PRACTITIONER = 'PRACTITIONER',
  CREDENTIALS = 'CREDENTIALS',
  PRACTITIONER_ROLE = 'PRACTITIONER_ROLE',
  HOSPITAL = 'HOSPITAL',
  DOCTOR = 'DOCTOR',
}

export enum DocumentContentType {
  PDF = 'PDF',
  IMAGE = 'IMAGE',
  GIF = 'GIF',
  VIDEO = 'VIDEO',
  UNKNOWN = 'UNKNOWN',
}

export enum AvatarSizeType {
  LIST_MEDIUM = 'LIST_MEDIUM',
  LIST_LARGE = 'LIST_LARGE',
  HEADER = 'HEADER',
}



export const getWrapperStyles = (currentStyle: any, extraStyle: any) => {
  if (extraStyle) {
    return [currentStyle, extraStyle];
  }
  return [currentStyle];
};
