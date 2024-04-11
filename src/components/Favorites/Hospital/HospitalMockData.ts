import { ImageSourcePropType } from 'react-native';

export type Hospital = {
  id: number;
  name: string;
  photos: ImageSourcePropType[];
  logo: ImageSourcePropType;
  specialization: string;
  address: string;
  rate: number;
  reviews: number;
  priceScale: 1 | 2 | 3;
  isNew: boolean;
};

export const HospitalMockData: Hospital[] = [
  {
    id: 1,
    name: 'Grace Hospital',
    specialization: 'Cardiologist',
    address: 'Rochester, NY',
    rate: 4.85,
    reviews: 425,
    priceScale: 2,
    isNew: true,
    logo: require('../../../assets/Devices/img3.png'),
    photos: [
      require('../../../assets/Hospital/Hospital1.png'),
      require('../../../assets/Hospital/Hospital2.png'),
    ],
  },
  {
    id: 2,
    name: 'St. Mary Hospital',
    specialization: 'Cardiologist',
    address: 'Rochester, NY',
    rate: 4.85,
    reviews: 425,
    priceScale: 2,
    isNew: false,
    logo: require('../../../assets/Devices/img6.png'),
    photos: [
      require('../../../assets/Hospital/Hospital2.png'),
      require('../../../assets/Hospital/Hospital1.png'),
    ],
  },
];
