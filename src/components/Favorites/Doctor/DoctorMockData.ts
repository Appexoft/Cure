import { ImageSourcePropType } from 'react-native';

export type Doctor = {
  id: number;
  name: string;
  photo: ImageSourcePropType;
  specialization: string;
  address: string;
  rate: number;
  reviews: number;
  priceScale: 1 | 2 | 3;
};

export const  DoctorMockData: Doctor[] = [

];
