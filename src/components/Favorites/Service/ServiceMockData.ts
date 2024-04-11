import { ImageSourcePropType } from 'react-native';

export type Service = {
  id: number;
  name: string;
  specialization: string;
  address: string;
  rate: number;
  reviews: number;
  price: number;
  photo: ImageSourcePropType;
};

export const ServiceMockData: Service[] = [
  {
    id: 1,
    name: 'Heart check',
    specialization: 'Cardiologist',
    address: 'Grace Hospital',
    price: 500,
    reviews: 215,
    rate: 4.52,
    topContainer: require('../../../assets/Devices/img2.png'),
  },
  {
    id: 2,
    name: 'Heart surgery',
    specialization: 'Cardiologist',
    address: 'Grace Hospital',
    price: 500,
    reviews: 215,
    rate: 4.52,
    topContainer: require('../../../assets/Devices/img3.png'),
  },
  {
    id: 3,
    name: 'Blood test',
    specialization: 'Cardiologist',
    address: 'Grace Hospital',
    price: 500,
    reviews: 215,
    rate: 4.52,
    topContainer: require('../../../assets/Devices/img6.png'),
  },
];
