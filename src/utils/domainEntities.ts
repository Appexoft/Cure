import {
  getNameForPractitioner,
  getQualificationDisplay,
  getQualificationForPractitioner,
} from './fhir/fhirTypes';
import {DocumentLinkDto, ImageEntityType} from './entityUtils';

export const ALL = 'All';

export const ALL_SELECT = {
  label: ALL,
  value: ALL,
  key: ALL,
  id: ALL,
  obj: ALL,
};

export const NEARBY_IDENTIFIER = 'Nearby';
export const NEARBY_LOCATION = {
  label: 'Current location', // todo translate
  name: 'Current location',
  value: NEARBY_IDENTIFIER,
  key: NEARBY_IDENTIFIER,
  id: NEARBY_IDENTIFIER,
  obj: NEARBY_IDENTIFIER,

  countryCode: null,
};

export interface SortByDto {
  id: string;
  desc: boolean;
}

export interface FilterDto {
  id: string;
  value: string;
  values: string[];
}

export enum NullableType {
  NULL,
  NOT_NULL,
}

export interface NullableFilterDto {
  id: string;
  value: NullableType;
}

export enum EntityType {
  ADDRESS_ENTITY = 'ADDRESS_ENTITY',
  CUSTOMER_ENTITY = 'CUSTOMER_ENTITY',
  GROUP_ENTITY = 'GROUP_ENTITY',
  PERMISSION_ENTITY = 'PERMISSION_ENTITY',
  ROLE_ENTITY = 'ROLE_ENTITY',
  USER_ENTITY = 'USER_ENTITY',
  SITE_ENTITY = 'SITE_ENTITY',
  PATIENT_ENTITY = 'PATIENT_ENTITY',

  PRACTITIONER_ENTITY = 'PRACTITIONER_ENTITY',
  ORGANIZATION_ENTITY = 'ORGANIZATION_ENTITY',
  PRACTITIONER_ROLE_ENTITY = 'PRACTITIONER_ROLE_ENTITY',
  CODEABLE_CONCEPT_ENTITY = 'CODEABLE_CONCEPT_ENTITY',
  QUALIFICATION = 'QUALIFICATION',

  UNKNOWN = 'UNKNOWN',
}

export interface ByEntityDto {
  entityType: EntityType;
  type?: string;
  id: bigint;
  ids: bigint[];
  fullTextSearchValue?: string;
}

export enum DateFilterType {
  BEFORE,
  EQUAL,
  AFTER,
  BETWEEN,
}

export interface DateFilterDto {
  dateFilter: Date;
  dateFilter2?: Date;
  dateFilterType: DateFilterType;
}
export interface TableSearchDto {
  sortBy: SortByDto[];
  filters?: FilterDto[];
  extraFilters?: FilterDto[];
  nullableFilters?: NullableFilterDto[];
  byEntity?: ByEntityDto;

  globalFilter?: string;
  pageSize: number;
  pageIndex: number;

  dateFilter?: DateFilterDto;
}

export interface Identifiable {
  id?: bigint;
  createdDate: Date;
  lastModifiedDate: Date;
}

export interface FhirCodingIdentifier {
  text?: string;
  system: string;
  version: string;
  code: string;
  display: string;
  definition?: string;
}

export interface FhirEntity extends Identifiable {
  identifiers: FhirCodingIdentifier[];
  fhirIdentifier1?: string;
  fhirIdentifier2?: string;
  fhirIdentifier3?: string;
  description?: string;
  comment?: string;
}

export interface FhirReviewableEntity extends FhirEntity {
  // review
  reviewValue: number;
  reviewCountTotal: bigint;
  reviewCount1: bigint;
  reviewCount2: bigint;
  reviewCount3: bigint;
  reviewCount4: bigint;
  reviewCount5: bigint;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  UNKNOWN = 'UNKNOWN',
}

export enum AddressType {
  CUSTOMER,
  SITE,
  PROVIDER,
  USER,

  OTHER,
}

export enum PriceIndicator {
  CHEAP,
  AVERAGE,
  EXPENSIVE,

  UNKNOWN,
}

export enum PriceCurrency {
  AED,
  AFN,
  ALL,
  AMD,
  ANG,
  AOA,
  ARS,
  AUD,
  AWG,
  AZN,
  BAM,
  BBD,
  BDT,
  BGN,
  BHD,
  BIF,
  BMD,
  BND,
  BOB,
  BRL,
  BSD,
  BTN,
  BWP,
  BYR,
  BZD,
  CAD,
  CDF,
  CHF,
  CLP,
  CNY,
  COP,
  CRC,
  CUC,
  CUP,
  CVE,
  CZK,
  DJF,
  DKK,
  DOP,
  DZD,
  EGP,
  ERN,
  ETB,
  EUR,
  FJD,
  FKP,
  GBP,
  GEL,
  GGP,
  GHS,
  GIP,
  GMD,
  GNF,
  GTQ,
  GYD,
  HKD,
  HNL,
  HRK,
  HTG,
  HUF,
  IDR,
  ILS,
  IMP,
  INR,
  IQD,
  IRR,
  ISK,
  JEP,
  JMD,
  JOD,
  JPY,
  KES,
  KGS,
  KHR,
  KMF,
  KPW,
  KRW,
  KWD,
  KYD,
  KZT,
  LAK,
  LBP,
  LKR,
  LRD,
  LSL,
  LYD,
  MAD,
  MDL,
  MGA,
  MKD,
  MMK,
  MNT,
  MOP,
  MRO,
  MUR,
  MVR,
  MWK,
  MXN,
  MYR,
  MZN,
  NAD,
  NGN,
  NIO,
  NOK,
  NPR,
  NZD,
  OMR,
  PAB,
  PEN,
  PGK,
  PHP,
  PKR,
  PLN,
  PYG,
  QAR,
  RON,
  RSD,
  RUB,
  RWF,
  SAR,
  SBD,
  SCR,
  SDG,
  SEK,
  SGD,
  SHP,
  SLL,
  SOS,
  SPL,
  SRD,
  STD,
  SVC,
  SYP,
  SZL,
  THB,
  TJS,
  TMT,
  TND,
  TOP,
  TRY,
  TTD,
  TVD,
  TWD,
  TZS,
  UAH,
  UGX,
  USD,
  UYU,
  UZS,
  VEF,
  VND,
  VUV,
  WST,
  XAF,
  XCD,
  XDR,
  XOF,
  XPF,
  YER,
  ZAR,
  ZMW,
  ZWD,
}

// [{ label: 'Afghanistan', code: 'AF', value: 'AF' }];
export const CURRENCIES = [
  {
    value: 'AED',
    label: 'AED',
    code: 'AED',
    decimals: 2,
    name: 'United Arab Emirates dirham',
    number: '784',
  },
  {
    value: 'AFN',
    label: 'AFN',
    code: 'AFN',
    decimals: 2,
    name: 'Afghan afghani',
    number: '971',
  },
  {
    value: 'ALL',
    label: 'ALL',
    code: 'ALL',
    decimals: 2,
    name: 'Albanian lek',
    number: '8',
  },
  {
    value: 'AMD',
    label: 'AMD',
    code: 'AMD',
    decimals: 2,
    name: 'Armenian dram',
    number: '51',
  },
  {
    value: 'ANG',
    label: 'ANG',
    code: 'ANG',
    decimals: 2,
    name: 'Netherlands Antillean guilder',
    number: '532',
  },
  {
    value: 'AOA',
    label: 'AOA',
    code: 'AOA',
    decimals: 2,
    name: 'Angolan kwanza',
    number: '973',
  },
  {
    value: 'ARS',
    label: 'ARS',
    code: 'ARS',
    decimals: 2,
    name: 'Argentine peso',
    number: '32',
  },
  {
    value: 'AUD',
    label: 'AUD',
    code: 'AUD',
    decimals: 2,
    name: 'Australian dollar',
    number: '36',
  },
  {
    value: 'AWG',
    label: 'AWG',
    code: 'AWG',
    decimals: 2,
    name: 'Aruban florin',
    number: '533',
  },
  {
    value: 'AZN',
    label: 'AZN',
    code: 'AZN',
    decimals: 2,
    name: 'Azerbaijani manat',
    number: '944',
  },
  {
    value: 'BAM',
    label: 'BAM',
    code: 'BAM',
    decimals: 2,
    name: 'Bosnia and Herzegovina convertible mark',
    number: '977',
  },
  {
    value: 'BBD',
    label: 'BBD',
    code: 'BBD',
    decimals: 2,
    name: 'Barbados dollar',
    number: '52',
  },
  {
    value: 'BDT',
    label: 'BDT',
    code: 'BDT',
    decimals: 2,
    name: 'Bangladeshi taka',
    number: '50',
  },
  {
    value: 'BGN',
    label: 'BGN',
    code: 'BGN',
    decimals: 2,
    name: 'Bulgarian lev',
    number: '975',
  },
  {
    value: 'BHD',
    label: 'BHD',
    code: 'BHD',
    decimals: 3,
    name: 'Bahraini dinar',
    number: '48',
  },
  {
    value: 'BIF',
    label: 'BIF',
    code: 'BIF',
    decimals: 0,
    name: 'Burundian franc',
    number: '108',
  },
  {
    value: 'BMD',
    label: 'BMD',
    code: 'BMD',
    decimals: 2,
    name: 'Bermudian dollar (customarily known as Bermuda dollar)',
    number: '60',
  },
  {
    value: 'BND',
    label: 'BND',
    code: 'BND',
    decimals: 2,
    name: 'Brunei dollar',
    number: '96',
  },
  {
    value: 'BOB',
    label: 'BOB',
    code: 'BOB',
    decimals: 2,
    name: 'Boliviano',
    number: '68',
  },
  {
    value: 'BOV',
    label: 'BOV',
    code: 'BOV',
    decimals: 2,
    name: 'Bolivian Mvdol (funds code)',
    number: '984',
  },
  {
    value: 'BRL',
    label: 'BRL',
    code: 'BRL',
    decimals: 2,
    name: 'Brazilian real',
    number: '986',
  },
  {
    value: 'BSD',
    label: 'BSD',
    code: 'BSD',
    decimals: 2,
    name: 'Bahamian dollar',
    number: '44',
  },
  {
    value: 'BTN',
    label: 'BTN',
    code: 'BTN',
    decimals: 2,
    name: 'Bhutanese ngultrum',
    number: '64',
  },
  {
    value: 'BWP',
    label: 'BWP',
    code: 'BWP',
    decimals: 2,
    name: 'Botswana pula',
    number: '72',
  },
  {
    value: 'BYR',
    label: 'BYR',
    code: 'BYR',
    decimals: 0,
    name: 'Belarusian ruble',
    number: '974',
  },
  {
    value: 'BZD',
    label: 'BZD',
    code: 'BZD',
    decimals: 2,
    name: 'Belize dollar',
    number: '84',
  },
  {
    value: 'CAD',
    label: 'CAD',
    code: 'CAD',
    decimals: 2,
    name: 'Canadian dollar',
    number: '124',
  },
  {
    value: 'CDF',
    label: 'CDF',
    code: 'CDF',
    decimals: 2,
    name: 'Congolese franc',
    number: '976',
  },
  {
    value: 'CHE',
    label: 'CHE',
    code: 'CHE',
    decimals: 2,
    name: 'WIR Euro (complementary currency)',
    number: '947',
  },
  {
    value: 'CHF',
    label: 'CHF',
    code: 'CHF',
    decimals: 2,
    name: 'Swiss franc',
    number: '756',
  },
  {
    value: 'CHW',
    label: 'CHW',
    code: 'CHW',
    decimals: 2,
    name: 'WIR Franc (complementary currency)',
    number: '948',
  },
  {
    value: 'CLF',
    label: 'CLF',
    code: 'CLF',
    decimals: 0,
    name: 'Unidad de Fomento (funds code)',
    number: '990',
  },
  {
    value: 'CLP',
    label: 'CLP',
    code: 'CLP',
    decimals: 0,
    name: 'Chilean peso',
    number: '152',
  },
  {
    value: 'CNY',
    label: 'CNY',
    code: 'CNY',
    decimals: 2,
    name: 'Chinese yuan',
    number: '156',
  },
  {
    value: 'COP',
    label: 'COP',
    code: 'COP',
    decimals: 2,
    name: 'Colombian peso',
    number: '170',
  },
  {
    value: 'COU',
    label: 'COU',
    code: 'COU',
    decimals: 2,
    name: 'Unidad de Valor Real',
    number: '970',
  },
  {
    value: 'CRC',
    label: 'CRC',
    code: 'CRC',
    decimals: 2,
    name: 'Costa Rican colon',
    number: '188',
  },
  {
    value: 'CUC',
    label: 'CUC',
    code: 'CUC',
    decimals: 2,
    name: 'Cuban convertible peso',
    number: '931',
  },
  {
    value: 'CUP',
    label: 'CUP',
    code: 'CUP',
    decimals: 2,
    name: 'Cuban peso',
    number: '192',
  },
  {
    value: 'CVE',
    label: 'CVE',
    code: 'CVE',
    decimals: 0,
    name: 'Cape Verde escudo',
    number: '132',
  },
  {
    value: 'CZK',
    label: 'CZK',
    code: 'CZK',
    decimals: 2,
    name: 'Czech koruna',
    number: '203',
  },
  {
    value: 'DJF',
    label: 'DJF',
    code: 'DJF',
    decimals: 0,
    name: 'Djiboutian franc',
    number: '262',
  },
  {
    value: 'DKK',
    label: 'DKK',
    code: 'DKK',
    decimals: 2,
    name: 'Danish krone',
    number: '208',
  },
  {
    value: 'DOP',
    label: 'DOP',
    code: 'DOP',
    decimals: 2,
    name: 'Dominican peso',
    number: '214',
  },
  {
    value: 'DZD',
    label: 'DZD',
    code: 'DZD',
    decimals: 2,
    name: 'Algerian dinar',
    number: '12',
  },
  {
    value: 'EGP',
    label: 'EGP',
    code: 'EGP',
    decimals: 2,
    name: 'Egyptian pound',
    number: '818',
  },
  {
    value: 'ERN',
    label: 'ERN',
    code: 'ERN',
    decimals: 2,
    name: 'Eritrean nakfa',
    number: '232',
  },
  {
    value: 'ETB',
    label: 'ETB',
    code: 'ETB',
    decimals: 2,
    name: 'Ethiopian birr',
    number: '230',
  },
  {
    value: 'EUR',
    label: 'EUR',
    code: 'EUR',
    decimals: 2,
    name: 'Euro',
    number: '978',
  },
  {
    value: 'FJD',
    label: 'FJD',
    code: 'FJD',
    decimals: 2,
    name: 'Fiji dollar',
    number: '242',
  },
  {
    value: 'FKP',
    label: 'FKP',
    code: 'FKP',
    decimals: 2,
    name: 'Falkland Islands pound',
    number: '238',
  },
  {
    value: 'GBP',
    label: 'GBP',
    code: 'GBP',
    decimals: 2,
    name: 'Pound sterling',
    number: '826',
  },
  {
    value: 'GEL',
    label: 'GEL',
    code: 'GEL',
    decimals: 2,
    name: 'Georgian lari',
    number: '981',
  },
  {
    value: 'GHS',
    label: 'GHS',
    code: 'GHS',
    decimals: 2,
    name: 'Ghanaian cedi',
    number: '936',
  },
  {
    value: 'GIP',
    label: 'GIP',
    code: 'GIP',
    decimals: 2,
    name: 'Gibraltar pound',
    number: '292',
  },
  {
    value: 'GMD',
    label: 'GMD',
    code: 'GMD',
    decimals: 2,
    name: 'Gambian dalasi',
    number: '270',
  },
  {
    value: 'GNF',
    label: 'GNF',
    code: 'GNF',
    decimals: 0,
    name: 'Guinean franc',
    number: '324',
  },
  {
    value: 'GTQ',
    label: 'GTQ',
    code: 'GTQ',
    decimals: 2,
    name: 'Guatemalan quetzal',
    number: '320',
  },
  {
    value: 'GYD',
    label: 'GYD',
    code: 'GYD',
    decimals: 2,
    name: 'Guyanese dollar',
    number: '328',
  },
  {
    value: 'HKD',
    label: 'HKD',
    code: 'HKD',
    decimals: 2,
    name: 'Hong Kong dollar',
    number: '344',
  },
  {
    value: 'HNL',
    label: 'HNL',
    code: 'HNL',
    decimals: 2,
    name: 'Honduran lempira',
    number: '340',
  },
  {
    value: 'HRK',
    label: 'HRK',
    code: 'HRK',
    decimals: 2,
    name: 'Croatian kuna',
    number: '191',
  },
  {
    value: 'HTG',
    label: 'HTG',
    code: 'HTG',
    decimals: 2,
    name: 'Haitian gourde',
    number: '332',
  },
  {
    value: 'HUF',
    label: 'HUF',
    code: 'HUF',
    decimals: 2,
    name: 'Hungarian forint',
    number: '348',
  },
  {
    value: 'IDR',
    label: 'IDR',
    code: 'IDR',
    decimals: 2,
    name: 'Indonesian rupiah',
    number: '360',
  },
  {
    value: 'ILS',
    label: 'ILS',
    code: 'ILS',
    decimals: 2,
    name: 'Israeli new shekel',
    number: '376',
  },
  {
    value: 'INR',
    label: 'INR',
    code: 'INR',
    decimals: 2,
    name: 'Indian rupee',
    number: '356',
  },
  {
    value: 'IQD',
    label: 'IQD',
    code: 'IQD',
    decimals: 3,
    name: 'Iraqi dinar',
    number: '368',
  },
  {
    value: 'IRR',
    label: 'IRR',
    code: 'IRR',
    decimals: 0,
    name: 'Iranian rial',
    number: '364',
  },
  {
    value: 'ISK',
    label: 'ISK',
    code: 'ISK',
    decimals: 0,
    name: 'Icelandic króna',
    number: '352',
  },
  {
    value: 'JMD',
    label: 'JMD',
    code: 'JMD',
    decimals: 2,
    name: 'Jamaican dollar',
    number: '388',
  },
  {
    value: 'JOD',
    label: 'JOD',
    code: 'JOD',
    decimals: 3,
    name: 'Jordanian dinar',
    number: '400',
  },
  {
    value: 'JPY',
    label: 'JPY',
    code: 'JPY',
    decimals: 0,
    name: 'Japanese yen',
    number: '392',
  },
  {
    value: 'KES',
    label: 'KES',
    code: 'KES',
    decimals: 2,
    name: 'Kenyan shilling',
    number: '404',
  },
  {
    value: 'KGS',
    label: 'KGS',
    code: 'KGS',
    decimals: 2,
    name: 'Kyrgyzstani som',
    number: '417',
  },
  {
    value: 'KHR',
    label: 'KHR',
    code: 'KHR',
    decimals: 2,
    name: 'Cambodian riel',
    number: '116',
  },
  {
    value: 'KMF',
    label: 'KMF',
    code: 'KMF',
    decimals: 0,
    name: 'Comoro franc',
    number: '174',
  },
  {
    value: 'KPW',
    label: 'KPW',
    code: 'KPW',
    decimals: 0,
    name: 'North Korean won',
    number: '408',
  },
  {
    value: 'KRW',
    label: 'KRW',
    code: 'KRW',
    decimals: 0,
    name: 'South Korean won',
    number: '410',
  },
  {
    value: 'KWD',
    label: 'KWD',
    code: 'KWD',
    decimals: 3,
    name: 'Kuwaiti dinar',
    number: '414',
  },
  {
    value: 'KYD',
    label: 'KYD',
    code: 'KYD',
    decimals: 2,
    name: 'Cayman Islands dollar',
    number: '136',
  },
  {
    value: 'KZT',
    label: 'KZT',
    code: 'KZT',
    decimals: 2,
    name: 'Kazakhstani tenge',
    number: '398',
  },
  {
    value: 'LAK',
    label: 'LAK',
    code: 'LAK',
    decimals: 0,
    name: 'Lao kip',
    number: '418',
  },
  {
    value: 'LBP',
    label: 'LBP',
    code: 'LBP',
    decimals: 0,
    name: 'Lebanese pound',
    number: '422',
  },
  {
    value: 'LKR',
    label: 'LKR',
    code: 'LKR',
    decimals: 2,
    name: 'Sri Lankan rupee',
    number: '144',
  },
  {
    value: 'LRD',
    label: 'LRD',
    code: 'LRD',
    decimals: 2,
    name: 'Liberian dollar',
    number: '430',
  },
  {
    value: 'LSL',
    label: 'LSL',
    code: 'LSL',
    decimals: 2,
    name: 'Lesotho loti',
    number: '426',
  },
  {
    value: 'LTL',
    label: 'LTL',
    code: 'LTL',
    decimals: 2,
    name: 'Lithuanian litas',
    number: '440',
  },
  {
    value: 'LVL',
    label: 'LVL',
    code: 'LVL',
    decimals: 2,
    name: 'Latvian lats',
    number: '428',
  },
  {
    value: 'LYD',
    label: 'LYD',
    code: 'LYD',
    decimals: 3,
    name: 'Libyan dinar',
    number: '434',
  },
  {
    value: 'MAD',
    label: 'MAD',
    code: 'MAD',
    decimals: 2,
    name: 'Moroccan dirham',
    number: '504',
  },
  {
    value: 'MDL',
    label: 'MDL',
    code: 'MDL',
    decimals: 2,
    name: 'Moldovan leu',
    number: '498',
  },
  {
    value: 'MGA',
    label: 'MGA',
    code: 'MGA',
    decimals: 0,
    name: 'Malagasy ariary',
    number: '969',
  },
  {
    value: 'MKD',
    label: 'MKD',
    code: 'MKD',
    decimals: 0,
    name: 'Macedonian denar',
    number: '807',
  },
  {
    value: 'MMK',
    label: 'MMK',
    code: 'MMK',
    decimals: 0,
    name: 'Myanma kyat',
    number: '104',
  },
  {
    value: 'MNT',
    label: 'MNT',
    code: 'MNT',
    decimals: 2,
    name: 'Mongolian tugrik',
    number: '496',
  },
  {
    value: 'MOP',
    label: 'MOP',
    code: 'MOP',
    decimals: 2,
    name: 'Macanese pataca',
    number: '446',
  },
  {
    value: 'MRO',
    label: 'MRO',
    code: 'MRO',
    decimals: 0,
    name: 'Mauritanian ouguiya',
    number: '478',
  },
  {
    value: 'MUR',
    label: 'MUR',
    code: 'MUR',
    decimals: 2,
    name: 'Mauritian rupee',
    number: '480',
  },
  {
    value: 'MVR',
    label: 'MVR',
    code: 'MVR',
    decimals: 2,
    name: 'Maldivian rufiyaa',
    number: '462',
  },
  {
    value: 'MWK',
    label: 'MWK',
    code: 'MWK',
    decimals: 2,
    name: 'Malawian kwacha',
    number: '454',
  },
  {
    value: 'MXN',
    label: 'MXN',
    code: 'MXN',
    decimals: 2,
    name: 'Mexican peso',
    number: '484',
  },
  {
    value: 'MXV',
    label: 'MXV',
    code: 'MXV',
    decimals: 2,
    name: 'Mexican Unidad de Inversion (UDI) (funds code)',
    number: '979',
  },
  {
    value: 'MYR',
    label: 'MYR',
    code: 'MYR',
    decimals: 2,
    name: 'Malaysian ringgit',
    number: '458',
  },
  {
    value: 'MZN',
    label: 'MZN',
    code: 'MZN',
    decimals: 2,
    name: 'Mozambican metical',
    number: '943',
  },
  {
    value: 'NAD',
    label: 'NAD',
    code: 'NAD',
    decimals: 2,
    name: 'Namibian dollar',
    number: '516',
  },
  {
    value: 'NGN',
    label: 'NGN',
    code: 'NGN',
    decimals: 2,
    name: 'Nigerian naira',
    number: '566',
  },
  {
    value: 'NIO',
    label: 'NIO',
    code: 'NIO',
    decimals: 2,
    name: 'Nicaraguan córdoba',
    number: '558',
  },
  {
    value: 'NOK',
    label: 'NOK',
    code: 'NOK',
    decimals: 2,
    name: 'Norwegian krone',
    number: '578',
  },
  {
    value: 'NPR',
    label: 'NPR',
    code: 'NPR',
    decimals: 2,
    name: 'Nepalese rupee',
    number: '524',
  },
  {
    value: 'NZD',
    label: 'NZD',
    code: 'NZD',
    decimals: 2,
    name: 'New Zealand dollar',
    number: '554',
  },
  {
    value: 'OMR',
    label: 'OMR',
    code: 'OMR',
    decimals: 3,
    name: 'Omani rial',
    number: '512',
  },
  {
    value: 'PAB',
    label: 'PAB',
    code: 'PAB',
    decimals: 2,
    name: 'Panamanian balboa',
    number: '590',
  },
  {
    value: 'PEN',
    label: 'PEN',
    code: 'PEN',
    decimals: 2,
    name: 'Peruvian nuevo sol',
    number: '604',
  },
  {
    value: 'PGK',
    label: 'PGK',
    code: 'PGK',
    decimals: 2,
    name: 'Papua New Guinean kina',
    number: '598',
  },
  {
    value: 'PHP',
    label: 'PHP',
    code: 'PHP',
    decimals: 2,
    name: 'Philippine peso',
    number: '608',
  },
  {
    value: 'PKR',
    label: 'PKR',
    code: 'PKR',
    decimals: 2,
    name: 'Pakistani rupee',
    number: '586',
  },
  {
    value: 'PLN',
    label: 'PLN',
    code: 'PLN',
    decimals: 2,
    name: 'Polish złoty',
    number: '985',
  },
  {
    value: 'PYG',
    label: 'PYG',
    code: 'PYG',
    decimals: 0,
    name: 'Paraguayan guaraní',
    number: '600',
  },
  {
    value: 'QAR',
    label: 'QAR',
    code: 'QAR',
    decimals: 2,
    name: 'Qatari riyal',
    number: '634',
  },
  {
    value: 'RON',
    label: 'RON',
    code: 'RON',
    decimals: 2,
    name: 'Romanian new leu',
    number: '946',
  },
  {
    value: 'RSD',
    label: 'RSD',
    code: 'RSD',
    decimals: 2,
    name: 'Serbian dinar',
    number: '941',
  },
  {
    value: 'RUB',
    label: 'RUB',
    code: 'RUB',
    decimals: 2,
    name: 'Russian rouble',
    number: '643',
  },
  {
    value: 'RWF',
    label: 'RWF',
    code: 'RWF',
    decimals: 0,
    name: 'Rwandan franc',
    number: '646',
  },
  {
    value: 'SAR',
    label: 'SAR',
    code: 'SAR',
    decimals: 2,
    name: 'Saudi riyal',
    number: '682',
  },
  {
    value: 'SBD',
    label: 'SBD',
    code: 'SBD',
    decimals: 2,
    name: 'Solomon Islands dollar',
    number: '90',
  },
  {
    value: 'SCR',
    label: 'SCR',
    code: 'SCR',
    decimals: 2,
    name: 'Seychelles rupee',
    number: '690',
  },
  {
    value: 'SDG',
    label: 'SDG',
    code: 'SDG',
    decimals: 2,
    name: 'Sudanese pound',
    number: '938',
  },
  {
    value: 'SEK',
    label: 'SEK',
    code: 'SEK',
    decimals: 2,
    name: 'Swedish krona/kronor',
    number: '752',
  },
  {
    value: 'SGD',
    label: 'SGD',
    code: 'SGD',
    decimals: 2,
    name: 'Singapore dollar',
    number: '702',
  },
  {
    value: 'SHP',
    label: 'SHP',
    code: 'SHP',
    decimals: 2,
    name: 'Saint Helena pound',
    number: '654',
  },
  {
    value: 'SLL',
    label: 'SLL',
    code: 'SLL',
    decimals: 0,
    name: 'Sierra Leonean leone',
    number: '694',
  },
  {
    value: 'SOS',
    label: 'SOS',
    code: 'SOS',
    decimals: 2,
    name: 'Somali shilling',
    number: '706',
  },
  {
    value: 'SRD',
    label: 'SRD',
    code: 'SRD',
    decimals: 2,
    name: 'Surinamese dollar',
    number: '968',
  },
  {
    value: 'SSP',
    label: 'SSP',
    code: 'SSP',
    decimals: 2,
    name: 'South Sudanese pound',
    number: '728',
  },
  {
    value: 'STD',
    label: 'STD',
    code: 'STD',
    decimals: 0,
    name: 'São Tomé and Príncipe dobra',
    number: '678',
  },
  {
    value: 'SYP',
    label: 'SYP',
    code: 'SYP',
    decimals: 2,
    name: 'Syrian pound',
    number: '760',
  },
  {
    value: 'SZL',
    label: 'SZL',
    code: 'SZL',
    decimals: 2,
    name: 'Swazi lilangeni',
    number: '748',
  },
  {
    value: 'THB',
    label: 'THB',
    code: 'THB',
    decimals: 2,
    name: 'Thai baht',
    number: '764',
  },
  {
    value: 'TJS',
    label: 'TJS',
    code: 'TJS',
    decimals: 2,
    name: 'Tajikistani somoni',
    number: '972',
  },
  {
    value: 'TMT',
    label: 'TMT',
    code: 'TMT',
    decimals: 2,
    name: 'Turkmenistani manat',
    number: '934',
  },
  {
    value: 'TND',
    label: 'TND',
    code: 'TND',
    decimals: 3,
    name: 'Tunisian dinar',
    number: '788',
  },
  {
    value: 'TOP',
    label: 'TOP',
    code: 'TOP',
    decimals: 2,
    name: 'Tongan paʻanga',
    number: '776',
  },
  {
    value: 'TRY',
    label: 'TRY',
    code: 'TRY',
    decimals: 2,
    name: 'Turkish lira',
    number: '949',
  },
  {
    value: 'TTD',
    label: 'TTD',
    code: 'TTD',
    decimals: 2,
    name: 'Trinidad and Tobago dollar',
    number: '780',
  },
  {
    value: 'TWD',
    label: 'TWD',
    code: 'TWD',
    decimals: 2,
    name: 'New Taiwan dollar',
    number: '901',
  },
  {
    value: 'TZS',
    label: 'TZS',
    code: 'TZS',
    decimals: 2,
    name: 'Tanzanian shilling',
    number: '834',
  },
  {
    value: 'UAH',
    label: 'UAH',
    code: 'UAH',
    decimals: 2,
    name: 'Ukrainian hryvnia',
    number: '980',
  },
  {
    value: 'UGX',
    label: 'UGX',
    code: 'UGX',
    decimals: 2,
    name: 'Ugandan shilling',
    number: '800',
  },
  {
    value: 'USD',
    label: 'USD',
    code: 'USD',
    decimals: 2,
    name: 'United States dollar',
    number: '840',
  },
  {
    value: 'USN',
    label: 'USN',
    code: 'USN',
    decimals: 2,
    name: 'United States dollar (next day) (funds code)',
    number: '997',
  },
  {
    value: 'USS',
    label: 'USS',
    code: 'USS',
    decimals: 2,
    name: 'United States dollar (same day) (funds code) (one source[who?] claims it is no longer used, but it is still on the ISO 4217-MA list)',
    number: '998',
  },
  {
    value: 'UYI',
    label: 'UYI',
    code: 'UYI',
    decimals: 0,
    name: 'Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)',
    number: '940',
  },
  {
    value: 'UYU',
    label: 'UYU',
    code: 'UYU',
    decimals: 2,
    name: 'Uruguayan peso',
    number: '858',
  },
  {
    value: 'UZS',
    label: 'UZS',
    code: 'UZS',
    decimals: 2,
    name: 'Uzbekistan som',
    number: '860',
  },
  {
    value: 'VEF',
    label: 'VEF',
    code: 'VEF',
    decimals: 2,
    name: 'Venezuelan bolívar fuerte',
    number: '937',
  },
  {
    value: 'VND',
    label: 'VND',
    code: 'VND',
    decimals: 0,
    name: 'Vietnamese dong',
    number: '704',
  },
  {
    value: 'VUV',
    label: 'VUV',
    code: 'VUV',
    decimals: 0,
    name: 'Vanuatu vatu',
    number: '548',
  },
  {
    value: 'WST',
    label: 'WST',
    code: 'WST',
    decimals: 2,
    name: 'Samoan tala',
    number: '882',
  },
  {
    value: 'XAF',
    label: 'XAF',
    code: 'XAF',
    decimals: 0,
    name: 'CFA franc BEAC',
    number: '950',
  },
  {
    value: 'XAG',
    label: 'XAG',
    code: 'XAG',
    decimals: null,
    name: 'Silver (one troy ounce)',
    number: '961',
  },
  {
    value: 'XAU',
    label: 'XAU',
    code: 'XAU',
    decimals: null,
    name: 'Gold (one troy ounce)',
    number: '959',
  },
  {
    value: 'XBA',
    label: 'XBA',
    code: 'XBA',
    decimals: null,
    name: 'European Composite Unit (EURCO) (bond market unit)',
    number: '955',
  },
  {
    value: 'XBB',
    label: 'XBB',
    code: 'XBB',
    decimals: null,
    name: 'European Monetary Unit (E.M.U.-6) (bond market unit)',
    number: '956',
  },
  {
    value: 'XBC',
    label: 'XBC',
    code: 'XBC',
    decimals: null,
    name: 'European Unit of Account 9 (E.U.A.-9) (bond market unit)',
    number: '957',
  },
  {
    value: 'XBD',
    label: 'XBD',
    code: 'XBD',
    decimals: null,
    name: 'European Unit of Account 17 (E.U.A.-17) (bond market unit)',
    number: '958',
  },
  {
    value: 'XCD',
    label: 'XCD',
    code: 'XCD',
    decimals: 2,
    name: 'East Caribbean dollar',
    number: '951',
  },
  {
    value: 'XDR',
    label: 'XDR',
    code: 'XDR',
    decimals: null,
    name: 'Special drawing rights',
    number: '960',
  },
  {
    value: 'XFU',
    label: 'XFU',
    code: 'XFU',
    decimals: null,
    name: 'UIC franc (special settlement currency)',
    number: 'Nil',
  },
  {
    value: 'XOF',
    label: 'XOF',
    code: 'XOF',
    decimals: 0,
    name: 'CFA franc BCEAO',
    number: '952',
  },
  {
    value: 'XPD',
    label: 'XPD',
    code: 'XPD',
    decimals: null,
    name: 'Palladium (one troy ounce)',
    number: '964',
  },
  {
    value: 'XPF',
    label: 'XPF',
    code: 'XPF',
    decimals: 0,
    name: 'CFP franc',
    number: '953',
  },
  {
    value: 'XPT',
    label: 'XPT',
    code: 'XPT',
    decimals: null,
    name: 'Platinum (one troy ounce)',
    number: '962',
  },
  {
    value: 'XTS',
    label: 'XTS',
    code: 'XTS',
    decimals: null,
    name: 'Code reserved for testing purposes',
    number: '963',
  },
  {
    value: 'XXX',
    label: 'XXX',
    code: 'XXX',
    decimals: null,
    name: 'No currency',
    number: '999',
  },
  {
    value: 'YER',
    label: 'YER',
    code: 'YER',
    decimals: 2,
    name: 'Yemeni rial',
    number: '886',
  },
  {
    value: 'ZAR',
    label: 'ZAR',
    code: 'ZAR',
    decimals: 2,
    name: 'South African rand',
    number: '710',
  },
  {
    value: 'ZMW',
    label: 'ZMW',
    code: 'ZMW',
    decimals: 2,
    name: 'Zambian kwacha',
    number: '967',
  },
];
export enum CodeableConceptType {
  MARITAL_STATUS,
  FEMALE,
}
export enum LanguageType {
  AR_SA,
  BN_BD,
  BN_IN,
  CS_CZ,
  DA_DK,
  DE_AT,
  DE_CH,
  DE_DE,
  EL_GR,
  EN_AU,
  EN_CA,
  EN_GB,
  EN_IE,
  EN_IN,
  EN_NZ,
  EN_US,
  EN_ZA,
  ES_AR,
  ES_CL,
  ES_CO,
  ES_ES,
  ES_MX,
  ES_US,
  FI_FI,
  FR_BE,
  FR_CA,
  FR_CH,
  FR_FR,
  HE_IL,
  HI_IN,
  HU_HU,
  ID_ID,
  IT_CH,
  IT_IT,
  JA_JP,
  KO_KR,
  NL_BE,
  NL_NL,
  NO_NO,
  PL_PL,
  PT_BR,
  PT_PT,
  RO_RO,
  RU_RU,
  SK_SK,
  SV_SE,
  TA_IN,
  TA_LK,
  TH_TH,
  TR_TR,
  ZH_CN,
  ZH_HK,
  ZH_TW,
}

export interface IPatient extends FhirEntity {
  active: boolean;
  nameUse?: string;
  nameText?: string;
  nameFamily: string;
  nameGiven: string;
  namePrefix?: string;
  nameSuffix?: string;

  email1: string;
  email2?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;

  preferredLanguage: LanguageType;
  communicationLanguages: LanguageType[];
}

export interface ICodeableConcept extends Identifiable {
  text: string;
  icon: string;
  isPublic: boolean;
  featuredOrder?: number;
  description?: string;
  type: CodeableConceptType;
  // code 1
  system1: string;
  version1?: string;
  code1: string;
  display1: string;
  definition1?: string;
  selectedByUser1?: boolean;
  // code 2
  system2?: string;
  version2?: string;
  code2?: string;
  display2?: string;
  definition2?: string;
  selectedByUser2?: boolean;
  // code 3
  system3?: string;
  version3?: string;
  code3?: string;
  display3?: string;
  definition3?: string;
  selectedByUser3?: boolean;

  parent?: ICodeableConcept;
}

export interface IAddress extends Identifiable {
  name: string;

  lat?: number;
  lon?: number;

  isDefault: boolean;

  type: AddressType;

  streetName: string;

  number: string;
  apartment: string;

  floor?: string;

  additionalDetails?: string;
  postalCode: string;

  city: string;

  county?: string;

  country: string;

  countryCode: string;

  customerId?: bigint;

  siteId?: bigint;

  userId?: bigint;
}

export interface IPractitioner extends FhirReviewableEntity {
  active: boolean;
  nameUse?: string;
  nameText?: string;
  nameFamily: string;
  nameGiven: string;
  namePrefix?: string;
  nameSuffix?: string;

  email1: string;
  email2?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;

  mainAddress?: IAddress;
  addressLat?: number;
  addressLon?: number;

  gender: Gender;
  yearsExperience: number;
  consultationPriceValue: number;
  consultationPriceCurrency: PriceCurrency;

  birthDate: Date;
  preferredLanguage: LanguageType;
  qualificationMedicalField: ICodeableConcept;
  qualificationMedicalSubField?: ICodeableConcept;
  qualificationMedicalSubSubField?: ICodeableConcept;

  communicationId: ICodeableConcept;
  priceIndicator: PriceIndicator;
}

export interface IPractitionerRole extends FhirReviewableEntity {
  active: boolean;
  startPeriod: Date;
  endPeriod?: Date;
  nameText: string;

  availMonStartTimeInMin?: number;
  availMonEndTimeInMin?: number;
  availTueStartTimeInMin?: number;
  availTueEndTimeInMin?: number;
  availWedStartTimeInMin?: number;
  availWedEndTimeInMin?: number;
  availThuStartTimeInMin?: number;
  availThuEndTimeInMin?: number;
  availFriStartTimeInMin?: number;
  availFriEndTimeInMin?: number;
  availSatStartTimeInMin?: number;
  availSatEndTimeInMin?: number;
  availSunStartTimeInMin?: number;
  availSunEndTimeInMin?: number;
  mainAddress?: IAddress;
  addressLat?: number;
  addressLon?: number;
  durationInMin: number;
  priceIndicator: PriceIndicator;
  priceValue: number;
  priceCurrency: PriceCurrency;

  images: DocumentLinkDto[];

  qualificationMedicalField: ICodeableConcept;
  qualificationMedicalSubField?: ICodeableConcept;
  qualificationMedicalSubSubField?: ICodeableConcept;
  qualificationService: ICodeableConcept;

  practitionerId: bigint;
  organizationId: bigint;
  qualificationId: bigint;
}

export interface IUser extends Identifiable {
  username: string;
  fhirId?: string;
  externalIdentifier?: string;
  sub?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  privateEmail?: string;
  password?: string;
  phoneNumber?: string;
  landlinePhoneNumber?: string;
  imageUrl?: string;
  activated: boolean;
  langKey?: string;
  activationKey?: string;
  resetKey?: string;
  resetDate?: Date;
  patientId?: IPatient;
  practitionerId?: IPractitioner;
}

export interface IReview extends FhirEntity {
  title: string;
  verified: boolean;
  stars: number;
  // images
  authorUser?: IUser;
  authorPatient?: IPatient;
  authorPractitioner?: IPractitioner;
  practitioner?: IPractitioner;
  practitionerRole?: IPractitionerRole;

  organization?: IOrganization;
}

export interface ICity {
  id: string;
  name: string;
  nameCode: string;
  countryCode: string;
  lat: number;
  lon: number;
  degreeDistance: number;
}

export interface IOrganization extends FhirReviewableEntity {
  nameText: string;
  crmId: string;
  identifier: string;
  emailAddress: string;
  phoneNumber?: string;

  preferredLanguage: LanguageType;
  communicationLanguages: LanguageType[];

  priceIndicator: PriceIndicator;
  mainAddress: IAddress;
  addressLat?: number;
  addressLon?: number;
  qualificationMedicalField: ICodeableConcept;
  qualificationMedicalSubField?: ICodeableConcept;
  qualificationMedicalSubSubField?: ICodeableConcept;

  addresses: IAddress[];
  reviews: IReview[];
  practitionerRoles: IPractitionerRole[];
}

export enum CredentialType {
  DIPLOMA = 'DIPLOMA',
  PREVIOUS_JOBS = 'PREVIOUS_JOBS',
  EDUCATION = 'EDUCATION',
  CERTIFICATIONS = 'CERTIFICATIONS',

  UNKNOWN = 'UNKNOWN',
}

export enum DegreeType {
  PHD = 'PHD',
  MASTER = 'MASTER',
  BACHELOR = 'BACHELOR',
  HIGH_SCHOOL = 'HIGH_SCHOOL',
  ASSOCIATE = 'ASSOCIATE',
  UNKNOWN = 'UNKNOWN',
}

export interface IProfileCredential extends FhirEntity {
  active: boolean;
  nameText: string;
  credentialType: CredentialType;
  position?: string;
  field?: string;
  degreeType?: DegreeType;
  grade?: string;
  issueOrganization?: string;
  city?: string;
  countryCode?: string;
  credentialId?: string;
  credentialUrl?: string;
  startPeriod?: Date;
  endPeriod?: Date;
  docs?: DocumentLinkDto[];

  practitionerId: bigint;
  organizationId: bigint;
}

export enum AppointmentStatus {
  PROPOSED,
  PENDING,
  BOOKED,
  ARRIVED,
  FULFILLED,
  CANCELLED,
  NOSHOW,
  ENTEREDINERROR,
  CHECKEDIN,
  WAITLIST,
  NULL,
}

export enum AppointmentCancellationReason {
  PATIENT_CANCELED_AUTOMATED_REMINDER,
  PATIENT_CANCELED_PATIENT_PORTAL,
  PATIENT_DECEASED,
  PATIENT_FEELING_BETTER,
  PATIENT_NO_TRANSPORT,
  PATIENT_NOT_COVERED_BY_INSURANCE,
  PATIENT_MOVED_RESIDENCE,
  PATIENT_PREGNANT,
  PATIENT_SCHEDULED_WAIT_LIST,
  PATIENT_UNHAPPY_CHANGED_PROVIDER,

  PROVIDER_PERSONAL,
  PROVIDER_DISCHARGED,
  PROVIDER_EDU_MEETING,
  PROVIDER_HOSPITALIZED,
  PROVIDER_LABS_OUT_OF_RANGE,
  PROVIDER_MRI_SCREENING_NOT_PROCEED,
  PROVIDER_ONCOLOGY_TREATMENT_PLAN_CHANGES,

  MAINTENANCE,
  MEDICINE_INCOMPLETE,
  OTHER_CMS_NOT_AUTHORIZED,
  OTHER_ERROR,
  OTHER_FINANCIAL,
  OTHER_IMPROPER_IV_ACCESS,
  OTHER_NO_INTERPRETER_AVAILABLE,
  OTHER_MED_RESULTS_UNAVAILABLE,
  OTHER_ROOM_MAINTENANCE,
  OTHER_SCHEDULE_ORDER_ERROR,
  OTHER_SILENT_WALK_IN_ERROR,
  OTHER_WEATHER,
}

export enum AppointmentReason {
  ROUTINE,
  WALKIN,
  CHECKUP,
  FOLLOWUP,
  EMERGENCY,
}

export enum AppointmentPriority {
  ASAP,
  CALLBACK_SCHEDULING,
  CALLBACK_PLACER_SCHEDULING,
  CONTACT_RECIPIENT_SCHEDULING,
  ELECTIVE,
  EMERGENCY,
  PREPARE,

  AS_NEEDED,
  ROUTINE,
  RUSH_REPORTING,
  HIGHEST_PRIORITY,
  TIMING_CRITICAL,
  USE_AS_DIRECTED,
  //    URGENT(UrgencyType.HIGH, 1, "UR", "urgent", "Calls for prompt action."),
}

export interface IAppointment extends FhirEntity {
  nameText: string;
  active: boolean;
  hasBeenReviewed: boolean;
  startDate: Date;
  endDate: Date;
  durationInMin: number;
  status: AppointmentStatus;
  cancellationReason?: AppointmentCancellationReason;
  appointmentReason: AppointmentReason;
  priority: AppointmentPriority;
  patientInstruction?: string;
  priceValue: number;
  priceCurrency: PriceCurrency;
  // links
  practitioner: IPractitioner;
  practitioner2Id: number;
  practitionerRoleId: number;
  patientId: number;
  qualificationMedicalField: ICodeableConcept;
  qualificationMedicalSubField?: ICodeableConcept;
  qualificationMedicalSubSubField?: ICodeableConcept;
  qualificationService: ICodeableConcept;
}

export interface IProfileCredentialDto extends FhirEntity {
  active: boolean;
  nameText: string;
  credentialType: CredentialType;

  position?: string;
  field?: string;
  degreeType?: DegreeType;
  grade?: string;
  issueOrganization?: string;
  city?: string;
  countryCode?: string;
  credentialId?: string;
  credentialUrl?: string;
  startPeriod?: Date;
  endPeriod?: Date;

  practitionerId: bigint;
  organizationId?: bigint;

  // private List<DocumentLinkDto> docs = new ArrayList<>();
}

/// OTHERS

export interface IReviewGenericDto {
  id: bigint;
  entityType: EntityType;
  name: string;
  qualification: string;
  description: string;
  starReviewValue: number;
}

export const NULLABLE_TYPE = {
  NULL: 'NULL',
  NOT_NULL: 'NOT_NULL',
};

export interface SetFavoriteDto {
  patientId: bigint;
  practitionerId?: bigint;
  practitionerRoleId?: bigint;
  organisationId?: bigint;
  isFavorite: boolean;
}

export enum OrganizationType {
  Hospital = 'Hospital',
  Clinique = 'Clinique',
  Private_company = 'Private_company',
  Home = 'Home',
  Other = 'Other',
}

export enum OrganizationSize {
  size_1_10 = 'size_1_10',
  size_10_50 = 'size_10_50',
  size_50_100 = 'size_50_100',
  size_100_500 = 'size_100_500',
  size_500 = 'size_500',
}

export interface WizzardScreen {
  title?: string;
  getContent: (crtData: any, setCrtData: any) => {};
  validate: (crtData: any) => boolean;
  onSave: (crtData: any) => boolean;
  // onRender: () => boolean;
  headerRight?: any;
}

export const HOSPITAL_TYPES = [
  { label: 'Hospital', value: OrganizationType.Hospital },
  { label: 'Clinique', value: OrganizationType.Clinique },
  { label: 'Private company', value: OrganizationType.Private_company },
  { label: 'Home', value: OrganizationType.Home },
  { label: 'Other', value: OrganizationType.Other },
];

export const ORGANISATION_SIZE = [
  { label: '1-10 employees', value: OrganizationSize.size_1_10 },
  { label: '10-50 employees', value: OrganizationSize.size_10_50 },
  { label: '50-100 employees', value: OrganizationSize.size_50_100 },
  { label: '100-500 employees', value: OrganizationSize.size_100_500 },
  { label: '500+ employees', value: OrganizationSize.size_500 },
];

export interface CreateOrganizationWithAdminDTO {
  name: string;
  type: OrganizationType;
  orgSize: OrganizationSize;
  email: string;
  phoneNumber: string;
  administratorFirstName: string;
  administratorLastname: string;
  administratorEmail: string;
  administratorPhoneNumber: string;

  street: string;
  additionalDetails: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;

  qualificationMedicalFieldId: bigint;
}

export interface UpdatePractitionerStep1Dto {
  id: string;
  userId: number;
  nameFamily: string;
  nameGiven: string;
  namePrefix: string;
  nameSuffix: string;

  email1: string;
  email2?: string;

  birthDate: Date;
  phoneNumber1: string;
  phoneNumber2?: string;
  yearsExperience: number;
  description?: string;
  preferredLanguage: LanguageType;
  languages: LanguageType[];
}

export interface UpdatePractitionerProfessionDto {
  userId: bigint;
  practitionerId: bigint;
  medicalFieldId: bigint;
  medicalSubFieldIds?: bigint[];
}

export interface HospitalServicesEntryDto {
  organization: IOrganization;
  services: IPractitionerRole[];
}

export interface ServicesOfPractitionerDto {
  entries: HospitalServicesEntryDto[];
  total: number;
}

export const COUNTRIES = [
  { label: 'Afghanistan', code: 'AF', value: 'AF' },
  { label: 'Åland Islands', code: 'AX', value: 'AX' },
  { label: 'Albania', code: 'AL', value: 'AL' },
  { label: 'Algeria', code: 'DZ', value: 'DZ' },
  { label: 'American Samoa', code: 'AS', value: 'DZ' },
  { label: 'Andorra', code: 'AD', value: 'AD' },
  { label: 'Angola', code: 'AO', value: 'AO' },
  { label: 'Anguilla', code: 'AI', value: 'AI' },
  { label: 'Antarctica', code: 'AQ', value: 'AQ' },
  { label: 'Antigua and Barbuda', code: 'AG', value: 'AG' },
  { label: 'Argentina', code: 'AR', value: 'AR' },
  { label: 'Armenia', code: 'AM', value: 'AM' },
  { label: 'Aruba', code: 'AW', value: 'AW' },
  { label: 'Australia', code: 'AU', value: 'AU' },
  { label: 'Austria', code: 'AT', value: 'AT' },
  { label: 'Azerbaijan', code: 'AZ', value: 'AZ' },
  { label: 'Bahamas', code: 'BS', value: 'AZ' },
  { label: 'Bahrain', code: 'BH', value: 'BH' },
  { label: 'Bangladesh', code: 'BD', value: 'BD' },
  { label: 'Barbados', code: 'BB', value: 'BB' },
  { label: 'Belarus', code: 'BY', value: 'BY' },
  { label: 'Belgium', code: 'BE', value: 'BE' },
  { label: 'Belize', code: 'BZ', value: 'BZ' },
  { label: 'Benin', code: 'BJ', value: 'BJ' },
  { label: 'Bermuda', code: 'BM', value: 'BM' },
  { label: 'Bhutan', code: 'BT', value: 'BT' },
  { label: 'Bolivia', code: 'BO', value: 'BO' },
  { label: 'Bosnia and Herzegovina', code: 'BA', value: 'BA' },
  { label: 'Botswana', code: 'BW', value: 'BW' },
  { label: 'Bouvet Island', code: 'BV', value: 'BV' },
  { label: 'Brazil', code: 'BR', value: 'BR' },
  { label: 'British Indian Ocean Territory', code: 'IO', value: 'IO' },
  { label: 'Brunei Darussalam', code: 'BN', value: 'BN' },
  { label: 'Bulgaria', code: 'BG', value: 'BG' },
  { label: 'Burkina Faso', code: 'BF', value: 'BF' },
  { label: 'Burundi', code: 'BI', value: 'BI' },
  { label: 'Cambodia', code: 'KH', value: 'KH' },
  { label: 'Cameroon', code: 'CM', value: 'CM' },
  { label: 'Canada', code: 'CA', value: 'CA' },
  { label: 'Cape Verde', code: 'CV', value: 'CV' },
  { label: 'Cayman Islands', code: 'KY', value: 'KY' },
  { label: 'Central African Republic', code: 'CF', value: 'CF' },
  { label: 'Chad', code: 'TD', value: 'TD' },
  { label: 'Chile', code: 'CL', value: 'CL' },
  { label: 'China', code: 'CN', value: 'CN' },
  { label: 'Christmas Island', code: 'CX', value: 'CX' },
  { label: 'Cocos (Keeling) Islands', code: 'CC', value: 'CC' },
  { label: 'Colombia', code: 'CO', value: 'CO' },
  { label: 'Comoros', code: 'KM', value: 'KM' },
  { label: 'Congo', code: 'CG', value: 'CG' },
  { label: 'Congo, The Democratic Republic of the', code: 'CD', value: 'CD' },
  { label: 'Cook Islands', code: 'CK', value: 'CK' },
  { label: 'Costa Rica', code: 'CR', value: 'CR' },
  { label: "Cote D'Ivoire", code: 'CI', value: 'CI' },
  { label: 'Croatia', code: 'HR', value: 'HR' },
  { label: 'Cuba', code: 'CU', value: 'CU' },
  { label: 'Cyprus', code: 'CY', value: 'CY' },
  { label: 'Czech Republic', code: 'CZ', value: 'CZ' },
  { label: 'Denmark', code: 'DK', value: 'DK' },
  { label: 'Djibouti', code: 'DJ', value: 'DJ' },
  { label: 'Dominica', code: 'DM', value: 'DM' },
  { label: 'Dominican Republic', code: 'DO', value: 'DO' },
  { label: 'Ecuador', code: 'EC', value: 'EC' },
  { label: 'Egypt', code: 'EG', value: 'EG' },
  { label: 'El Salvador', code: 'SV', value: 'SV' },
  { label: 'Equatorial Guinea', code: 'GQ', value: 'GQ' },
  { label: 'Eritrea', code: 'ER', value: 'ER' },
  { label: 'Estonia', code: 'EE', value: 'EE' },
  { label: 'Ethiopia', code: 'ET', value: 'ET' },
  { label: 'Falkland Islands (Malvinas)', code: 'FK', value: 'FK' },
  { label: 'Faroe Islands', code: 'FO', value: 'FO' },
  { label: 'Fiji', code: 'FJ', value: 'FJ' },
  { label: 'Finland', code: 'FI', value: 'FI' },
  { label: 'France', code: 'FR', value: 'FR' },
  { label: 'French Guiana', code: 'GF', value: 'GF' },
  { label: 'French Polynesia', code: 'PF', value: 'PF' },
  { label: 'French Southern Territories', code: 'TF', value: 'TF' },
  { label: 'Gabon', code: 'GA', value: 'GA' },
  { label: 'Gambia', code: 'GM', value: 'GM' },
  { label: 'Georgia', code: 'GE', value: 'GE' },
  { label: 'Germany', code: 'DE', value: 'DE' },
  { label: 'Ghana', code: 'GH', value: 'GH' },
  { label: 'Gibraltar', code: 'GI', value: 'GI' },
  { label: 'Greece', code: 'GR', value: 'GR' },
  { label: 'Greenland', code: 'GL', value: 'GL' },
  { label: 'Grenada', code: 'GD', value: 'GD' },
  { label: 'Guadeloupe', code: 'GP', value: 'GP' },
  { label: 'Guam', code: 'GU', value: 'GU' },
  { label: 'Guatemala', code: 'GT', value: 'GT' },
  { label: 'Guernsey', code: 'GG', value: 'GG' },
  { label: 'Guinea', code: 'GN', value: 'GN' },
  { label: 'Guinea-Bissau', code: 'GW', value: 'GW' },
  { label: 'Guyana', code: 'GY', value: 'GY' },
  { label: 'Haiti', code: 'HT', value: 'HT' },
  { label: 'Heard Island and Mcdonald Islands', code: 'HM', value: 'HM' },
  { label: 'Holy See (Vatican City State)', code: 'VA', value: 'VA' },
  { label: 'Honduras', code: 'HN', value: 'HN' },
  { label: 'Hong Kong', code: 'HK', value: 'HK' },
  { label: 'Hungary', code: 'HU', value: 'HU' },
  { label: 'Iceland', code: 'IS', value: 'IS' },
  { label: 'India', code: 'IN', value: 'IN' },
  { label: 'Indonesia', code: 'ID', value: 'ID' },
  { label: 'Iran, Islamic Republic Of', code: 'IR', value: 'IR' },
  { label: 'Iraq', code: 'IQ', value: 'IQ' },
  { label: 'Ireland', code: 'IE', value: 'IE' },
  { label: 'Isle of Man', code: 'IM', value: 'IM' },
  { label: 'Israel', code: 'IL', value: 'IL' },
  { label: 'Italy', code: 'IT', value: 'IT' },
  { label: 'Jamaica', code: 'JM', value: 'JM' },
  { label: 'Japan', code: 'JP', value: 'JP' },
  { label: 'Jersey', code: 'JE', value: 'JE' },
  { label: 'Jordan', code: 'JO', value: 'JO' },
  { label: 'Kazakhstan', code: 'KZ', value: 'KZ' },
  { label: 'Kenya', code: 'KE', value: 'KE' },
  { label: 'Kiribati', code: 'KI', value: 'KI' },
  { label: "Korea, Democratic People'S Republic of", code: 'KP', value: 'KP' },
  { label: 'Korea, Republic of', code: 'KR', value: 'KR' },
  { label: 'Kuwait', code: 'KW', value: 'KW' },
  { label: 'Kyrgyzstan', code: 'KG', value: 'KG' },
  { label: "Lao People'S Democratic Republic", code: 'LA', value: 'LA' },
  { label: 'Latvia', code: 'LV', value: 'LV' },
  { label: 'Lebanon', code: 'LB', value: 'LB' },
  { label: 'Lesotho', code: 'LS', value: 'LS' },
  { label: 'Liberia', code: 'LR', value: 'LR' },
  { label: 'Libyan Arab Jamahiriya', code: 'LY', value: 'LY' },
  { label: 'Liechtenstein', code: 'LI', value: 'LI' },
  { label: 'Lithuania', code: 'LT', value: 'LT' },
  { label: 'Luxembourg', code: 'LU', value: 'LU' },
  { label: 'Macao', code: 'MO', value: 'MO' },
  {
    label: 'Macedonia',
    code: 'MK',
    value: 'MK',
  },
  { label: 'Madagascar', code: 'MG', value: 'MG' },
  { label: 'Malawi', code: 'MW', value: 'MW' },
  { label: 'Malaysia', code: 'MY', value: 'MY' },
  { label: 'Maldives', code: 'MV', value: 'MV' },
  { label: 'Mali', code: 'ML', value: 'ML' },
  { label: 'Malta', code: 'MT', value: 'MT' },
  { label: 'Marshall Islands', code: 'MH', value: 'MH' },
  { label: 'Martinique', code: 'MQ', value: 'MQ' },
  { label: 'Mauritania', code: 'MR', value: 'MR' },
  { label: 'Mauritius', code: 'MU', value: 'MU' },
  { label: 'Mayotte', code: 'YT', value: 'YT' },
  { label: 'Mexico', code: 'MX', value: 'MX' },
  { label: 'Micronesia, Federated States of', code: 'FM', value: 'FM' },
  { label: 'Moldova, Republic of', code: 'MD', value: 'MD' },
  { label: 'Monaco', code: 'MC', value: 'MC' },
  { label: 'Mongolia', code: 'MN', value: 'MN' },
  { label: 'Montserrat', code: 'MS', value: 'MS' },
  { label: 'Morocco', code: 'MA', value: 'MA' },
  { label: 'Mozambique', code: 'MZ', value: 'MZ' },
  { label: 'Myanmar', code: 'MM', value: 'MM' },
  { label: 'Namibia', code: 'NA', value: 'NA' },
  { label: 'Nauru', code: 'NR', value: 'NR' },
  { label: 'Nepal', code: 'NP', value: 'NP' },
  { label: 'Netherlands', code: 'NL', value: 'NL' },
  { label: 'Netherlands Antilles', code: 'AN', value: 'AN' },
  { label: 'New Caledonia', code: 'NC', value: 'NC' },
  { label: 'New Zealand', code: 'NZ', value: 'NZ' },
  { label: 'Nicaragua', code: 'NI', value: 'NI' },
  { label: 'Niger', code: 'NE', value: 'NE' },
  { label: 'Nigeria', code: 'NG', value: 'NG' },
  { label: 'Niue', code: 'NU', value: 'NU' },
  { label: 'Norfolk Island', code: 'NF', value: 'NF' },
  { label: 'Northern Mariana Islands', code: 'MP', value: 'MP' },
  { label: 'Norway', code: 'NO', value: 'NO' },
  { label: 'Oman', code: 'OM', value: 'OM' },
  { label: 'Pakistan', code: 'PK', value: 'PK' },
  { label: 'Palau', code: 'PW', value: 'PW' },
  { label: 'Palestinian Territory, Occupied', code: 'PS', value: 'PS' },
  { label: 'Panama', code: 'PA', value: 'PA' },
  { label: 'Papua New Guinea', code: 'PG', value: 'PG' },
  { label: 'Paraguay', code: 'PY', value: 'PY' },
  { label: 'Peru', code: 'PE', value: 'PE' },
  { label: 'Philippines', code: 'PH', value: 'PH' },
  { label: 'Pitcairn', code: 'PN', value: 'PN' },
  { label: 'Poland', code: 'PL', value: 'PL' },
  { label: 'Portugal', code: 'PT', value: 'PT' },
  { label: 'Puerto Rico', code: 'PR', value: 'PR' },
  { label: 'Qatar', code: 'QA', value: 'QA' },
  { label: 'Reunion', code: 'RE', value: 'RE' },
  { label: 'Romania', code: 'RO', value: 'RO' },
  { label: 'Russian Federation', code: 'RU', value: 'RU' },
  { label: 'RWANDA', code: 'RW', value: 'RW' },
  { label: 'Saint Helena', code: 'SH', value: 'SH' },
  { label: 'Saint Kitts and Nevis', code: 'KN', value: 'KN' },
  { label: 'Saint Lucia', code: 'LC', value: 'LC' },
  { label: 'Saint Pierre and Miquelon', code: 'PM', value: 'PM' },
  { label: 'Saint Vincent and the Grenadines', code: 'VC', value: 'VC' },
  { label: 'Samoa', code: 'WS', value: 'WS' },
  { label: 'San Marino', code: 'SM', value: 'SM' },
  { label: 'Sao Tome and Principe', code: 'ST', value: 'ST' },
  { label: 'Saudi Arabia', code: 'SA', value: 'SA' },
  { label: 'Senegal', code: 'SN', value: 'SN' },
  { label: 'Serbia and Montenegro', code: 'CS', value: 'CS' },
  { label: 'Seychelles', code: 'SC', value: 'SC' },
  { label: 'Sierra Leone', code: 'SL', value: 'SL' },
  { label: 'Singapore', code: 'SG', value: 'SG' },
  { label: 'Slovakia', code: 'SK', value: 'SK' },
  { label: 'Slovenia', code: 'SI', value: 'SI' },
  { label: 'Solomon Islands', code: 'SB', value: 'SB' },
  { label: 'Somalia', code: 'SO', value: 'SO' },
  { label: 'South Africa', code: 'ZA', value: 'ZA' },
  {
    label: 'South Georgia and the South Sandwich Islands',
    code: 'GS',
    value: 'GS',
  },
  { label: 'Spain', code: 'ES', value: 'ES' },
  { label: 'Sri Lanka', code: 'LK', value: 'LK' },
  { label: 'Sudan', code: 'SD', value: 'SD' },
  { label: 'Surilabel', code: 'SR', value: 'SR' },
  { label: 'Svalbard and Jan Mayen', code: 'SJ', value: 'SJ' },
  { label: 'Swaziland', code: 'SZ', value: 'SZ' },
  { label: 'Sweden', code: 'SE', value: 'SE' },
  { label: 'Switzerland', code: 'CH', value: 'CH' },
  { label: 'Syrian Arab Republic', code: 'SY', value: 'SY' },
  { label: 'Taiwan, Province of China', code: 'TW', value: 'TW' },
  { label: 'Tajikistan', code: 'TJ', value: 'TJ' },
  { label: 'Tanzania, United Republic of', code: 'TZ', value: 'TZ' },
  { label: 'Thailand', code: 'TH', value: 'TH' },
  { label: 'Timor-Leste', code: 'TL', value: 'TL' },
  { label: 'Togo', code: 'TG', value: 'TG' },
  { label: 'Tokelau', code: 'TK', value: 'TK' },
  { label: 'Tonga', code: 'TO', value: 'TO' },
  { label: 'Trinidad and Tobago', code: 'TT', value: 'TT' },
  { label: 'Tunisia', code: 'TN', value: 'TN' },
  { label: 'Turkey', code: 'TR', value: 'TR' },
  { label: 'Turkmenistan', code: 'TM', value: 'TM' },
  { label: 'Turks and Caicos Islands', code: 'TC', value: 'TC' },
  { label: 'Tuvalu', code: 'TV', value: 'TV' },
  { label: 'Uganda', code: 'UG', value: 'UG' },
  { label: 'Ukraine', code: 'UA', value: 'UA' },
  { label: 'United Arab Emirates', code: 'AE', value: 'AE' },
  { label: 'United Kingdom', code: 'GB', value: 'GB' },
  { label: 'United States', code: 'US', value: 'US' },
  { label: 'United States Minor Outlying Islands', code: 'UM', value: 'UM' },
  { label: 'Uruguay', code: 'UY', value: 'UY' },
  { label: 'Uzbekistan', code: 'UZ', value: 'UZ' },
  { label: 'Vanuatu', code: 'VU', value: 'VU' },
  { label: 'Venezuela', code: 'VE', value: 'VE' },
  { label: 'Viet Nam', code: 'VN', value: 'VN' },
  { label: 'Virgin Islands, British', code: 'VG', value: 'VG' },
  { label: 'Virgin Islands, U.S.', code: 'VI', value: 'VI' },
  { label: 'Wallis and Futuna', code: 'WF', value: 'WF' },
  { label: 'Western Sahara', code: 'EH', value: 'EH' },
  { label: 'Yemen', code: 'YE', value: 'YE' },
  { label: 'Zambia', code: 'ZM', value: 'ZM' },
  { label: 'Zimbabwe', code: 'ZW', value: 'ZW' },
];

export const NAME_PREFIXES = [
  { label: 'Dr.', value: 'Dr.' },
  { label: 'Drs.', value: 'Drs.' },
  { label: 'Prof.', value: 'Prof.' },
  { label: 'Dr. Prof.', value: 'Dr.Prof.' },
];

export const LANGUAGES = [
  {
    value: 'ar_SA',
    label: 'Arabic',
    country: 'Saudi Arabia',
    description: 'Arabic (Saudi Arabia)',
  },
  {
    value: 'bn_BD',
    label: 'Bangla ',
    country: 'Bangladesh',
    description: 'Bangla (Bangladesh)',
  },
  {
    value: 'bn_IN',
    label: 'Bangla ',
    country: 'India',
    description: 'Bangla (India)',
  },
  {
    value: 'cs_CZ',
    label: 'Czech',
    country: 'Czech Republic',
    description: 'Czech (Czech Republic)',
  },

  {
    value: 'da_DK',
    label: 'Danish ',
    country: 'Denmark',
    description: 'Danish (Denmark)',
  },

  {
    value: 'de_AT',
    label: 'German ',
    country: 'Austria',
    description: 'Austrian German',
  },

  {
    value: 'de_CH',
    label: 'German ',
    country: 'Switzerland',
    description: 'Swiss German',
  },
  {
    value: 'de_DE',
    label: 'German ',
    country: 'Germany',
    description: 'Standard German (as spoken in Germany)',
  },

  {
    value: 'el_GR',
    label: 'Greek',
    country: 'Greece',
    description: 'Modern Greek',
  },

  {
    value: 'en_AU',
    label: 'English',
    country: 'Australia',
    description: 'Australian English ',
  },

  {
    value: 'en_CA',
    label: 'English',
    country: 'Canada',
    description: 'Canadian English',
  },

  {
    value: 'en_GB',
    label: 'English',
    country: 'United Kingdom',
    description: 'British English',
  },

  {
    value: 'en_IE',
    label: 'English',
    country: 'Ireland',
    description: 'Irish English ',
  },

  {
    value: 'en_IN',
    label: 'English',
    country: 'India',
    description: 'Indian English',
  },

  {
    value: 'en_NZ',
    label: 'English',
    country: 'New Zealand',
    description: 'New Zealand English',
  },

  {
    value: 'en_US',
    label: 'English',
    country: 'United States ',
    description: 'US English',
  },

  {
    value: 'en_ZA',
    label: 'English',
    country: 'South Africa',
    description: 'English (South Africa)',
  },

  {
    value: 'es_AR',
    label: 'Spanish',
    country: 'Argentina',
    description: 'Argentine Spanish',
  },

  {
    value: 'es_CL',
    label: 'Spanish',
    country: 'Chile',
    description: 'Chilean Spanish',
  },

  {
    value: 'es_CO',
    label: 'Spanish',
    country: 'Columbia ',
    description: 'Colombian Spanish',
  },

  {
    value: 'es_ES',
    label: 'Spanish',
    country: 'Spain',
    description: 'Castilian Spanish (as spoken in Central_Northern Spain) ',
  },

  {
    value: 'es_MX',
    label: 'Spanish',
    country: 'Mexico',
    description: 'Mexican Spanish',
  },

  {
    value: 'es_US',
    label: 'Spanish',
    country: 'United States ',
    description: 'American Spanish',
  },

  {
    value: 'fi_FI',
    label: 'Finnish',
    country: 'Finland',
    description: 'Finnish (Finland)',
  },

  {
    value: 'fr_BE',
    label: 'French ',
    country: 'Belgium',
    description: 'Belgian French',
  },

  {
    value: 'fr_CA',
    label: 'French ',
    country: 'Canada',
    description: 'Canadian French',
  },

  {
    value: 'fr_CH',
    label: 'French ',
    country: 'Switzerland',
    description: 'Swiss French',
  },
  {
    value: 'fr_FR',
    label: 'French ',
    country: 'France',
    description: 'Standard French (especially in France)',
  },

  {
    value: 'he_IL',
    label: 'Hebrew ',
    country: 'Israel',
    description: 'Hebrew (Israel)',
  },

  {
    value: 'hi_IN',
    label: 'Hindi',
    country: 'India',
    description: 'Hindi (India) ',
  },

  {
    value: 'hu_HU',
    label: 'Hungarian',
    country: 'Hungary',
    description: 'Hungarian (Hungary)',
  },

  {
    value: 'id_ID',
    label: 'Indonesian',
    country: 'Indonesian',
    description: 'Indonesian (Indonesia)',
  },

  {
    value: 'it_CH',
    label: 'Italian',
    country: 'Switzerland',
    description: 'Swiss Italian',
  },
  {
    value: 'it_IT',
    label: 'Italian',
    country: 'Italy',
    description: 'Standard Italian (as spoken in Italy)',
  },

  {
    value: 'ja_JP',
    label: 'Japanese',
    country: 'Japan',
    description: 'Japanese (Japan)',
  },

  {
    value: 'ko_KR',
    label: 'Korean ',
    country: 'Republic of Korea',
    description: 'Korean (Republic of Korea)',
  },

  {
    value: 'nl_BE',
    label: 'Dutch',
    country: 'Belgium',
    description: 'Belgian Dutch ',
  },

  {
    value: 'nl_NL',
    label: 'Dutch',
    country: 'The Netherlands',
    description: 'Standard Dutch (as spoken in The Netherlands) ',
  },

  {
    value: 'no_NO',
    label: 'Norwegian',
    country: 'Norway',
    description: 'Norwegian (Norway) ',
  },
  {
    value: 'pl_PL',
    label: 'Polish ',
    country: 'Poland',
    description: 'Polish (Poland)',
  },

  {
    value: 'pt_BR',
    label: 'Portugese',
    country: 'Brazil',
    description: 'Brazilian Portuguese',
  },

  {
    value: 'pt_PT',
    label: 'Portugese',
    country: 'Portugal ',
    description: 'European Portuguese (as written and spoken in Portugal) ',
  },

  {
    value: 'ro_RO',
    label: 'Romanian',
    country: 'Romania',
    description: 'Romanian (Romania) ',
  },

  {
    value: 'ru_RU',
    label: 'Russian',
    country: 'Russian Federation',
    description: 'Russian (Russian Federation)',
  },

  {
    value: 'sk_SK',
    label: 'Slovak ',
    country: 'Slovakia ',
    description: 'Slovak (Slovakia)',
  },

  {
    value: 'sv_SE',
    label: 'Swedish',
    country: 'Sweden',
    description: 'Swedish (Sweden)',
  },

  {
    value: 'ta_IN',
    label: 'Tamil',
    country: 'India',
    description: 'Indian Tamil',
  },

  {
    value: 'ta_LK',
    label: 'Tamil',
    country: 'Sri Lanka',
    description: 'Sri Lankan Tamil',
  },

  {
    value: 'th_TH',
    label: 'Thai',
    country: 'Thailand ',
    description: 'Thai (Thailand)',
  },

  {
    value: 'tr_TR',
    label: 'Turkish',
    country: 'Turkey',
    description: 'Turkish (Turkey)',
  },

  {
    value: 'zh_CN',
    label: 'Chinese',
    country: 'China',
    description: 'Mainland China, simplified characters',
  },

  {
    value: 'zh_HK',
    label: 'Chinese',
    country: 'Hond Kong',
    description: 'Hong Kong, traditional characters',
  },

  {
    value: 'zh_TW',
    label: 'Chinese',
    country: 'Taiwan',
    description: 'Taiwan, traditional characters ',
  },
];

export enum ActionSheets {
  AddEducationSheet,
}

export const ACTION_SHEET_ADD_EDUCATION = 'AddEducationSheet';
export const ACTION_SHEET_ADD_CERTIFICATE = 'AddCertificateSheet';
export const ACTION_SHEET_SWITCH_ACCOUNT = 'SwitchAccountSheet';
export const ACTION_SHEET_APPOINTMENT_DETAILS = 'AppointmentDetailSheet';
export const ACTION_SHEET_APPOINTMENT_RESCHEDULE = 'AppointmentRescheduleSheet';
export const ACTION_SHEET_APPOINTMENT_ACCEPT = 'AppointmentAcceptSheet';

export const toReviewGenericDto = (entity: any, entityType: EntityType) => {
  if (entityType === EntityType.PRACTITIONER_ENTITY) {
    return practitionerToReviewGenericDto(entity);
  }
  if (entityType === EntityType.PRACTITIONER_ROLE_ENTITY) {
    return practitionerRoleToReviewGenericDto(entity);
  }
  if (entityType === EntityType.ORGANIZATION_ENTITY) {
    return organizationToReviewGenericDto(entity);
  }
  return null;
};

export const practitionerToReviewGenericDto = (entity: IPractitioner) => {
  if (entity && entity.id) {
    let result: IReviewGenericDto = {
      id: entity?.id,
      entityType: EntityType.PRACTITIONER_ENTITY,
      name: getNameForPractitioner(entity),
      qualification: getQualificationForPractitioner(entity),
      description: entity?.description || '',
      starReviewValue: entity?.reviewValue,
    };
    return result;
  }
  return undefined;
};

export const practitionerRoleToReviewGenericDto = (
  entity: IPractitionerRole,
) => {
  if (entity && entity.id) {
    let result: IReviewGenericDto = {
      id: entity?.id,
      entityType: EntityType.PRACTITIONER_ENTITY,
      name: entity?.nameText || '',
      qualification: entity?.nameText, // entity?.qualificationId, // todo fix this
      description: entity?.description || '',
      starReviewValue: entity?.reviewValue,
    };
    return result;
  }
  return undefined;
};

export const organizationToReviewGenericDto = (entity: IOrganization) => {
  if (entity && entity.id) {
    let result: IReviewGenericDto = {
      id: entity?.id,
      entityType: EntityType.ORGANIZATION_ENTITY,
      name: entity?.nameText || '',
      qualification: getQualificationDisplay(entity?.qualificationMedicalField),
      description: entity?.description || '',
      starReviewValue: entity?.reviewValue,
    };
    return result;
  }
  return undefined;
};

export const toImageEntityType = (entityType: EntityType) => {
  switch (entityType) {
    case EntityType.PRACTITIONER_ENTITY:
      return ImageEntityType.PRACTITIONER;
    case EntityType.PATIENT_ENTITY:
      return ImageEntityType.PATIENT;
    case EntityType.ORGANIZATION_ENTITY:
      return ImageEntityType.HOSPITAL;
    default: {
      console.error('Entity type not handled ', entityType);
    }
  }
  return ImageEntityType.PATIENT;
};

export const convertToMultiSelect = (data, nameCallback) => {
  return data.map((entry) => {
    return {
      label: nameCallback ? nameCallback(entry) : entry.name,
      name: nameCallback ? nameCallback(entry) : entry.name,
      value: entry.id,
      key: entry.id,
      id: entry.id,
      obj: entry,
    };
  });
};

export const getPriceDisplay = (value: number, currency: PriceCurrency) => {
  // TODO take into consideration user currency and translate?
  if (value && currency) {
    return value + ' ' + PriceCurrency[currency].toString();
  }
  return 'unknown';
};
