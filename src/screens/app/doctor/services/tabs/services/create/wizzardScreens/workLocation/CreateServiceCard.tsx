import React from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Color, FontSize } from '../../../../../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../../../../../utils/size';
import { StyleProp } from 'react-native';

interface IProps {
  imageUrl: number;
  title: string;
  description: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CreateServiceCard: React.FC<IProps> = ({
  title,
  imageUrl,
  description,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      style={[
        style,
        {
          alignItems: 'center',
          paddingHorizontal: scaleWidth(25),
          paddingBottom: scaleHeight(15),
          paddingTop: scaleHeight(35),
          borderRadius: scaleWidth(15),
        },
      ]}>
      <Image
        style={{ marginBottom: scaleHeight(35) }}
        source={
          imageUrl === 1
            ? require('@assets/WorkLocation/hospital.png')
            : require('@assets/WorkLocation/plus-circle.png')
        }
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: FontSize.fontH3,
          fontWeight: '500',
          marginBottom: scaleHeight(10),
        }}>
        {title}
      </Text>
      <Text style={{ textAlign: 'center' }}>{description}</Text>
    </TouchableOpacity>
  );
};

export default CreateServiceCard;
