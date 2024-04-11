import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../../../utils/size';
import { Color, FontSize } from '../../../../../../../../utils/GlobalStyles';
import Icon from 'react-native-vector-icons/Feather';

interface IProps {
  header: string;
  description: string;
  location: string;
  rate?: number;
  views?: number;
  key?: number;
  style?: StyleProp<ViewStyle>;
}

const WorkLocationCard: React.FC<IProps> = ({
  header,
  description,
  location,
  rate,
  views,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.img}
        source={require('@assets/DoctorProfile/Avatar.png')}
      />
      <View style={styles.infoContainer}>
        <View style={{ width: '75%' }}>
          <Text style={styles.textHeader}>{header}</Text>
          <Text style={styles.textDescription}>{description}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              style={{ marginRight: scaleWidth(10) }}
              size={15}
              name="map-pin"
            />
            <Text style={styles.textLocation}>{location}</Text>
          </View>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon size={16} name="star" color="#FBA26B" />
            <Text style={styles.textRate}>{rate}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textReviews}>{views} reviews</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WorkLocationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: scaleHeight(10),
    alignItems: 'flex-start',
    borderWidth: 1,
    borderRadius: scaleWidth(15),
    borderColor: Color.disabled,
    marginBottom: scaleHeight(10),
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scaleWidth(7),
    width: '67%',
  },

  textHeader: {
    fontSize: FontSize.fontH3,
    fontWeight: 'bold',
    marginBottom: scaleHeight(5),
  },
  textDescription: {
    fontSize: FontSize.fontH4,
    color: Color.textDisabled,
    marginBottom: scaleHeight(5),
  },
  textReviews: {
    fontSize: FontSize.fontH4,
    color: Color.accent,
    marginBottom: scaleHeight(5),
  },
  textRate: {
    fontSize: FontSize.fontH4,
    color: '#FBA26B',
    marginBottom: scaleHeight(5),
  },
  textLocation: {
    fontSize: FontSize.fontH5,
    marginBottom: scaleHeight(5),
  },

  img: {
    height: '100%',
    width: '22%',
  },
});
